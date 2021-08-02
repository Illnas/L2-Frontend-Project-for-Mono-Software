import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Items from "./Items";
import Pagination from "./Pagination";
import Filter from "./Filter";

const App = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const db = firebase.firestore();
      const data = await db.collection("vehicles").get();
      setItem(data.docs.map((doc) => doc.data()).sort((a, b) => a.name.localeCompare(b.name)) );
      setLoading(false);
    };
    fetchItems();
  }, []);


  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5 mb-5 border">
      <Filter
        filter={filter}
        setFilter={setFilter}
        item={item}
        setItem={setItem}
      />
      <Items
        loading={loading}
        filter={filter}
        setting={setItemsPerPage}
        item={item}
        setItem={setItem}
        first={indexOfFirstItem}
        last={indexOfLastItem}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={item.length}
        paginate={paginate}
        item={item}
        filter={filter}
      />
    </div>
  );
};

export default App;

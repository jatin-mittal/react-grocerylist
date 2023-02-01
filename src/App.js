import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import { useState } from "react";
import Search from "./Search";

function App() {
  const [items, setItem] = useState(JSON.parse(localStorage.getItem("items"))  || [] );

  const [newItem, setNewItem] = useState("");

  const [search , setSearch] = useState("");

  // const length = items.length;
  const handleClick = (id) => {
    // eslint-disable-next-line array-callback-return
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
      
    setItem(listItems);
    localStorage.setItem("items", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItem(listItems);
    localStorage.setItem("items", JSON.stringify(listItems));
  };

  const submit = (e) => {
    const newid = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem1 = {
      id: newid,
      title: e,
      checked: false,
    };
    const ListItems = [...items, newItem1];

    setItem(ListItems);
    localStorage.setItem("items", JSON.stringify(ListItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    submit(newItem);
    setNewItem("");
  };

  // console.log(items.length);
  return (
    <div className="App">
      <Header />
      <Search
      search={search}
      setSearch={setSearch}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items.filter(item => ((item.title).toLowerCase()).includes((search.toLowerCase())) ) }
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;

import Header from './Header';
import Content from './Content';
import './App.css';
import Footer from './Footer';
import { useState ,useEffect } from 'react';
import AddItems from './AddItems';
import SearchItem from './SearchItem';


function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("notesapp")));
  const [newItem, setNewItem] = useState('');
  const [searchItem,setSearchItem] = useState('');
  const addNewItem = (msg) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addItem = { id, checked: false, msg }
    const newList = [...items, addItem];
    setItems(newList);
    localStorage.setItem("notesapp", JSON.stringify(newList))
  }
  const handleCheck = (id) => {
    var newItem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(newItem)
    localStorage.setItem("notesapp", JSON.stringify(newItem))
  }
  const handleDelete = (id) => {
    var newItem = items.filter((item) => item.id !== id)
    setItems(newItem)
    localStorage.setItem("notesapp", JSON.stringify(newItem))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return
    console.log(newItem);
    addNewItem(newItem);
    setNewItem('')

  }
 

  return (
    <main>
      <header className="text-center pb-4 pt-4 header">
        <h1>
          <Header title="Notes App" />
        </h1>
      </header>
      
        <AddItems newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
        <SearchItem searchItem={searchItem} setSearchItem={setSearchItem}  />
        <Content items={items.filter((item)=>((item.msg).toLowerCase().includes(searchItem.toLowerCase())))} handleCheck={handleCheck} handleDelete={handleDelete} setItems={setItems} />
      
      <footer className='footer pt-3 pb-3'> <Footer length={items.length} /> </footer>



    </main>
  );
}

export default App;

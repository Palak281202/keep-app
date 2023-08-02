import { useState } from 'react';
import './App.css';
import Header from './header';
import Makenotw from "./Makenotw"
import Notes from "./Notes"
function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert('Button is clicked.');

    setAddItem((predata)=>{
      return [...predata,note];
    });
    
  }
  const delNote = (id) => {
    setAddItem((predata) => 
      predata.filter((arrele,index)=>{
        return index!==id;
      })
    );
  }
  return (
    <div className="App">
      <Header />
      <Makenotw clickaction={addNote} />
      <div className="disp">
        {addItem.map((val, index) => {
          return <Notes 
          key= {index}
          id = {index}
          title = {val.title}
          content = {val.content}
          delNote = {delNote}/>
        })};

      </div>
    </div>
  );
}

export default App;

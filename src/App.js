import { useState } from "react";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleBtnClick(event) {
    event.preventDefault();

    setListItems([...listItems, "Item_" + (listItems.length + 1)]);

    console.log("Added new Item.", listItems);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        {listItems.map((listItem) => (
          <li>{listItem}</li>
        ))}
      </ul>
      <button onClick={handleBtnClick}>Add List Item</button>
    </div>
  );
}

export default App;

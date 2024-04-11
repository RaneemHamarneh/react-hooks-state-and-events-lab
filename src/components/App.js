import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [settings, setSettings] = useState({
    darkTheme: false
});

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const className = settings.darkTheme ? "dark" : "light";

  function handleToggleClick() {
    setSettings({
        ...settings,
        darkTheme: !settings.darkTheme
    });
  }

  return (
    <div className={className}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;



import './App.css';
import BreadList from './BreadList.jsx'

function App() {
  const breads = [
    {name: "cornbread",
    difficulty: "easy",
    ingredients: ["flour", "egg", "cornmeal", "sugar", "baking powder", "butter", "milk"]
    },
    
    {name: "sourdough",
    difficulty: "hard",
    ingredients: ["starter", "flour", "water", "salt"]
    },
    
    {name: "traditional white",
    difficulty: "intermediate",
    ingredients: ["flour", "water", "yeast", "honey", "salt", "butter" ]
    },
    ]
  return (
    <div className="App">
      <h1>Bread List</h1>
      <BreadList breads={breads}/>
    </div>
  );
}

export default App;

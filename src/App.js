import Container from "./components/container/Container.jsx";
import data from "./helper/data.js";

function App() {
  console.log(data)
  return (
    <div className="App">
      <Container data={data}/>
    </div>
  );
}

export default App;

import "./App.css";
import Map from "./Map";
import Header from "./Header";


function App() {
  return (
    <div className="App">
      <Header/>
        <div className="container mx-auto">
        <Map/>
        </div> 
    </div>
  );
}

export default App;


// todo:
// - add a feature layer component
// - add a basemap layer component
// - build custom lauyer

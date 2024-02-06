import "./App.css";
import Form from "./components/Form";
import ListCountries from "./components/ListCountries";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-slate-100">
      <Navbar />
        <Form />
        <ListCountries />
      </div>
    </>
  );
}

export default App;

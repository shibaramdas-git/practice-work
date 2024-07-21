import "./App.css";
import Accordion from "./components/Accordion/index";
import RandomColorGenerator from "./components/RandomColorGenerator";

function App() {
  return (
    <>
      <div className="App max-w-[1025px]  mx-auto mt-10">
        <h1 className="text-3xl text-center">All practice components : </h1>
        <div className="wrapper flex items-center gap-4 flex-col">
          {/* Accordion component */}
          <Accordion />
          {/* Random color generator component */}
          <RandomColorGenerator />
        </div>
      </div>
    </>
  );
}

export default App;

import Homepage_1 from "./components/Homepage_1";
import Homepage_2 from "./components/Homepage_2";

function App() {
  return (
    <div className="class-container">
      <Homepage_1 title="Hello World" number={1}></Homepage_1>
      <Homepage_2 color="Green"></Homepage_2>
    </div>
  );
}

export default App;
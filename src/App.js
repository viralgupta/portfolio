import LeftCanvas from "./Components/leftCanvas";
import Background from "./Components/background";
import Footer from "./Components/Footer";
import RightCanvas from "./Components/RightCanvas";

function App() {

  return (
    <div className="App h-full w-full">
      <Background />
      <LeftCanvas/>
      <RightCanvas/>
      <Footer />
    </div>
  );
}


export default App;

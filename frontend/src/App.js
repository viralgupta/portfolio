import LeftCanvas from "./Components/leftCanvas";
import Background from "./Components/background";
import Footer from "./Components/Footer";
import RightCanvas from "./Components/RightCanvas";
import { Analytics } from '@vercel/analytics/react';


function App() {

  return (
    <div className="App h-full w-full">
      <Background />
      <LeftCanvas/>
      <RightCanvas/>
      <Footer />
      <Analytics/>
    </div>
  );
}


export default App;

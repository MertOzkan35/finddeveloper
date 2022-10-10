import Rout from "./components/router";
import Navbar from "./components/navbar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <Toaster />
      <Navbar />
      <Rout />
    </div>
  );
}

export default App;

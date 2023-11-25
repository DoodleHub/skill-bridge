import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

export const App = () => (
  <div className="flex flex-col items-center px-7">
    <Navbar />
    <Home />
  </div>
);

import HomeFooter from "../components/HomeFooter";
import HomePage4 from "../components/HomePage4";
import Navbar from "../components/Navbar";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <HomePage4 />
      <HomeFooter />
    </div>
  );
}

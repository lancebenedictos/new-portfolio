import "./App.css";
import Footer from "./components/Footer";
import MainContent from "./components/content/Content";
import Nav from "./components/nav/Nav";
import { useNavStore } from "./store/store";
import { motion } from "framer-motion";

function App() {
  const currentSection = useNavStore((state) => state.currentSection);
  return (
    <motion.div
      className={`flex flex-col  transition-colors  ${
        currentSection === "about" ? "bg-black" : "bg-[$f4f4f4]"
      }`}
    >
      <Nav />
      <MainContent />
      <Footer />
    </motion.div>
  );
}

export default App;

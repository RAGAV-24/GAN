import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
 import About from "./pages/About";
import ImageGeneration from "./pages/ImageGeneration";
import MedicalImaging from "./pages/MedicalImaging";
import VideoPrediction from "./pages/VideoPrediction";
import StyleTransfer from "./pages/StyleTransfer";
import DataAugmentation from "./pages/DataAugmentation";
import AnomalyDetection from "./pages/AnomalyDetection";
import './index.css'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/about" element={<About />} />

        <Route path="/image-generation" element={<ImageGeneration />} />
        <Route path="/medical-imaging" element={<MedicalImaging />} />
        <Route path="/video-prediction" element={<VideoPrediction />} />
        <Route path="/style-transfer" element={<StyleTransfer />} />
        <Route path="/data-augmentation" element={<DataAugmentation />} />
        <Route path="/anomaly-detection" element={<AnomalyDetection />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;

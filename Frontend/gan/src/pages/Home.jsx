import ApplicationCard from "../components/ApplicationCard";

import imageGeneration from "../assets/images/image-generation.png";
import medicalImaging from "../assets/images/medical-imaging.png";
import videoPrediction from "../assets/images/video-prediction.png";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to GAN Applications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ApplicationCard
          title="Image Generation"
          description="Generate realistic images using GANs."
          image={imageGeneration}
        />
        <ApplicationCard
          title="Medical Imaging"
          description="Enhance and analyze medical scans."
          image={medicalImaging }
        />
        <ApplicationCard
          title="Video Prediction"
          description="Predict future video frames for animations."
          image={videoPrediction }
        />
      </div>
    </div>
  );
};
export default Home;

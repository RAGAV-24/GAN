import ApplicationCard from "../components/ApplicationCard";
import imageGeneration from "../assets/images/image-generation.png";
import medicalImaging from "../assets/images/medical-imaging.png";
import videoPrediction from "../assets/images/video-prediction.png";
import styleTransfer from "../assets/images/style-transfer.png";
import dataAugmentation from "../assets/images/data-augmentation.png";
import anomalyDetection from "../assets/images/anomaly-detection.png";

const Applications = () => {
  const applications = [
    {
      title: "Image Generation",
      description: "Generate highly realistic images for creative projects, marketing, and design using GANs.",
      image: imageGeneration,
    },
    {
      title: "Medical Imaging",
      description: "Enhance and analyze medical scans to assist in diagnosis and treatment planning.",
      image: medicalImaging,
    },
    {
      title: "Video Prediction",
      description: "Predict future video frames for animations, simulations, and augmented reality.",
      image: videoPrediction,
    },
    {
      title: "Style Transfer",
      description: "Transform images by applying artistic styles using GAN-based models.",
      image: styleTransfer,
    },
    {
      title: "Data Augmentation",
      description: "Create synthetic data to improve model training and handle class imbalances.",
      image: dataAugmentation,
    },
    {
      title: "Anomaly Detection",
      description: "Identify unusual patterns or defects in images and videos for quality control.",
      image: anomalyDetection,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Applications of GANs</h1>
      <p className="text-center text-gray-700 mb-12">
        Discover how GANs are revolutionizing various industries and enabling innovative solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app, index) => (
          <ApplicationCard
            key={index}
            title={app.title}
            description={app.description}
            image={app.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Applications;

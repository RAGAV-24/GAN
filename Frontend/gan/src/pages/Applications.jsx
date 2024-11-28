import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
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
      link: "/image-generation",  // The route for Image Generation page
    },
    {
      title: "Medical Imaging",
      description: "Enhance and analyze medical scans to assist in diagnosis and treatment planning.",
      image: medicalImaging,
      link: "/medical-imaging",  // The route for Medical Imaging page
    },
    {
      title: "Video Prediction",
      description: "Predict future video frames for animations, simulations, and augmented reality.",
      image: videoPrediction,
      link: "/video-prediction",  // The route for Video Prediction page
    },
    {
      title: "Style Transfer",
      description: "Transform images by applying artistic styles using GAN-based models.",
      image: styleTransfer,
      link: "/style-transfer",  // The route for Style Transfer page
    },
    {
      title: "Data Augmentation",
      description: "Create synthetic data to improve model training and handle class imbalances.",
      image: dataAugmentation,
      link: "/data-augmentation",  // The route for Data Augmentation page
    },
    {
      title: "Anomaly Detection",
      description: "Identify unusual patterns or defects in images and videos for quality control.",
      image: anomalyDetection,
      link: "/anomaly-detection",  // The route for Anomaly Detection page
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
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ApplicationCard
              title={app.title}
              description={app.description}
              image={app.image}
            />
            <div className="p-6">
              <Link to={app.link}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;

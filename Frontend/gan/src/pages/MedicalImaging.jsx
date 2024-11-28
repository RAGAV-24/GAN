
const MedicalImaging = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Medical Imaging with GANs
      </h1>
      <p className="text-center mt-4 text-gray-700">
        Medical imaging has been revolutionized by the use of Generative Adversarial Networks (GANs).
        GANs help in improving the quality of medical scans, assisting in diagnosis, and planning treatment options.
        The ability to generate realistic medical images is a game-changer for healthcare professionals and researchers.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Applications of GANs in Medical Imaging</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Improved image resolution for better diagnosis</li>
            <li>Generation of synthetic medical data for training models</li>
            <li>Filling in missing parts of medical images (image completion)</li>
            <li>De-noising and enhancing medical scan quality</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of GANs in Healthcare</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Helps in identifying medical conditions early through improved image analysis</li>
            <li>Generates synthetic images for rare diseases, improving model performance</li>
            <li>Assists doctors by providing enhanced visualization of medical scans</li>
            <li>Improves the accuracy of radiology reports</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.example.com/research-on-medical-imaging"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          Learn More About Medical Imaging with GANs
        </a>
      </div>
    </div>
  );
};

export default MedicalImaging;

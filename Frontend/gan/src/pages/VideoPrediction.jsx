
const VideoPrediction = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">Video Prediction with GANs</h1>
      <p className="text-center mt-4 text-gray-700">
        Video prediction with GANs helps in forecasting future frames of video sequences. This is useful in fields such as
        autonomous driving, sports analytics, and animation, where predicting the future motion of objects is critical.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Applications of Video Prediction</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Autonomous driving and navigation systems</li>
            <li>Predicting object motion in video surveillance</li>
            <li>Sports analytics for performance forecasting</li>
            <li>Generative animation and video content creation</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Video Prediction</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Improved accuracy in autonomous vehicle navigation</li>
            <li>Faster decision-making in video-based surveillance systems</li>
            <li>Enhanced content generation for films and animations</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.example.com/research-on-video-prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          Learn More About Video Prediction with GANs
        </a>
      </div>
    </div>
  );
};

export default VideoPrediction;

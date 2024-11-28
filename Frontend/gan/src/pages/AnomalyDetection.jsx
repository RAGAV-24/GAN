
const AnomalyDetection = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">Anomaly Detection with GANs</h1>
      <p className="text-center mt-4 text-gray-700">
        Anomaly detection with GANs is critical for identifying unusual patterns in data, especially in areas like fraud detection,
        network security, and health monitoring. GANs have enhanced the ability to detect even the slightest anomalies in complex datasets.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Applications of Anomaly Detection</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Fraud detection in financial transactions</li>
            <li>Network security and intrusion detection</li>
            <li>Identifying rare diseases in medical imaging</li>
            <li>Defect detection in manufacturing processes</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Anomaly Detection</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Enhances security by detecting malicious behavior</li>
            <li>Improves detection of rare events and patterns</li>
            <li>Reduces operational risks and losses</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.example.com/research-on-anomaly-detection"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          Learn More About Anomaly Detection with GANs
        </a>
      </div>
    </div>
  );
};

export default AnomalyDetection;

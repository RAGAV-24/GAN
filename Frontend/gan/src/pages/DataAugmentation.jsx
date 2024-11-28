
const DataAugmentation = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">Data Augmentation with GANs</h1>
      <p className="text-center mt-4 text-gray-700">
        Data augmentation with GANs is essential for generating synthetic data when real-world data is limited.
        It helps in enhancing the variety and size of training datasets, improving the performance of machine learning models.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Applications of Data Augmentation</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Increasing dataset size for training deep learning models</li>
            <li>Improving model generalization</li>
            <li>Creating synthetic images for rare class detection</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Data Augmentation</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Reduces overfitting by increasing dataset diversity</li>
            <li>Enhances model performance on unseen data</li>
            <li>Enables learning from limited data sources</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.example.com/research-on-data-augmentation"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          Learn More About Data Augmentation with GANs
        </a>
      </div>
    </div>
  );
};

export default DataAugmentation;

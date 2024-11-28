
const StyleTransfer = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">Style Transfer with GANs</h1>
      <p className="text-center mt-4 text-gray-700">
        Style transfer allows us to apply artistic styles from one image to another. GANs have made this process
        more realistic and effective, enabling creative applications in digital art, design, and photography.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Applications of Style Transfer</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Transforming photos into artistic paintings</li>
            <li>Applying different art styles to images in digital art</li>
            <li>Creating realistic filters for photos and videos</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Style Transfer</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Enhances creativity by enabling unique artistic styles</li>
            <li>Improves user-generated content by providing creative tools</li>
            <li>Boosts digital marketing and advertising with personalized art</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.example.com/research-on-style-transfer"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          Learn More About Style Transfer with GANs
        </a>
      </div>
    </div>
  );
};

export default StyleTransfer;

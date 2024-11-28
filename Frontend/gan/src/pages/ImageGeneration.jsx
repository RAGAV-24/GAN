

const ImageGeneration = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">Image Generation with GANs</h1>
      <p className="text-center mt-4 text-gray-700">
        Image generation through GANs allows us to create highly realistic images for various applications,
        including art, design, and content creation. GANs have been used to generate images that are indistinguishable
        from real photos, opening up new possibilities in multiple industries.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Applications of Image Generation</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Creating synthetic data for machine learning models</li>
            <li>Artistic design and content generation</li>
            <li>Creating realistic images for video games and animations</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Image Generation</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Generates photorealistic images without the need for real-world data</li>
            <li>Enhances creativity by enabling new art forms and media</li>
            <li>Improves model training by generating additional training data</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.example.com/research-on-image-generation"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          Learn More About Image Generation with GANs
        </a>
      </div>
    </div>
  );
};

export default ImageGeneration;

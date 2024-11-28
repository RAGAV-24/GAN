const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">About GANs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">What are GANs?</h2>
          <p className="text-gray-700 leading-relaxed">
            Generative Adversarial Networks (GANs) are a revolutionary class of
            machine learning models that consist of two neural networks – a
            generator and a discriminator – working against each other. The
            generator creates data, while the discriminator evaluates its
            authenticity, enabling GANs to produce highly realistic outputs.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Why are GANs Important?</h2>
          <p className="text-gray-700 leading-relaxed">
            GANs have redefined the boundaries of artificial intelligence,
            enabling groundbreaking applications in industries like healthcare,
            entertainment, and e-commerce. From generating realistic images to
            enhancing medical imaging, GANs hold the potential to transform the
            way we interact with AI-powered technologies.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="GAN Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Discover the Power of GANs</h3>
        <p className="text-gray-600 mb-6">
          Explore our curated list of applications and see how GANs are shaping
          the future across various domains.
        </p>
        <a
          href="/applications"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Applications
        </a>
      </div>
    </div>
  );
};

export default About;

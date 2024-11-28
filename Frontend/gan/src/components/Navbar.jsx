const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GAN Applications</h1>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/applications" className="hover:underline">Applications</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

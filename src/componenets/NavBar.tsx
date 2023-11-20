
const NavBar = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          {/* <div className="flex items-center">
            <a href="/" className="text-white font-semibold text-lg">Logo</a>
          </div> */}
          <div className="hidden md:block">
            <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
            <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
            <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
            <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

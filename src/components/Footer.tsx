function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            A proficient MERN stack developer , and an enthusiast of Data
            Structures and Algorithms. I also find myself drawn to the realm of
            IoT robots, I'm equally passionate about playing Guitar and games.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/pranav.dhiman.3"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://github.com/pranav343"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/_.prannavv03/"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Noida, India</p>
          <p>Uttar Pradesh 201301</p>
          <p>Email: pranav.dhiman@icloud.com</p>
          <p>Phone: (+91) 7011 874 033</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Pranav Dhiman. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

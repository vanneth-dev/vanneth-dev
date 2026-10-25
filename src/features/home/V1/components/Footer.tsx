const Footer = () => {
  return (
    <footer className="bg-white text-blue-500 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Vanneth. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <a
              href="https://github.com/vanneth-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12a12.06 12.06 0 008.208 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.34-1.74-1.34-1.74-1.1-.75.08-.74.08-.74 1.23.09 1.88 1.26 1.88 1.26 1.08 1.85 2.83 1.31 3.52 1 .1-.79.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23A11.6 11.6 0 0112 6.84a11.6 11.6 0 012.98.4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.06 12.06 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="ml-2">Github</span>
            </a>
            <a
              href="https://linkedin.com/in/vanneth-tak-bb8179225"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 5.03 3.93 6 2.5 6S0 5.03 0 3.5 1.05 1 2.5 1s2.48 1.05 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.6v2.1h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.55 2.55 4.55 5.85V24h-4v-7.5c0-1.8-.03-4.1-2.5-4.1s-2.9 1.95-2.9 4v7.6h-4V8.5z" />
              </svg>
              <span className="ml-2">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

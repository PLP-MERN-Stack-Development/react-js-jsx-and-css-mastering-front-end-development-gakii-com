import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ className = '' }) => {
  return (
    <footer className={`bg-white dark:bg-gray-800 shadow mt-auto ${className}`}>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              About PLP Task Manager
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A simple and efficient task management application built with React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/tasks" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Tasks
                </a>
              </li>
              <li>
                <a href="/api-data" className="text-blue-600 dark:text-blue-400 hover:underline">
                  API Data
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Email: info@plptaskmanager.com</li>
              <li>GitHub: @PLP-MERN-Stack</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
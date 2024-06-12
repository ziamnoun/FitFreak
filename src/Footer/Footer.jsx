import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-transparent text-white py-8 mt-28">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#about" className="hover:underline">About Us</a></li>
                        <li><a href="#services" className="hover:underline">Services</a></li>
                        <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <p>123 Fitness St.</p>
                    <p>Healthy City, Fitland 12345</p>
                    <p>Email: info@fitnesswebsite.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-white hover:text-gray-400">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-white hover:text-gray-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" className="text-white hover:text-gray-400">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://youtube.com" className="text-white hover:text-gray-400">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Fitness Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;


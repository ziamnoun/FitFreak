import { useEffect, useRef } from 'react'; 
import 'animate.css/animate.min.css'; 

const AboutSection = () => {
  const aboutRef = useRef(null); 

  
  useEffect(() => {
    const aboutSection = aboutRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('animate__fadeIn');
        }
      });
    });

    observer.observe(aboutSection);

   
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16  text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={aboutRef}>
          <div className="bg-gray-800 rounded-lg shadow-md p-6 about-card animate__animated">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300">At FitnessHub, we are committed to helping you achieve your fitness goals by providing personalized training programs tailored to your needs and lifestyle. Our mission is to empower individuals to lead healthier and happier lives through sustainable fitness practices.</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-6 about-card animate__animated">
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-300">Our team consists of certified fitness trainers, nutritionists, and wellness experts dedicated to guiding you on your fitness journey. With years of experience and a passion for health and wellness, we are here to support and motivate you every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

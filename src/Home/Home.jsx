
import React from 'react';
import FeaturedSection from '../Featured/FeaturedSection';
import AboutSection from '../About/AboutSection';

const Home = () => {
    return (
    <div className="div">
        <div className="hero min-h-screen bg-transparent">
  <div className="hero-content text-center text-white">
    <div className="max-w-md mx-auto">
      <h1 className="text-5xl font-bold mb-4">Achieve Your Fitness Goals</h1>
      <p className="mb-8">Transform your body, mind, and life with our personalized fitness programs and expert guidance.</p>
      <button className="btn bg-[#333333] text-white">Get Started</button>
    </div>
  </div>
</div>
<div className="div">

</div>
<div className="div"
 style={{ 
  backgroundImage: "url('https://i.ibb.co/KjXdkGL/black-low-poly-geometric-background-vector.jpg')" 
}}>
<FeaturedSection></FeaturedSection>
<AboutSection></AboutSection>
</div>

    </div>

    );
};

export default Home;

import React from 'react';
import FeaturedSection from '../Featured/FeaturedSection';
import AboutSection from '../About/AboutSection';
import NewsLetterSection from '../NewsLetterSection/NewsLetterSection';
import FeateredClass from '../FeateredClass/FeateredClass';
import LatestForum from '../LatestForum/LatuestForum';
import TeamSection from '../TeamSection/TeamSection';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div className="div">
        <div className="hero h-[50vh] lg:min-h-screen bg-transparent">
  <div className="hero-content text-center text-white">
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4">Achieve Your Fitness Goals</h1>
      <p className="mb-8">Transform your body, mind, and life with our personalized fitness programs and expert guidance.</p>
      <Link to="/AllClasses"><button className="btn bg-[#333333] text-white">Get Started</button></Link>
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
<FeateredClass></FeateredClass>
<LatestForum></LatestForum>
<NewsLetterSection></NewsLetterSection>
<TeamSection></TeamSection>


</div>

    </div>

    );
};

export default Home;
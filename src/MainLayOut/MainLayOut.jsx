// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import { Outlet } from 'react-router-dom';

// const MainLayOut = () => {
//     return (
        
//         <div className=' min-h-screen'
//         style={{ 
//             backgroundImage: "url('https://i.ibb.co/z5Q5VY3/360-F-492065380-e-Sl-Hdkd-NBy6-Ar-Nkk5g-V0-Lme1qhv-Tos-SI.jpg')", 
//             backgroundSize: 'cover', 
//             backgroundPosition: 'center' 
//         }}>
//             <Navbar></Navbar>
//             <Outlet></Outlet>
          
//          </div>
        
//     );
// };

// export default MainLayOut;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MainLayOut = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isAllClasses=location.pathname === '/AllClasses'

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        fade: true
    };

    return (
        <div className='relative min-h-screen'>
            {isHomePage && (
                <div className="absolute inset-0 z-0 w-[100%]">
                    <Slider {...settings}>
                        <div>
                            <img 
                                src="https://i.ibb.co/02Xy1Yw/360-F-429356296-CVQ5-Lk-C6-Pl55k-UNLq-Lis-VKg-Tw9vjyif1.jpg" 
                                alt="Slide 1" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <img 
                                src="https://i.ibb.co/j84rXdh/360-F-350818949-l-JTfz-STDr79e9-Kn55-PUVZj-N19ct20u-Gc.jpg" 
                                alt="Slide 2" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <img 
                                src="https://i.ibb.co/SfxJYzb/360-F-350818931-54-A6-UVQi-JIK8-UHFWB0-NTGSIKO9jy-Tb-QP.jpg" 
                                alt="Slide 3" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                      
                    </Slider>
                </div>
            )}
               {isAllClasses && (
                <div 
                    className="min-h-screen bg-cover bg-center"
                    style={{ 
                        backgroundImage: "url('https://i.ibb.co/z5Q5VY3/360-F-492065380-e-Sl-Hdkd-NBy6-Ar-Nkk5g-V0-Lme1qhv-Tos-SI.jpg')" 
                    }}
                >
                    <Navbar />
                    <Outlet />
                </div>
            )}
          
          {isHomePage && (
                <div className="relative z-10">
                    <Navbar />
                    <Outlet />
                </div>
            )}
        </div>
    );
};









   
export default MainLayOut;




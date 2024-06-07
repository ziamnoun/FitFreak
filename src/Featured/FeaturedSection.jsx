import React from 'react';


const FeaturedSection = () => {
    return (
        <div className="py-16 "  >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <img src="https://www.shutterstock.com/image-vector/online-fitness-icon-video-home-260nw-1887713704.jpg" alt="Feature 1" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Workouts</h3>
                <p className="text-white">Get tailored workout plans designed to help you achieve your fitness goals efficiently.</p>
              </div>
            </div>
            

            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8Yc9dg26Zsj_z__mf0WRXKzubkRajwTtMg&s" alt="Feature 2" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nutrition Guidance</h3>
                <p className="text-white">Receive expert advice on nutrition to support your workouts and enhance your results.</p>
              </div>
            </div>
            
         
            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5g9I3r-hddWEFsORK4uqxHwe-1UpPbSEuAQ&s" alt="Feature 3" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-white">Track your progress over time with comprehensive tools and visual reports.</p>
              </div>
            </div>
      
 
            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <img src="https://t3.ftcdn.net/jpg/01/71/62/58/360_F_171625859_OadtpFymzsOGYeoeu9VN8Fc3MlbQ7PqM.jpg" alt="Feature 4" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Group Classes</h3>
                <p className="text-white">Join group fitness classes led by experienced trainers for motivation and fun.</p>
              </div>
            </div>
            
    
            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRG3RPZsZGcmf9beSlxFQ_Fz_-MjhOBkBJw&s" alt="Feature 5" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Online Support</h3>
                <p className="text-white">Access online support and community forums to stay connected and motivated.</p>
              </div>
            </div>
            
         
            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <img src="https://static.vecteezy.com/system/resources/previews/015/279/259/original/professional-man-expert-icon-business-advice-decision-support-employment-services-icon-suggestion-illustration-vector.jpg" alt="Feature 6" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-white">Receive personalized advice and tips from fitness experts to optimize your workouts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    );
};

export default FeaturedSection;
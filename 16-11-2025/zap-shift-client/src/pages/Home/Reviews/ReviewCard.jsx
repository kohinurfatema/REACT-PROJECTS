import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {

    const {userName , review:testimonial, user_photoURL} = review;

    return (
        <div class="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-2xl transition duration-300 ease-in-out hover:shadow-3xl transform hover:scale-[1.01] border-b-4 border-primary-teal/50">

        
            <div class="mb-6">
            <FaQuoteLeft className='text-primary mb-4 text-2xl'></FaQuoteLeft>
                
            </div>

            <p class="text-xl italic mb-8">
              {testimonial}
            </p>

        
            <div class="border-t-2 border-dashed border-primary-teal/30 mb-8"></div>

        
            <div class="flex items-center space-x-4">
            
                <div class="w-14 h-14 rounded-full bg-dark-teal flex items-center justify-center text-white text-xl font-bold border-2 border-primary-teal/50">
                   <img src={user_photoURL} alt="" />
                </div>

        
                <div>
                    <p class="text-lg font-bold text-gray-800">{userName}</p>
                    <p class="text-sm text-gray-500">Senior Product Designer</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;
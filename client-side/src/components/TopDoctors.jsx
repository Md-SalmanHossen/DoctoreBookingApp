import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

   const navigate=useNavigate();
   const {doctors}=useContext(AppContext)

   return (

      <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
         <h1 className='text-3xl font-medium'>Top Doctors Book</h1>
         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>

         <div className='w-full grid grid-cols-auto gap-6 pt-5 px-3 py-6 sm:px-0' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {
               doctors.slice(0, 10).map((item, index) => (
                  <div
                     onClick={()=>navigate(`/appointment/${item._id}`)}
                     className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300'
                     key={index}
                  >
                     <img
                        className='bg-blue-50 h-48 w-full object-cover hover:bg-primary ' // Maintain size and aspect ratio
                        src={item.image}
                        alt={`Dr. ${item.name}`} // More descriptive alt text
                     />
                     <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-green-500'>
                           <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                           <p>Available</p>
                        </div>
                        <p className='text-lg font-semibold'>{item.name}</p>
                        <p className='text-sm text-gray-500'>{item.speciality}</p>
                     </div>
                  </div>
               ))
            }
         </div>
         <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300'>
            More
         </button>
      </div>
   );
}

export default TopDoctors;

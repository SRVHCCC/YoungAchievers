import React, { useState } from 'react';

const BookNow = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    age: '',
    program: 'Preschool',
    date: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Playful Header */}
      <section className="bg-[#00BCD4] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Book a Visit</h1>
        <p className="text-lg opacity-90">Secure your child's bright future with YoungAchivers</p>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Left: Enrollment Form */}
          <div className="lg:w-2/3 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-[#673AB7] p-6 text-white flex justify-between items-center">
              <h2 className="text-xl font-bold">Booking Information</h2>
              <span className="bg-white/20 px-4 py-1 rounded-full text-xs">Step 1 of 2</span>
            </div>
            
            <form className="p-8 space-y-8">
              {/* Parent Info */}
              <div>
                <h3 className="text-[#FF5E5E] font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="bg-[#FF5E5E] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                  Parent Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Parent Full Name" 
                    className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-[#00BCD4] outline-none transition"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-[#00BCD4] outline-none transition"
                  />
                </div>
              </div>

              {/* Child Info */}
              <div>
                <h3 className="text-[#4FC3F7] font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="bg-[#4FC3F7] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                  Child Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Child Full Name" 
                    className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-[#00BCD4] outline-none transition"
                  />
                  <select className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-[#00BCD4] outline-none transition bg-white">
                    <option>Select Age Group</option>
                    <option>2-3 Years</option>
                    <option>3-4 Years</option>
                    <option>4-5 Years</option>
                  </select>
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <h3 className="text-[#FFB74D] font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="bg-[#FFB74D] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                  Select Program & Date
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-[#00BCD4] outline-none transition bg-white">
                    <option>Preschool</option>
                    <option>Kindergarten</option>
                    <option>After School Club</option>
                  </select>
                  <input 
                    type="date" 
                    className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-[#00BCD4] outline-none transition"
                  />
                </div>
              </div>

              <button type="button" className="w-full bg-[#00BCD4] text-white py-5 rounded-2xl font-bold text-xl hover:bg-cyan-600 shadow-xl transition-all active:scale-95">
                CONFIRM BOOKING
              </button>
            </form>
          </div>

          {/* Right: Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-[#FF5E5E] rounded-3xl p-8 text-white shadow-xl sticky top-28">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">Why Book Now?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <p className="font-bold">Free Trial Day</p>
                    <p className="text-sm opacity-80">Book a visit and let your child experience a day for free.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">🏫</span>
                  <div>
                    <p className="font-bold">Personal Tour</p>
                    <p className="text-sm opacity-80">Get a 1-on-1 tour of our classrooms and facilities.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">📝</span>
                  <div>
                    <p className="font-bold">Instant Support</p>
                    <p className="text-sm opacity-80">Our advisors will contact you within 24 hours.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 bg-white/10 p-4 rounded-2xl text-center border border-white/20">
                <p className="text-sm">Need help booking?</p>
                <p className="font-bold text-lg">+012 345 6789</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BookNow;
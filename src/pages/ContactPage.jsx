import React from 'react';

const ContactPage = () => {
  return (
    <div className="font-sans">
      {/* Header Banner */}
      <section className="bg-[#FFB74D] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90">Have questions? We'd love to hear from you!</p>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#FF5E5E]">
            <h2 className="text-3xl font-bold text-[#673AB7] mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Child's Name</label>
                  <input type="text" placeholder="Enter name" className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#4FC3F7] outline-none transition" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Your Email</label>
                  <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#4FC3F7] outline-none transition" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#4FC3F7] outline-none transition bg-white">
                  <option>Admission Inquiry</option>
                  <option>General Question</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea rows="5" placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#4FC3F7] outline-none transition"></textarea>
              </div>

              <button className="bg-[#FF5E5E] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e14d4d] transition-all shadow-lg transform hover:-translate-y-1">
                SUBMIT MESSAGE
              </button>
            </form>
          </div>

          {/* Right Side: Information & Info Cards */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-[#4FC3F7] p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Visit Our School</h3>
              <p className="mb-4">123 Education Lane, Learning City, State 45678</p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> hello@youngachivers.com</p>
                <p><strong>Phone:</strong> +012 345 6789</p>
              </div>
            </div>

            <div className="bg-[#673AB7] p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00am - 4:00pm</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>9:00am - 1:00pm</span></li>
                <li className="flex justify-between text-red-300"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>

            {/* Simple Map Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-inner border-4 border-gray-100">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01923456789!2d-122.084249!3d37.421999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI1JzE5LjIiTiAxMjLCsDA1JzAzLjMiVw!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
               </iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
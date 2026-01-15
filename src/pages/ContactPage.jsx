import React from 'react';

const ContactPage = () => {
  return (
    <div className="font-sans bg-white text-slate-800">
      
      {/* 1. SIMPLE HEADER BANNER */}
      <section className="bg-[#FFB74D] py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">
            Gram Patna Tamoli, District Panna (M.P.)
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTION */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: SIMPLE CONTACT FORM */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-[#673AB7]">Send an Inquiry</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold mb-2">Child's Name</label>
                <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#4FC3F7] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Mobile Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#4FC3F7] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Class for Admission</label>
                <select className="w-full p-3 rounded-lg border border-slate-300 outline-none">
                  <option>Nursery - UKG</option>
                  <option>Class 1 - 5</option>
                  <option>Class 6 - 8</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full p-3 rounded-lg border border-slate-300 outline-none"></textarea>
              </div>
              <button className="w-full bg-[#FF5E5E] text-white font-bold py-3 rounded-lg hover:bg-red-600 transition shadow-md uppercase tracking-wider">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: ADDRESS & TIMING */}
          <div className="space-y-8">
            
            {/* SCHOOL DETAILS */}
            <div className="p-6 bg-white border-2 border-slate-100 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#4FC3F7]">Our Location</h3>
              <div className="space-y-4">
                <p className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <span>Gram Patna Tamoli, District Panna, <br />Madhya Pradesh - 488333</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a href="tel:+918770698713" className="font-bold hover:text-[#FF5E5E] transition">+91 87706 98713</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  <span>info@youngachievers.com</span>
                </p>
              </div>
            </div>

            {/* TIMINGS */}
            <div className="p-6 bg-white border-2 border-slate-100 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#673AB7]">Office Timings</h3>
              <div className="space-y-2">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Monday – Friday:</span>
                  <span className="font-bold">8:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-bold">8:00 AM – 12:00 PM</span>
                </div>
                <div className="flex justify-between text-red-500 pt-2">
                  <span>Sunday:</span>
                  <span className="font-bold">CLOSED</span>
                </div>
              </div>
            </div>

            {/* MAP VIEW */}
            <div className="h-64 bg-slate-100 rounded-2xl overflow-hidden border">
              <iframe 
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14551.46823337351!2d80.19!3d24.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQzJzEyLjAiTiA4MMKwMTEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
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
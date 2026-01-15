import React from 'react';

const AdmissionInquiry = () => {
  const classes = ["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8"];

  return (
    <div className="font-sans bg-white">
      {/* Hero Header */}
      <section className="bg-[#673AB7] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full translate-x-10 translate-y-10"></div>
        
        <h1 className="text-5xl font-bold mb-4">Admission Inquiry 2025-26</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-6">
          Join YoungAchivers English Medium School. We offer quality education from Nursery to Grade 8 with a focus on holistic development.
        </p>
      </section>

      {/* Admission Process Steps */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {[
            { step: "01", title: "Inquiry", desc: "Fill the online form" },
            { step: "02", title: "Counseling", desc: "Meet our academic experts" },
            { step: "03", title: "Assessment", desc: "Basic skill evaluation" },
            { step: "04", title: "Admission", desc: "Complete the documentation" }
          ].map((item, idx) => (
            <div key={idx} className="p-6 border-2 border-dashed border-gray-200 rounded-2xl">
              <span className="text-3xl font-black text-gray-200 block mb-2">{item.step}</span>
              <h4 className="font-bold text-[#FF5E5E] text-lg">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Form Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-[40px] overflow-hidden bg-white border border-gray-100">
          
          {/* Left: Info Side */}
          <div className="lg:w-1/3 bg-[#FFB74D] p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="bg-white/20 p-2 rounded-lg">📚</span>
                  <p>English Medium Curriculum (NCERT based)</p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-white/20 p-2 rounded-lg">🎨</span>
                  <p>Co-curricular activities & Smart Classes</p>
                </li>
                <li className="flex gap-4">
                  <span className="bg-white/20 p-2 rounded-lg">🚌</span>
                  <p>Safe GPS-enabled transport facility</p>
                </li>
              </ul>
            </div>
            <div className="mt-12 bg-black/10 p-4 rounded-2xl">
              <p className="text-sm">Admission Office:</p>
              <p className="font-bold">+91 98765 43210</p>
            </div>
          </div>

          {/* Right: Actual Form */}
          <div className="lg:w-2/3 p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Student Admission Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Student's Full Name*</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Admission Sought for Class*</label>
                  <select className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none">
                    {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Date of Birth*</label>
                  <input type="date" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Parent/Guardian Phone*</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Last School Attended (If any)</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Residential Address</label>
                <textarea rows="3" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[#673AB7] outline-none"></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-4 h-4" required />
                <p className="text-xs text-gray-500">I hereby declare that the information provided is correct and I wish to receive updates regarding the admission process.</p>
              </div>

              <button className="bg-[#4DD0E1] hover:bg-[#26C6DA] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95">
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionInquiry;
import React from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-5 transition-all duration-300">
      <button
        className="flex justify-between items-center w-full text-left text-base font-semibold text-gray-800 hover:text-orange-500 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-orange-500' : 'text-gray-500'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-sm text-gray-600 leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FindOut = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-16 rounded-3xl shadow-xl overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-widest text-orange-500 mb-3">FAQs</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Find the answers <br /> to your questions.
          </h3>
          <p className="text-gray-600 mb-8 max-w-md text-base leading-relaxed">
            আমরা প্রায়শই জিজ্ঞাসিত প্রশ্নগুলোর উত্তর এখানে দিয়েছি যাতে আপনি সহজে তথ্য পেতে পারেন।
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 w-fit">
            Contact Support
          </button>
        </div>

        {/* Right section - FAQs */}
        <div className="space-y-6">
          <FAQItem question="What are my options?" answer="আপনার সামনে বিভিন্ন প্ল্যান রয়েছে যা আপনার প্রয়োজন অনুযায়ী নির্বাচন করতে পারবেন।" />
          <FAQItem question="Can I switch to a different plan?" answer="হ্যাঁ, আপনি যেকোনো সময় প্ল্যান পরিবর্তন করতে পারবেন।" />
          <FAQItem question="Do you offer non-disclosure signature?" answer="আমরা আপনার গোপনীয়তা রক্ষা করি এবং এনডিএ স্বাক্ষর প্রদান করি।" />
          <FAQItem question="Do you issue refunds?" answer="নির্দিষ্ট শর্তে রিফান্ড প্রদান করা হয়। বিস্তারিত জানতে আমাদের নীতিমালা পড়ুন।" />
          <FAQItem question="Are there any long term contracts?" answer="না, আমাদের সেবাগুলো সাবস্ক্রিপশন ভিত্তিক এবং আপনি যেকোনো সময় বাতিল করতে পারেন।" />
        </div>
      </div>

      {/* Abstract background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-300 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 border border-orange-300 rounded-full opacity-10 animate-pulse"></div>
      </div>
    </section>
  );
};

export default FindOut;

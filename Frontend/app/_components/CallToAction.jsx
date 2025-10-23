import React from "react";

const CallToAction = () => {
  return (
    <div className="lg:px-24 mb-12 mt-16">
      <section className=" bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 text-white py-12 rounded-xl shadow-lg">
        <div className="container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold leading-relaxed">
              Increase conversions <br />
              Improve support <br />
              Retain customers
            </h2>
          </div>
          {/* Right Button */}
          <div>
            <a
              href="/contact"
              className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-orange-50 transition duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;

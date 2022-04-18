import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              My Services
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Awesome deals with simple pricing model are here! <br />
              We offer great prices, premium products and quality service for
              your business..
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Standard
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photographer on site for 4 hours of event coverage <br />
                    600+ edited, hi-res images
                    <br />
                    Custom Services <br /> 30 days Delevery
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to="/checkout/p-1">
                      <button
                        className=" inline-flex items-center md:mb-2 lg:mb-0
                    text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg
                    "
                      >
                        CheckOut
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                    <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pl-3 py-1 border-l-2 border-gray-200">
                      545$
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Advanced
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photographer on site for 10 hours of event coverage <br />{" "}
                    550+ edited, hi-res images
                    <br />
                    Custom Services <br /> 20 days Delevery
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link to="/checkout/p-2">
                      <button
                        className=" inline-flex items-center md:mb-2 lg:mb-0
                    text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg
                    "
                      >
                        CheckOut
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                    <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pl-3 py-1 border-l-2 border-gray-200">
                      745$
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/722x402"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Ultimate
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photographer on site for 10 hours of event coverage <br />{" "}
                    750+ edited, hi-res images
                    <br />
                    Custom Services
                    <br /> 10 days Delevery
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to="/checkout/p-3">
                      <button
                        className=" inline-flex items-center md:mb-2 lg:mb-0
                    text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg
                    "
                      >
                        CheckOut
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                    <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pl-3 py-1 border-l-2 border-gray-200">
                      1145$
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

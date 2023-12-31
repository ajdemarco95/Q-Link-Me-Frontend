import React from "react";

function HomePricing() {
  return (
    <>
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Casual
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                FREE
              </span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Up to 3 links
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Up to 1000 monthly views
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                No Customization
              </li>
            </ul>
            <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Start free
            </button>
          </div>
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Profesional
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $4.00
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited Links
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited views
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Add your own image
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Add Music / Video
              </li>
            </ul>

            <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Start free trial
            </button>
          </div>
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Expert
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $20
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited Links
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited views
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Add your own image
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Add Music / Video
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Google Analytics / Facebook (Meta) tracking{" "}
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Edit your SEO Metadata
              </li>
            </ul>

            <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePricing;

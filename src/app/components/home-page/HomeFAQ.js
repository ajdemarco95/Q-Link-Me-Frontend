import React from "react";

function HomeFAQ() {
  return (
    <div className="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
      <div>
        <h2 className="bg-highlight3 p-10 mb-0 bg-center bg-100%">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="w-full py-4">
        <details>
          <summary>How do I get started?</summary>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          possimus odio natus alias accusamus expedita voluptatibus amet
          provident officia laboriosam. Voluptatum natus, rem deserunt fugiat
          tempore doloribus nam quas optio.
        </details>
      </div>
      <div className="w-full py-4">
        <details>
          <summary>Is this service free?</summary>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          possimus odio natus alias accusamus expedita voluptatibus amet
          provident officia laboriosam. Voluptatum natus, rem deserunt fugiat
          tempore doloribus nam quas optio.
        </details>
      </div>
      <div className="w-full py-4">
        <details>
          <summary>Who can I contact about billing information?</summary>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          possimus odio natus alias accusamus expedita voluptatibus amet
          provident officia laboriosam. Voluptatum natus, rem deserunt fugiat
          tempore doloribus nam quas optio.
        </details>
      </div>
    </div>
  );
}

export default HomeFAQ;

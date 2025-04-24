import Lottie from "lottie-react";
import chooseUsLottie from "../../assets/lottie/choose-us.json";

const ChooseUsSection = () => {
  return (
    <section className="mt-16 px-4 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 w-full  border rounded-lg shadow-sm sm:p-8 bg-gray-800 border-gray-700">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
            Why Choose Us?
          </h3>
          <ul role="list" className="space-y-5 my-7 px-4 lg:px-6">
            <li className="flex items-center">
              <svg
                className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal text-gray-500 dark:text-gray-400 ms-3">
                We guarantee top-notch services with reliable professionals.
              </span>
            </li>
            <li className="flex">
              <svg
                className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal text-gray-500 dark:text-gray-400 ms-3">
                We offer competitive pricing without compromising quality.
              </span>
            </li>
            <li className="flex">
              <svg
                className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal text-gray-500 dark:text-gray-400 ms-3">
                Our services are designed to prioritize customer satisfaction
                and meet your specific needs.
              </span>
            </li>
            <li className="flex">
              <svg
                className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal text-gray-500 dark:text-gray-400 ms-3">
                Our team consists of highly skilled professionals with years of
                experience in their respective fields.
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="w-3/4 sm:w-1/2 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center text-center mb-4 "
          >
            Choose Us
          </button>
        </div>

        <div className="flex-1 w-full flex items-center justify-center">
          <Lottie animationData={chooseUsLottie} className="w-2/3 lg:w-1/2" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;

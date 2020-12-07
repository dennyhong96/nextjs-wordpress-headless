import { Fragment } from "react";

export default function Index() {
  return (
    <Fragment>
      <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
        <div className="text-6xl font-semibold text-gray-900 leading-none">
          Bring all your work together
        </div>
        <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
          A better experience for yout attendees and less stress yout team.
        </div>
        <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
          Download for Free
        </button>
      </div>
      <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
        <bottom
          type="button"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </bottom>
      </div>
    </Fragment>
  );
}

import React from "react";
import MovingImages from "./MovingImages";
import "./MovingImages.css";

const Header2 = () => {
  return (
    <div className="bg-white p-1 flex flex-col">
      <div className="main-wrap flex-1 flex flex-col p4 sm:p-8 rounded-lg sm:rounded-2xl bg-cyan-50">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <span className="font-semibold text-xl tracking-tight">
            <a aria-current="page" className="" href="/">
              <img
                src="new-images/passnip-logo-e2a2a6e12fb2a8dc12318dd7ace91c43 (1).svg"
                alt="Passnip"
                className="w-32"
              />
            </a>
          </span>
          <a
            className="ml-2 block w-32 sm:w-48"
            href="https://www.producthunt.com/posts/passnip?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-passnip"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=276424&amp;theme=dark"
              alt="Passnip - Secure passwords that you'll remember. | Product Hunt"
            />
          </a>
        </nav>
        <div className="lg:flex flex-1 lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 max-w-4xl mt-4 sm:mt-10 mx-auto flex items-center relative">
            <svg
              className="ani-slow w-6 h-6 sm:w-16 sm:h-16 absolute"
              style={{ top: "10%", left: "5%" }}
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 27C0 26.9159 0.0642861 26.8455 0.147907 26.8368C14.2023 25.3713 25.3713 14.2023 26.8368 0.147904C26.8455 0.0642832 26.9159 0 27 0V0C27.0841 0 27.1545 0.0642861 27.1632 0.147907C28.6287 14.2023 39.7977 25.3713 53.8521 26.8368C53.9357 26.8455 54 26.9159 54 27V27C54 27.0841 53.9357 27.1545 53.8521 27.1632C39.7977 28.6287 28.6287 39.7977 27.1632 53.8521C27.1545 53.9357 27.0841 54 27 54V54C26.9159 54 26.8455 53.9357 26.8368 53.8521C25.3713 39.7977 14.2023 28.6287 0.147904 27.1632C0.0642832 27.1545 0 27.0841 0 27V27Z"
                fill="#2C7063"
              ></path>
            </svg>
            <svg
              className="ani-mid w-6 h-6 sm:w-16 sm:h-16 absolute"
              style={{ top: "-5%", right: "15%" }}
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 27C0 26.9159 0.0642861 26.8455 0.147907 26.8368C14.2023 25.3713 25.3713 14.2023 26.8368 0.147904C26.8455 0.0642832 26.9159 0 27 0V0C27.0841 0 27.1545 0.0642861 27.1632 0.147907C28.6287 14.2023 39.7977 25.3713 53.8521 26.8368C53.9357 26.8455 54 26.9159 54 27V27C54 27.0841 53.9357 27.1545 53.8521 27.1632C39.7977 28.6287 28.6287 39.7977 27.1632 53.8521C27.1545 53.9357 27.0841 54 27 54V54C26.9159 54 26.8455 53.9357 26.8368 53.8521C25.3713 39.7977 14.2023 28.6287 0.147904 27.1632C0.0642832 27.1545 0 27.0841 0 27V27Z"
                fill="#F06F6F"
              ></path>
            </svg>
            <svg
              className="ani-fast w-3 h-3 sm:w-6 sm:h-6 absolute bottom-0"
              style={{ right: "20%", bottom: "20%" }}
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27 44C36.3888 44 44 36.3888 44 27C44 17.6112 36.3888 10 27 10C17.6112 10 10 17.6112 10 27C10 36.3888 17.6112 44 27 44ZM27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
                fill="#F5C396"
              ></path>
            </svg>
            <svg
              className="ani2-slow w-3 h-3 sm:w-6 sm:h-6 absolute"
              style={{ bottom: "30%", left: "20%" }}
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27" cy="27" r="27" fill="#7D88EF"></circle>
            </svg>
            <img
              alt="Character remembering their password"
              src="new-images/passnip-illustration-a-72df80596abb499fd4df3c9fed85fee4 (1).svg"
              className="mx-auto w-48 sm:w-56 lg:w-2/3 img-scale "
            />
          </div>
          <div className="w-full lg:w-1/2 max-w-4xl mt-4 sm:mt-10 mx-auto flex items-center">
            <div>
              <div className="p-4">
                <p
                  className="text-sm sm:text-lg mono-font tracking-widest"
                  style={{ color: "#2C7063" }}
                >
                  GENERATE
                </p>
                <h1 className="text-3xl sm:text-4xl mb-4 mono-font sm:pr-16">
                  Secure passwords that you'll remember.
                </h1>
                <p className="text-sm sm:text-lg mb-8 raleway-font">
                  Generate a random passphrase you can remember in your browser,
                  learn more{" "}
                  <a href="#about">
                    <span className="underline">here</span>
                  </a>
                </p>
              </div>
              <form className="w-full">
                <div className="passnip-search bg-white bg-opacity-50 border-t border-white hover:bg-opacity-10 relative text-xs md:text-lg flex items-center rounded-lg px-2 py-4 md:px-4 mb-4 mx-2 shadow-md hover:shadow-lg transition ease-in duration-200">
                  <input
                    type="text"
                    className="undefined font-bold transition duration-200 ease-in-out transform text-center appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none mono-font"
                    value="elephant-invented-camera-taken"
                    aria-label="Full name"
                  />
                  <button className="flex-shrink-0 border-transparent border-4 text-dark hover:text-gray-600 active:text-gray-200 text-sm py-1 px-2 rounded focus:outline-none">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="refresh w-4 h-4 sm:w-6 sm:h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="flex-shrink-0 border-transparent border-4 text-dark hover:text-gray-600 active:text-gray-200 text-sm py-1 px-2 rounded focus:outline-none"
                    type="button"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="clipboard-check w-4 h-4 sm:w-6 sm:h-6"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    style={{ top: "-20px", right: "50px" }}
                    className="bg-black text-xs text-white px-3 py-2 rounded absolute transition duration-200 ease-in-out transform scale-50 opacity-0"
                    role="alert"
                  >
                    <strong className="font-bold mono-font uppercase">
                      COPIED TO CLIPBOARD
                    </strong>
                  </div>
                </div>
                <div className="flex">
                  <div className="ml-2 mb-6">
                    <label className="block text-black font-bold mono-font relative cursor-pointer hover:opacity-75">
                      <input
                        type="checkbox"
                        className="w-0 leading-tight invisible"
                      />
                      <span className="mr-2 relative custom-checkbox text-white w-4 h-4 inline-block  left-0 mt-1 rounded-sm border-2 shadow-sm  border-white bg-white bg-opacity-50">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          style={{ left: "-1px", top: "-1px" }}
                          className="relative w-3 h-3"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-sm">Add numbers</span>
                    </label>
                  </div>
                  <div className="ml-4 mb-6">
                    <label className="block text-black font-bold mono-font relative cursor-pointer hover:opacity-75">
                      <input
                        type="checkbox"
                        className="w-0 leading-tight invisible"
                      />
                      <span className="mr-2 relative custom-checkbox text-white w-4 h-4 inline-block  left-0 mt-1 rounded-sm border-2 shadow-sm  border-white bg-white bg-opacity-50">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          style={{ left: "-1px", top: "-1px" }}
                          className="relative w-3 h-3"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-sm">Capitalize</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="my-20 sm:-mx-8">
          <p className="text-sm sm:text-lg mono-font tracking-widest ml-2 sm:ml-12">
            PERFECT FOR:
          </p>
          <MovingImages />
        </div>
      </div>
    </div>
  );
};

export default Header2;

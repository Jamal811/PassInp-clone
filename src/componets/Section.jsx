import React from "react";

const Section = () => {
  return (
    <div className="bg-white p-2 pt-0 flex flex-col relative">
      <div className=" sm:p-8  min-h-screen flex flex-col relative bg-peach rounded-lg sm:rounded-2xl bg-amber-200">
        <div className="main-wrap flex-1 flex flex-col my-24">
          <div className="lg:flex flex-1">
            <div className="w-full lg:w-1/2 max-w-4xl mt-4 sm:mt-10 mx-auto flex items-center relative">
              <img
                src="new-images/passnip-illustration-b-f8b59b37e759edc2de2d1bd561d271ca%20(1).svg"
                alt=""
                className="mx-auto w-64 lg:w-2/3"
              />
              <svg
                className="ani-slow w-8 h-8 absolute bottom-0"
                style={{ right: "5%", top: "20%" }}
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 27C0 26.9159 0.0642861 26.8455 0.147907 26.8368C14.2023 25.3713 25.3713 14.2023 26.8368 0.147904C26.8455 0.0642832 26.9159 0 27 0V0C27.0841 0 27.1545 0.0642861 27.1632 0.147907C28.6287 14.2023 39.7977 25.3713 53.8521 26.8368C53.9357 26.8455 54 26.9159 54 27V27C54 27.0841 53.9357 27.1545 53.8521 27.1632C39.7977 28.6287 28.6287 39.7977 27.1632 53.8521C27.1545 53.9357 27.0841 54 27 54V54C26.9159 54 26.8455 53.9357 26.8368 53.8521C25.3713 39.7977 14.2023 28.6287 0.147904 27.1632C0.0642832 27.1545 0 27.0841 0 27V27Z"
                  fill="#7EE0B2"
                ></path>
              </svg>
              <svg
                className="w-3 h-3 sm:w-6 sm:h-6 absolute bottom-0 ani2-mid"
                style={{ left: "10%", top: "80%" }}
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27 44C36.3888 44 44 36.3888 44 27C44 17.6112 36.3888 10 27 10C17.6112 10 10 17.6112 10 27C10 36.3888 17.6112 44 27 44ZM27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
                  fill="#F06F6F"
                ></path>
              </svg>
            </div>
            <div className="w-full lg:w-1/2 max-w-4xl mt-4 sm:mt-10 mx-auto flex items-center">
              <div>
                <div className="p-4">
                  <p className="text-sm sm:text-lg mono-font tracking-widest">
                    About
                  </p>
                  <h1 className="text-4xl mb-4 mono-font">
                    <strong>Stop forgetting that f**king password</strong>
                  </h1>
                  <p className="text-sm sm:text-lg mb-8 raleway-font">
                    Passnip is simple online tool to generate memorable, yet
                    secure passphrases which are easier to recall than a random
                    string.
                  </p>

                  <p className="text-sm sm:text-lg mb-8 raleway-font">
                    Words are joined with a dash, and you can choose to
                    capitalize the words &amp; apend a random 4 digit string to
                    the end to fufil password requirements.
                  </p>
                  <p className="text-sm sm:text-lg mb-8 raleway-fontt">
                    <a
                      href="https://xkcd.com/936/"
                      className="underline"
                      target="=blank"
                    >
                      Why use a memorable password?
                    </a>
                  </p>
                  <p className="text-sm sm:text-lg mb-8 raleway-font">
                    All passphrases generated are done so in your browser,
                    without anything being sent to our server.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

import React from "react";

const Section = () => {
  return (
    <div className="bg-white p-1 flex flex-col">
      <div className="p-4 sm:p-8  min-h-screen flex flex-col relative bg-peach rounded-lg sm:rounded-2xl bg-sky-700">
        <div className="main-wrap flex-1 flex flex-col my-24">
          <div className="lg:flex flex-1">
            <div className="w-full lg:w-1/2 max-w-4xl mt-4 sm:mt-10 mx-auto flex items-center relative">
              <img
                src="new-images/passnip-illustration-b-f8b59b37e759edc2de2d1bd561d271ca%20(1).svg"
                alt=""
                className="mx-auto w-64 lg:w-2/3"
              />
            </div>
            <div className="w-full lg:w-1/2 max-w-4xl mt-4 sm:mt-10 mx-auto flex items-center">
              <div>
                <div className="p-4">
                  <p className="text-sm sm:text-lg mono-font tracking-widest">
                    About
                  </p>
                  <h1 class="text-4xl mb-4 mono-font">
                    <strong>Stop forgetting that f**king password</strong>
                  </h1>
                  <p class="text-sm sm:text-lg mb-8 raleway-font">
                    Passnip is simple online tool to generate memorable, yet
                    secure passphrases which are easier to recall than a random
                    string.
                  </p>

                  <p class="text-sm sm:text-lg mb-8 raleway-font">
                    Words are joined with a dash, and you can choose to
                    capitalize the words &amp; apend a random 4 digit string to
                    the end to fufil password requirements.
                  </p>
                  <p class="text-sm sm:text-lg mb-8 raleway-fontt">
                    <a
                      href="https://xkcd.com/936/"
                      class="underline"
                      target="=blank"
                    >
                      Why use a memorable password?
                    </a>
                  </p>
                  <p class="text-sm sm:text-lg mb-8 raleway-font">
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

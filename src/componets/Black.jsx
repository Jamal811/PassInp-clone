import React from "react";

const Black = () => {
  return (
    <>
      <div className="bg-white p-1 flex flex-col">
        <div className=" main-wrap flex-1 flex flex-col bg-contain sm:bg-cover rounded-lg sm:rounded-2xl  bg-black">
          <div className="w-full max-w-4xl mt-10 mx-auto">
            <div className="p-4 text-white my-32 sm:my-48">
              <h1 class="text-3xl mb-4 mono-font text-center">
                <span class="mono-font">"</span>Through 20 years of effort,
                we've successfully trained everyone to use passwords that are
                hard for humans to remember, but easy for computers to guess.
                <span class="mono-font">"</span>
              </h1>{" "}
              <p class="mono-font text-center">- XKDC</p>
              <img
                alt="Evil computer illustration"
                src="../../public/new-images/evil.svg"
                className="mx-auto w-40 sm:w-48 mt-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Black;

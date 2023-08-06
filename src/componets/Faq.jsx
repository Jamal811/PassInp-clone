import React, { useState } from "react";

const Faq = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className="bg-white p-2 pt-0 flex flex-col relative">
      <svg
        className="ani2-mid w-3 h-3 sm:w-8 sm:h-8 absolute bottom-0"
        style={{ right: "24%", top: "200px" }}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27 44C36.3888 44 44 36.3888 44 27C44 17.6112 36.3888 10 27 10C17.6112 10 10 17.6112 10 27C10 36.3888 17.6112 44 27 44ZM27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
          fill="#2C7063"
        ></path>
      </svg>
      <svg
        className="ani-slow w-3 h-3 sm:w-8 sm:h-8 absolute bottom-0"
        style={{ left: "22%", top: "380px" }}
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
      <div className="main-wrap flex-1 flex flex-col p-4 sm:p-8 bg-contain sm:bg-cover bg-color rounded-lg sm:rounded-2xl bg-cyan-200 ">
        <div className="max-w-3xl mx-auto my-24 relative">
          <p
            className="text-sm sm:text-lg mono-font tracking-widest text-center"
            style={{ color: "#2C7063" }}
          >
            FAQ
          </p>
          <h1 className="text-4xl mono-font text-center mb-8">
            <strong>Questions answered</strong>
          </h1>
          <div className="relative rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition duration-500 ease-in-out mb-24">
            <div className="bg-white bg-opacity-50">
              <button
                className="transition duration-500 ease-in-out border-t passnip-faq border-white focus:outline-none btn  p-4 w-full text-left mono-font sm:text-lg"
                type="checkbox"
                onClick={handleButtonClick}
              >
                {" "}
                + Is Passnip safe to use?
                {isTextVisible ? "" : ""}
              </button>
              <div
                className={isTextVisible ? "block mt-4" : "hidden"}
                style={{ height: "auto", overflow: "initial" }}
                aria-hidden="false"
              >
                <div className="ReactCollapse--content">
                  <div className="p-4">
                    <p className="raleway-font text-sm mb-4 ">
                      Absolutely! All passwords you create with the Passnip are
                      generated locally, in your browser on your computer. They
                      are not saved or shared anywhere, even Passnip can't see
                      your password.
                    </p>
                    <p className="raleway-font text-sm ">
                      Just be sure to close this page once you’ve generated and
                      copied your password to prevent anyone else from seeing it
                      if they use your computer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-50">
              <button
                className="transition duration-500 ease-in-out passnip-faq border-t border-white focus:outline-none btn p-4 w-full text-left mono-font sm:text-lg"
                type="checkbox"
              >
                {" "}
                + Do I need a unique password for every account?
              </button>
              <div
                className="ReactCollapse--collapse"
                style={{ height: "0px", overflow: "hidden" }}
                aria-hidden="true"
              >
                <div className="ReactCollapse--content">
                  <div className="p-4">
                    <p className="raleway-font text-sm mb-4">
                      100%, Using the same password across multiple accounts is
                      a huge no-no. If hackers learn the password to one of your
                      accounts, they’ll have your password for all the others,
                      too. So make sure you use a unique password for each
                      account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-50">
              <button
                className="transition duration-500 ease-in-out passnip-faq border-t focus:outline-none btn p-4 w-full text-left border-b border-white mono-font sm:text-lg"
                type="checkbox"
              >
                {" "}
                + Random password vs. memorable passwords?
              </button>
              <div
                className="ReactCollapse--collapse"
                style={{ height: "0px", overflow: "hidden" }}
                aria-hidden="true"
              >
                <div className="ReactCollapse--content">
                  <div className="p-4">
                    <p className="raleway-font text-sm mb-4">
                      Memorable passwords or 'passphrases', are typically a
                      combination of 3-6 words strung together into a mnemonic
                      device. Because passphrases are often over 20 characters
                      or longer, they are extremely resilient to brute force
                      attacks, but also easy to recall compared to a random
                      string of 20 characters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-50">
              <button
                className="transition duration-500 ease-in-out passnip-faq border-t border-white focus:outline-none btn p-4 w-full mono-font text-left sm:text-lg"
                type="checkbox"
              >
                {" "}
                + I have a some feedback / enquiry
              </button>
              <div
                className="ReactCollapse--collapse"
                style={{ height: "0px", overflow: "hidden" }}
                aria-hidden="true"
              >
                <div className="ReactCollapse--content">
                  <div className="p-4">
                    <p className="raleway-font text-sm">
                      We are always open ears to feedback and questions!{" "}
                      <a className="underline" href="mailto:hello@passnip.com">
                        Send us an email
                      </a>{" "}
                      and we'll take a gander.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

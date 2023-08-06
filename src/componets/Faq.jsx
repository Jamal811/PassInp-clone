import React, { useState } from "react";

const Faq = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className="bg-white p-1 flex flex-col">
      <div className="main-wrap flex-1 flex flex-col p-4 sm:p-8 bg-contain sm:bg-cover bg-color rounded-lg sm:rounded-2xl bg-teal-600 my-1">
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

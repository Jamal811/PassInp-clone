import React from "react";

const Black = () => {
  return (
    <>
      <div className="bg-white p-2 pt-0 flex flex-col relative">
        <svg
          className="w-6 h-6 sm:w-12 sm:h-12 absolute ani-fast"
          style={{ top: "25%", left: "5%" }}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 27C0 26.9159 0.0642861 26.8455 0.147907 26.8368C14.2023 25.3713 25.3713 14.2023 26.8368 0.147904C26.8455 0.0642832 26.9159 0 27 0V0C27.0841 0 27.1545 0.0642861 27.1632 0.147907C28.6287 14.2023 39.7977 25.3713 53.8521 26.8368C53.9357 26.8455 54 26.9159 54 27V27C54 27.0841 53.9357 27.1545 53.8521 27.1632C39.7977 28.6287 28.6287 39.7977 27.1632 53.8521C27.1545 53.9357 27.0841 54 27 54V54C26.9159 54 26.8455 53.9357 26.8368 53.8521C25.3713 39.7977 14.2023 28.6287 0.147904 27.1632C0.0642832 27.1545 0 27.0841 0 27V27Z"
            fill="#F5C396"
          ></path>
        </svg>
        <svg
          className="w-3 h-3 sm:w-6 sm:h-6 absolute bottom-0 ani2-mid animate-moveUpDown"
          style={{ right: "10%", top: "10%" }}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27 44C36.3888 44 44 36.3888 44 27C44 17.6112 36.3888 10 27 10C17.6112 10 10 17.6112 10 27C10 36.3888 17.6112 44 27 44ZM27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54Z"
            fill="#7EE0B2"
          ></path>
        </svg>
        <svg
          className="w-24 h-24 sm:w-32 sm:h-32 absolute bottom-0"
          style={{ left: "10%", bottom: "10%" }}
          viewBox="0 0 146 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.4899 66.1342C50.7012 64.1019 35.6275 68.1897 27.8947 73.1488C20.2398 78.0578 16.5573 83.6191 15.3954 88.9099C14.228 94.2256 15.5059 99.7162 18.6281 104.654C24.9545 114.66 38.3843 121.66 51.4594 119.252C63.0312 117.12 69.8249 111.32 72.8635 103.612C75.9715 95.727 75.3812 85.262 70.8274 73.5473C69.8804 71.1111 68.7669 68.6352 67.4899 66.1342ZM63.9207 59.7768C47.501 58.6873 32.8886 62.8183 24.6557 68.0981C15.9772 73.6637 11.1103 80.45 9.53502 87.6229C7.96526 94.7709 9.76264 101.86 13.5567 107.861C21.0631 119.733 36.8304 128.048 52.5464 125.153C65.7905 122.713 74.5209 115.768 78.4455 105.812C82.3008 96.0315 81.2935 83.9111 76.4197 71.3734C75.9065 70.053 75.349 68.7244 74.748 67.3894C78.1245 68.1529 81.5365 69.1823 84.941 70.5174C107.822 79.4906 130.867 102.512 140.009 152.963L145.912 151.893C136.486 99.8742 112.363 74.8267 87.1316 64.9316C81.8551 62.8623 76.5517 61.466 71.3555 60.6234C59.1639 38.5491 35.5339 15.609 2.56764 1.70937e-06L6.46668e-08 5.42285C30.1318 19.6898 51.8844 40.1137 63.9207 59.7768Z"
            fill="#F06F6F"
          ></path>
        </svg>
        <svg
          className="ani-slow w-3 h-3 sm:w-6 sm:h-6 absolute"
          style={{ bottom: "25%", right: "20%" }}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="27" fill="#7D88EF"></circle>
        </svg>

        <div className=" main-wrap flex-1 flex flex-col bg-contain sm:bg-cover rounded-lg sm:rounded-2x bg-indigo-950">
          <div className="w-full max-w-4xl mt-10 mx-auto">
            <div className="p-4 text-white my-32 sm:my-48">
              <h1 className="text-3xl mb-4 mono-font text-center">
                <span className="mono-font">"</span>Through 20 years of effort,
                we've successfully trained everyone to use passwords that are
                hard for humans to remember, but easy for computers to guess.
                <span className="mono-font">"</span>
              </h1>{" "}
              <p className="mono-font text-center">- XKDC</p>
              <img
                alt="Evil computer illustration"
                src="new-images/evil.svg"
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

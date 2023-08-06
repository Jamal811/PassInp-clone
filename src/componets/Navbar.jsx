import React, { useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCancelClick = () => {
    setIsVisible(false);
  };
  return (
    <div>
      {isVisible && (
        <div style={{ outline: "none", tabindex: "-1" }}>
          <div className="tl-edges ">
            <div
              className="tl-wrapper tl-wrapper--mount tl-wrapper-status--entered"
              style={{ zIndex: "1", opacity: "1" }}
            >
              <div className="ad fixed z-10 p-2  rounded-md bg-white m-4 bottom-0 right-0">
                <div className="relative flex">
                  <a
                    href="#"
                    className="mono-font absolute z-20 hover:opacity-50 p-1"
                    style={{ fontSize: "12px", top: "-4px", right: "-4px" }}
                    onClick={handleCancelClick}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.83 16L27.42 7.40999C27.7953 7.03471 28.0061 6.52572 28.0061 5.99499C28.0061 5.46427 27.7953 4.95527 27.42 4.57999C27.0447 4.20471 26.5357 3.99388 26.005 3.99388C25.4743 3.99388 24.9653 4.20471 24.59 4.57999L16 13.17L7.41 4.58999C7.0274 4.26234 6.53525 4.09113 6.0319 4.11057C5.52854 4.13001 5.05107 4.33868 4.69488 4.69487C4.33869 5.05106 4.13002 5.52853 4.11058 6.03189C4.09114 6.53524 4.26235 7.02739 4.59 7.40999L13.17 16L4.59 24.59C4.21472 24.9653 4.00389 25.4743 4.00389 26.005C4.00389 26.5357 4.21472 27.0447 4.59 27.42C4.96528 27.7953 5.47428 28.0061 6.005 28.0061C6.53573 28.0061 7.04472 27.7953 7.42 27.42L16 18.83L24.59 27.42C24.9653 27.7953 25.4743 28.0061 26.005 28.0061C26.5357 28.0061 27.0447 27.7953 27.42 27.42C27.7953 27.0447 28.0061 26.5357 28.0061 26.005C28.0061 25.4743 27.7953 24.9653 27.42 24.59L18.83 16Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                  <a target="_blank" href="/freebitcoin">
                    <img
                      src="../../public/new-images/bitcoin.png"
                      className="w-16 sm:w-24 rounded-md"
                    />
                  </a>
                  <a
                    target="_blank"
                    className="px-2 font-thin"
                    style={{ maxWidth: "168px" }}
                    href="/freebitcoin"
                  >
                    <p className="hidden sm:block" style={{ fontSize: "10px" }}>
                      <strong>Free bitcoin</strong>
                    </p>
                    <p style={{ fontSize: "9px" }}>
                      Win up to $200 every hour plus exclusive bonuses,
                      absolutely free!
                    </p>
                    <p
                      style={{ fontSize: "9px" }}
                      className="mt-2 tracking-wide"
                    >
                      SUPPORT US
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

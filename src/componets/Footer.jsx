import React from "react";

const Footer = () => {
  return (
    <div className="bg-white p-1 flex flex-col">
      <div className="bg-black rounded-lg sm:rounded-2xl  flex flex-col relative">
        <div className="bg-dark rounded-lg sm:rounded-2xl">
          <a href="/#top">
            <img
              src="new-images/passnip-logo-white-1ba096f7da607e7771084559ad17470b (1).svg"
              className="w-32 m-auto mt-8"
              alt="Passnip logo"
            />
          </a>
          <p className="text-center text-xs font-mono pb-8 sm:pb-0 text-white my-12">
            ©2020 Passnip.&nbsp;
            <a
              href="https://hachi.studio"
              className="underline hover:opacity-75"
              rel="noreferrer"
              target="_blank"
            >
              Built by Hachi
            </a>
          </p>
          <hr className="mb-2 border-gray-800" />
          <div className="flex items-center justify-center text-gray-400 m-auto max-w-2xl mono-font text-xs mb-8 p-4">
            <div className="mx-2 underline">
              <a href="/#top">Home</a>
            </div>
            <div className="mx-2 underline">
              <a href="/terms">Terms</a>
            </div>
            <div className="mx-2 underline">
              <a href="/privacy">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

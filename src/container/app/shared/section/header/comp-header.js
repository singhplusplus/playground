import React from "react";

function createHeader({children, title}) {
  return (
    <nav className="shadow-sm sm:fixed z-10 top-0 w-full bg-white">
      <div className="flex p-6 items-center text-secondary-600">
        <div className="flex-grow font-semibold text-xl pr-8">
          {title}
        </div>
        {/* <div className="flex-grow space-x-4">
          <a className="hover:text-pink-800" href="">Docs</a>
          <a href="">Examples</a>
          <a href="">About</a>
        </div> */}
        <div className="space-x-4">
          <a href="https://github.com/singhplusplus" rel="noopener noreferrer" target="_blank"><span className="">Github</span></a>
          {/* <a href=""><span className="">Blog</span></a> */}
        </div>
      </div>
    </nav>
  )
}

export const AppHeader = createHeader;
import Logo from "../../public/images/logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      {/* Top Nav */}
      <div className=" bg-black">
        <h1 className=" text-white font-serif font-bold text-lg p-1 tracking-[.30rem] flex justify-end">
          SONY
        </h1>
      </div>
      {/* Second Nav */}
      <div className="flex p-3 flex-row justify-between items-center">
        {/* Left Hand Texts */}
        <div className="flex  flex-row">
          <Image
            src={Logo}
            width={45}
            height={45}
            alt="Picture of the author"
          />

          <ul className="flex flex-row p-3  space-x-3 ml-2">
            <li className="flex flex-row items-center hover:text-blue-500">
              <a className=" text-sm" href="#">
                Games
              </a>
              <a href="#" className="ml-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            <li className="flex flex-row items-center hover:text-blue-500">
              <a className=" text-sm" href="#">
                Hardware
              </a>
              <a href="#" className="ml-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            <li className="flex flex-row items-center hover:text-blue-500">
              <a className=" text-sm" href="#">
                Services
              </a>
              <a href="#" className="ml-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            <li className="flex flex-row items-center hover:text-blue-500">
              <a className=" text-sm" href="#">
                News
              </a>
              <a href="#" className="ml-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            <li className="flex flex-row items-center hover:text-blue-500">
              <a className=" text-sm" href="#">
                Shop
              </a>
              <a href="#" className="ml-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            <li className="flex flex-row items-center hover:text-blue-500">
              <a className=" text-sm" href="#">
                Support
              </a>
              <a href="#" className="ml-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/* Righ Hand Logos */}
        <div className="p-3 flex flex-row space-x-5 items-center ">
          <button className="bg-blue-600 text-white text-md tracking-wider rounded-full pl-3 pr-3">
            Sign In
          </button>
          <div className=" font-extrabold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

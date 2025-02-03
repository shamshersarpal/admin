"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.png"
import Link from "next/link";
export default function SideBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    }

    if (isUserDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Sidebar Toggle Button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
              >
                <span className="sr-only">{isSidebarOpen ? "Close sidebar" : "Open sidebar"}</span>
                {isSidebarOpen ? (
                  // Close (X) Icon
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    />
                  </svg>
                ) : (
                  // Menu (Hamburger) Icon
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                )}
              </button>

              {/* Logo */}
              <a href="" className="flex ms-2 md:me-24">
                <Image className="h-10 w-10 me-3 bg-blue-700 p-1 rounded-full" src={logo} alt="logo" />

                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap  ">
                  Right Travels
                </span>
              </a>
            </div>

            <div className="nav-tools flex items-center lg:space-x-6 space-x-3 rtl:space-x-reverse">

              <form className="max-w-md mx-auto hidden lg:block">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only  "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500  "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   "
                    placeholder="Search..."
                    required=""
                  />

                </div>
              </form>


              <div>
                <span className="relative lg:h-[32px] lg:w-[32px] lg:bg-slate-100   text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.137a60 60 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m12.75 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"
                    />
                  </svg>
                  <span className="absolute lg:right-0 lg:top-0 -top-2 -right-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
                    0
                  </span>
                </span>
                <div>
                </div>
              </div>

              <div className="relative inline-block">
                <div className="block w-full " data-headlessui-state="">
                  <button
                    className="block w-full"
                    id="headlessui-menu-button-:r1:"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div className="label-class-custom">
                      <span className="relative lg:h-[32px] lg:w-[32px] lg:bg-slate-100   text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons-outline"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2"
                          />
                        </svg>
                        <span className="absolute lg:right-0 lg:top-0 -top-2 -right-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
                          10
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="relative inline-block">
                <div className="block w-full " data-headlessui-state="">
                  <button
                    className="block w-full"
                    id="headlessui-menu-button-:r2:"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div className="label-class-custom">
                      <span className="relative lg:h-[32px] lg:w-[32px] lg:bg-slate-100 text-slate-900   cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="animate-tada iconify iconify--heroicons-outline"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.03 2.03 0 0 1 18 14.158V11a6 6 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"
                          />
                        </svg>
                        <span className="absolute lg:right-0 lg:top-0 -top-2 -right-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]">
                          2
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              {/* User Profile Dropdown */}
              <div className="relative" ref={userDropdownRef}>
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300  "
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>

                {/* Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg  ">

                    <div role="none">
                      <div
                        className="text-slate-600   block     "
                        id="headlessui-menu-item-:ru:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        <div className="block cursor-pointer px-4 py-2 hover:bg-slate-100">
                          <div className="flex items-center gap-2 ">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--heroicons-outline"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7"
                                />
                              </svg>
                            </span>
                            <span className="block text-sm">Profile</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-slate-600   block     "
                        id="headlessui-menu-item-:rv:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        <div className="block cursor-pointer px-4 py-2 hover:bg-slate-100">
                          <div className="flex items-center gap-2">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--heroicons-outline"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.9 9.9 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8"
                                />
                              </svg>
                            </span>
                            <span className="block text-sm">Chat</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-slate-600   block  hover:bg-slate-100    "
                        id="headlessui-menu-item-:r10:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        <div className="block cursor-pointer px-4 py-2">
                          <div className="flex items-center gap-2">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--heroicons-outline"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2"
                                />
                              </svg>
                            </span>
                            <span className="block text-sm">Email</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-slate-600   block hover:bg-slate-100     "
                        id="headlessui-menu-item-:r11:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        <div className="block cursor-pointer px-4 py-2">
                          <div className="flex items-center gap-2">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--heroicons-outline"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4"
                                />
                              </svg>
                            </span>
                            <span className="block text-sm">Todo</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-slate-600   block  hover:bg-slate-100    "
                        id="headlessui-menu-item-:r12:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        <div className="block cursor-pointer px-4 py-2">
                          <div className="flex items-center gap-2">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--heroicons-outline"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c.996.608 2.296.07 2.572-1.065" />
                                  <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                                </g>
                              </svg>
                            </span>
                            <span className="block text-sm">Settings</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-slate-600   block hover:bg-slate-100     "
                        id="headlessui-menu-item-:r13:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        <div className="block cursor-pointer px-4 py-2">
                          <div className="flex items-center gap-2">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--heroicons-outline"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3"
                                />
                              </svg>
                            </span>
                            <span className="block text-sm">Price</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-slate-600   block hover:bg-slate-100     "
                        id="headlessui-menu-item-:r14:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        <div className="block cursor-pointer px-4 py-2">
                          <div className="flex items-center gap-2">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--heroicons-outline"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                                />
                              </svg>
                            </span>
                            <span className="block text-sm">Faq</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-slate-600   block hover:bg-slate-100     "
                        id="headlessui-menu-item-:r15:"
                        role="menuitem"
                        tabIndex={-1}
                        data-headlessui-state=""
                      >
                        <div className="block cursor-pointer px-4 py-2">
                          <div className="flex items-center gap-2">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--heroicons-outline"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1"
                                />
                              </svg>
                            </span>
                            <span className="block text-sm">Logout</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

              </div>



            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-gray-700 border-r  border-gray-200   ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-700  ">
          <ul className="space-y-2 font-medium">
            <li>
            <Link href="/dashboard" passHref legacyBehavior>
              <a  className="flex items-center p-2 text-white rounded-lg   hover:bg-gray-100 hover:text-gray-700   group font-[400]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
              </Link>
            </li>

            {/* Sidebar Dropdown */}
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className=" font-[400] flex items-center w-full p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700  "
              > <span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h1a5.002 5.002 0 0 0 4.927-4.146A3.001 3.001 0 0 0 16 3a3 3 0 0 0-1.105 5.79A3.001 3.001 0 0 1 12 11h-1c-.729 0-1.412.195-2 .535V8.83A3.001 3.001 0 0 0 8 3Z" />
                  </svg>


                </span>
                <span className="flex-1 ms-3 text-left">Tables</span>
                <svg className={`w-3 h-3 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="py-2 space-y-2">
                  <li>
                  <Link href="/tableone" passHref legacyBehavior>
                    <a   className="font-[400] block px-4 py-2 text-white   rounded-lg hover:bg-white hover:text-gray-700">Table One</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/tabletwo" passHref legacyBehavior>
                    <a href="#" className="font-[400] block px-4 py-2 text-white   rounded-lg hover:bg-white hover:text-gray-700">Table Two</a>
                  </Link>
                  </li>
                </ul>
              )}
            </li>


            <>
              <li>
              <Link href="/forms" passHref legacyBehavior>
                <a
                  
                  className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700   group"
                >
                  <svg
                    className="shrink-0 w-5 h-5   transition duration-75  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Forms</span>
                   
                </a>
                </Link>
              </li>
              <li>
              
              </li>
              <li>
              <Link href="/tabletwo" passHref legacyBehavior>
                <a
                  
                  className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700   group"
                >
                  <svg
                    className="shrink-0 w-5 h-5   transition duration-75  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
                </Link>
              </li>
              <li>
               
              </li>
              <li>
              <Link href="" passHref legacyBehavior>
                <a
                  
                  className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700   group"
                >
                 <svg
                    className="shrink-0 w-5 h-5  transition duration-75 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Documents</span>
                </a>
                </Link>
              </li>

             
              <li>
              <Link href="/ " passHref legacyBehavior>
                <a
                  
                  className="font-[400] flex items-center p-2 text-white rounded-lg   hover:bg-white hover:text-gray-700  group"
                >
                  

                  <svg
                    className="shrink-0 w-5 h-5  transition duration-75  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
                </a>
                </Link>
              </li>
            </>

          </ul>
        </div>
      </aside>
    </>
  );
}

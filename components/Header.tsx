import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow pb-16">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                    <img
                      className="block h-12 mt-4 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Jysk_logo.svg"
                      alt="JYSK"
                    />
                  </a>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8 mt-2">
                  <a
                    href="/Products/electronics"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:text-color-text-primary focus:border-color-text-primary "
                  >
                    Electronics
                  </a>
                  <a
                    href="/Products/jewelery"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:text-color-text-primary focus:border-color-text-primary "
                  >
                    Jewelery
                  </a>
                  <a
                    href="/Products/men's clothing"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:text-color-text-primary focus:border-color-text-primary "
                  >
                    Mens-clothing
                  </a>
                  <a
                    href="/Products/women's clothing"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:text-color-text-primary focus:border-color-text-primary "
                  >
                    Womens-clothing
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end mt-4">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <img
                  className="hidden lg:block h-12 mt-4 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Jysk_logo.svg"
                  alt="JYSK"
                />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md mt-4 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0"></div>

                <img
                  className="hidden lg:block h-12 mt-4 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Jysk_logo.svg"
                  alt="JYSK"
                />
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/Products/electronics"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Electronics
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/Products/jewelery"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Jewelery
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/Products/men's clothing"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Mens clothing
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/Products/women's clothing"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Womens clothing
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

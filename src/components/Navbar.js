import { Disclosure } from "@headlessui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { BookOpenIcon, SearchIcon, XIcon, MenuIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Books", path: "/books" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  return (
    <div className="h-full border border-x">
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 sm:bg-white bg-gray-200">
              <div className="flex items-center justify-between h-16">
                {/* Brand */}
                <NavLink to="/" className="flex items-center bg-blue-storial px-2 py-1 rounded-md">
                  <span className="text-white font-bold">
                    storial<span className="text-yellow-storial">app</span>
                  </span>
                </NavLink>

                {/* Search Input */}
                <form className="items-center justify-center md:block hidden">
                  <div className="flex ">
                    <input type="search" className="bg-gray-200 rounded-l-full border-2 pl-4 pr-2 py-1 lg:w-80 max-w-80 focus:outline-none focus:bg-white" placeholder="Search Book or Author" />
                    <button className="flex items-center justify-center px-2 bg-gray-200 rounded-r-full ">
                      <SearchIcon className="h-6 w-6 text-gray-400" />
                    </button>
                  </div>
                </form>

                <div className="flex">
                  {/* Navigation */}
                  <div className="sm:block hidden">
                    <div className="ml-10 flex items-center space-x-4">
                      {navigation.map((nav) => (
                        <NavLink key={nav.name} to={nav.path} className="text-blue-storial">
                          {nav.name}
                        </NavLink>
                      ))}
                      <NavLink to="/" className="bg-yellow-storial text-blue-storial hover:bg-blue-storial hover:text-yellow-storial px-2 py-1 rounded-xl font-semibold">
                        Login
                      </NavLink>
                    </div>
                  </div>

                  {/* Library */}
                  <NavLink to="/" className="flex items-center px-2">
                    <BookOpenIcon className="w-7 h-7 text-blue-storial cursor-pointer" />
                    <span className="text-blue-storial bg-yellow-storial rounded-full px-1.5 text-sm font-bold">{`99+`}</span>
                  </NavLink>

                  {/* Trigger Mobile Button */}
                  <div className="sm:hidden block ">
                    <Disclosure.Button className="text-blue-storial hover:text-white hover:bg-blue-storial p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-storial focus:ring-white">{open ? <XIcon className="block h-7 w-7" /> : <MenuIcon className="block h-7 w-7" />}</Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <Disclosure.Panel className="sm:hidden block bg-white">
              <div className="pb-5 mt-2 px-2 shadow-md">
                {navigation.map((nav) => (
                  <Disclosure.Button key={nav.name} as={NavLink} to={nav.path} className="text-blue-storial hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-xl font-medium text-center">
                    {nav.name}
                  </Disclosure.Button>
                ))}
                <NavLink to="/" className="block bg-yellow-storial text-blue-storial hover:bg-blue-storial hover:text-yellow-storial px-3 py-2 rounded-xl font-semibold text-center">
                  Login
                </NavLink>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;

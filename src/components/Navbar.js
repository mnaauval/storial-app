import { Disclosure } from "@headlessui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { BookOpenIcon, SearchIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Books", path: "/books" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  return (
    <div className="h-full border border-xl">
      <Disclosure as="nav" className="">
        <>
          <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 ">
            <div className="flex items-center justify-between h-16">
              {/* Brand */}
              <NavLink to="/" className="flex items-center bg-blue-storial px-2 py-1 rounded-md">
                <span className="text-white font-bold">
                  storial <span className="text-yellow-storial">app</span>
                </span>
              </NavLink>

              {/* Search Input */}
              <form>
                <div className="flex">
                  <button class="flex items-center px-3 text-gray-900 rounded-l-md border border-r-0 border-gray-300">
                    <SearchIcon className="h-4 w-4 text-gray-500" />
                  </button>
                  <input type="search" id="website-admin" className="rounded-none rounded-r-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="Search Book or Author" />
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
                    <NavLink to="/" className="flex items-center pr-2">
                      <BookOpenIcon className="w-7 h-7 text-blue-storial cursor-pointer" />
                      <span className="text-blue-storial bg-yellow-storial rounded-full px-1.5 text-sm font-bold">{`99+`}</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Disclosure>
    </div>
  );
};

export default Navbar;

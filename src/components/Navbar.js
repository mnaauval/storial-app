import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { BookmarkIcon, XIcon, MenuIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

const navigation = [
  // { name: "Books", path: "/" },
  { name: "G-Books", path: "/" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  const { bookmarkTotalQty } = useSelector((state) => state.bookmark);

  return (
    <div className="h-full border border-x shadow-sm">
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
                  <NavLink to="/bookmark" className="flex items-center px-2">
                    <BookmarkIcon className="w-7 h-7 text-blue-storial cursor-pointer" />
                    <span className="text-blue-storial bg-yellow-storial rounded-full px-1.5 text-sm font-bold">{bookmarkTotalQty}</span>
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

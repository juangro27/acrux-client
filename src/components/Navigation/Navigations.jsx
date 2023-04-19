import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/auth.context";

const Navigation = () => {
    const { user, logout } = useContext(AuthContext);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Concerts", href: "/concerts" },
        { name: "Login", href: "/login" },
        { name: "Signup", href: "/signup" },
    ];

    const navigationLogged = [
        { name: "Home", href: "/" },
        { name: "Concerts", href: "/concerts" },
        { name: "Create", href: "/concerts/create" },
        { name: "Logout", href: "/logout" },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <Disclosure
            as="nav"
            className="bg-teal-800"
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-teal-400 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/">
                                        <img
                                            className="block h-8 w-auto"
                                            src={logo}
                                            alt="Akralogic logo"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {!user
                                            ? navigation.map((item) => (
                                                  <Link
                                                      key={item.name}
                                                      to={item.href}
                                                      className={classNames(
                                                          "text-teal-300 hover:bg-teal-700 hover:text-white",
                                                          "rounded-md px-3 py-2 text-sm font-medium"
                                                      )}
                                                  >
                                                      {item.name}
                                                  </Link>
                                              ))
                                            : navigationLogged.map((item) => (
                                                  <Link
                                                      key={item.name}
                                                      to={item.href}
                                                      onClick={
                                                          item.name ===
                                                              "Logout" && logout
                                                      }
                                                      className={classNames(
                                                          "text-teal-300 hover:bg-teal-700 hover:text-white",
                                                          "rounded-md px-3 py-2 text-sm font-medium"
                                                      )}
                                                  >
                                                      {item.name}
                                                  </Link>
                                              ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {!user
                                ? navigation.map((item) => (
                                      <Disclosure.Button
                                          key={item.name}
                                          as="a"
                                          href={item.href}
                                          className={classNames(
                                              "text-teal-300 hover:bg-teal-700 hover:text-white",
                                              "block rounded-md px-3 py-2 text-base font-medium"
                                          )}
                                      >
                                          {item.name}
                                      </Disclosure.Button>
                                  ))
                                : navigationLogged.map((item) => (
                                      <Link
                                          to={item.href}
                                          onClick={
                                              item.name === "Logout" && logout
                                          }
                                      >
                                          <Disclosure.Button
                                              key={item.name}
                                              as="p"
                                              className={classNames(
                                                  "text-teal-300 hover:bg-teal-700 hover:text-white",
                                                  "block rounded-md px-3 py-2 text-base font-medium"
                                              )}
                                          >
                                              {item.name}
                                          </Disclosure.Button>
                                      </Link>
                                  ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
export default Navigation;

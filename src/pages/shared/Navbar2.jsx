import React, { useContext } from "react";

import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import TopNote2 from "../../components/TopNote2";
import { ThemeContext } from "../../components/ThemeProvider";
// import Search from "../../components/Search";
// import Search2 from "../../components/Search2";
import Search3 from "../../components/Search3";
import Search2 from "../../components/Search2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Transactions", href: "#", current: false },
  { name: "Account", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const notifications = [
  {
    title: "Your Profile",
    photo: "/idm.png",
    comment: "Replied to your comment",
    date: "Today",
    time: "9:00 PM",
    href: "#",
  },
  {
    title: "Your Profile",
    photo: "/idm.png",
    comment: "Replied to your comment",
    date: "Today",
    time: "9:00 PM",
    href: "#",
  },
  {
    title: "Your Profile",
    photo: "/idm.png",
    comment: "Replied to your comment",
    date: "Today",
    time: "9:00 PM",
    href: "#",
  },
  {
    title: "Your Profile",
    photo: "/idm.png",
    comment: "Replied to your comment",
    date: "Today",
    time: "9:00 PM",
    href: "#",
  },
  {
    title: "Your Profile",
    photo: "/idm.png",
    comment: "Replied to your comment",
    date: "Today",
    time: "9:00 PM",
    href: "#",
  },
];

const Navbar2 = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toglleTheme = (event) => {
    const isChecked = event.target.checked;
    // console.log(isChecked);
    if (isChecked) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    // setDarkMode(!darkMode);
  };
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <TopNote2></TopNote2>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white dark:bg-gray-900 shadow-sm lg:static lg:overflow-y-visible "
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
              <div className="relative flex justify-between items-center lg:gap-8 xl:grid xl:grid-cols-12">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-3">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="#" className="flex items-center gap-2 normal-case">
                      <img
                        className="block h-8 w-auto"
                        src="/favicon.ico"
                        alt="Your Company"
                      />
                      <span className="text-indigo-600 hidden md:block font-bold text-3xl font-unica stroke-black stroke-1">
                        CYBERSPACE
                      </span>
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 block ">
                  <div className="flex items-center px-6 py-4 md:hidden md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                    <div className="w-full">
                      <Search2></Search2>
                    </div>
                  </div>
                  <div>
                    <p className=" text-center rounded-full px-6 my-4 hidden md:block md:mx-auto  lg:mx-0 lg:max-w-none xl:px-0 text-sm leading-6 text-slate-700 dark:text-slate-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Home of pre-activated software!
                    </p>
                  </div>
                </div>

                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-3">
                  <button className="w-10 h-10 flex justify-center items-center rounded-md hover:text-slate-700">
                    <label className="swap swap-rotate">
                      {/* this hidden checkbox controls the state */}
                      <input
                        onChange={toglleTheme}
                        type="checkbox"
                        className="hidden"
                      />

                      {/* sun icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon swap-on  icon-tabler icon-tabler-sun h-6 w-6"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>

                      {/* moon icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon swap-off icon-tabler icon-tabler-moon w-6 h-6"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                      </svg>
                    </label>
                  </button>
                  {/* Notification dropdown */}
                  <Menu
                    as="div"
                    className="ml-3 relative flex-shrink-0 hover:text-slate-700"
                  >
                    <div>
                      <Menu.Button className="flex rounded-full">
                        <span className="sr-only">Open user menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-bell w-6 h-6  "
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                        </svg>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {notifications.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100 dark:bg-gray-800" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <button className="flex gap-4 items-center justify-between w-full text-sm ">
                                  <div className="flex gap-4">
                                    <label tabIndex={0} className="">
                                      <div className="w-10">
                                        <img
                                          className="w-10 rounded-md"
                                          src="/refat.png"
                                        />
                                      </div>
                                    </label>
                                    <div className="text-left">
                                      <h1 className="font-bold text-base dark:text-slate-50">
                                        {item.title}
                                      </h1>
                                      <h1 className="text-slate-300 text-xs">
                                        {item.comment}
                                      </h1>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                    <p className="text-slate-400 text-xs">
                                      {item.date} <br /> {item.time}
                                    </p>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="icon icon-tabler icon-tabler-point-filled text-indigo-700"
                                      width="15"
                                      height="15"
                                      viewBox="0 0 24 24"
                                      stroke-width="2"
                                      stroke="currentColor"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      ></path>
                                      <path
                                        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                                        stroke-width="0"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* Profile dropdown */}
                  <Menu
                    as="div"
                    className="ml-4 relative flex-shrink-0 hover:text-slate-700"
                  >
                    <div>
                      <Menu.Button className="flex rounded-full hover:text-slate-700 ">
                        <span className="sr-only">Open user menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user w-6 h-6  "
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        </svg>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-4">
                          <Menu.Item>
                            {({ active }) => (
                              <a href="#" className="group block flex-shrink-0">
                                <div className="flex items-center">
                                  <div>
                                    <img
                                      className="inline-block h-9 w-9 rounded-full"
                                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-50 group-hover:text-gray-900 dark:group-hover:text-gray-50">
                                      Tom Cook
                                    </p>
                                    <p className="text-xs font-medium text-slate-500 group-hover:text-gray-700 dark:group-hover:text-gray-100">
                                      View profile
                                    </p>
                                  </div>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1 dark:text-gray-50">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100  text-gray-900 dark:text-gray-50 dark:bg-gray-800"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-smart-home mr-3 h-5 w-5 group-hover:text-gray-400 dark:text-gray-50"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
                                  <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
                                </svg>
                                Dashboard
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-gray-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-wallet mr-3 h-5 w-5 dark:text-gray-50  group-hover:text-gray-400"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                                </svg>
                                Transactions
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-user-circle mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                                </svg>
                                Account
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-cloud-upload mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                                  <path d="M9 15l3 -3l3 3"></path>
                                  <path d="M12 12l0 9"></path>
                                </svg>
                                Request
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-crown mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
                                </svg>
                                Pricing
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-headset mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M4 14v-3a8 8 0 1 1 16 0v3"></path>
                                  <path d="M18 19c0 1.657 -2.686 3 -6 3"></path>
                                  <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                                  <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                                </svg>
                                Supports
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-info-circle mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                  <path d="M12 9h.01"></path>
                                  <path d="M11 12h1v4h1"></path>
                                </svg>
                                Faq
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-mail mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                  <path d="M3 7l9 6l9 -6"></path>
                                </svg>
                                Contact
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-user-heart mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                  <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
                                  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                                </svg>
                                Donate
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-shopping-cart mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                  <path d="M17 17h-11v-14h-2"></path>
                                  <path d="M6 5l14 1l-1 7h-13"></path>
                                </svg>
                                Shop
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:text-slate-50 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700 dark:text-gray-50",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-logout mr-3 h-5 w-5 dark:text-gray-50 group-hover:text-gray-500"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                  <path d="M9 12h12l-3 -3"></path>
                                  <path d="M18 15l3 -3"></path>
                                </svg>
                                Logout
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
};

export default Navbar2;
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

import SearchBar from "../SearchBar/searchBar.jsx";
import tw from "tailwind-styled-components";

const solutions = [
    {
        name: "Analytics",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: ChartBarIcon,
    },
    {
        name: "Engagement",
        description:
            "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: CursorClickIcon,
    },
    {
        name: "Security",
        description: "Your customers' data will be safe and secure.",
        href: "#",
        icon: ShieldCheckIcon,
    },
    {
        name: "Integrations",
        description:
            "Connect with third-party tools that you're already using.",
        href: "#",
        icon: ViewGridIcon,
    },
    {
        name: "Automations",
        description:
            "Build strategic funnels that will drive your customers to convert",
        href: "#",
        icon: RefreshIcon,
    },
];
const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: SupportIcon,
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkAltIcon,
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: CalendarIcon,
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: ShieldCheckIcon,
    },
];
const recentPosts = [
    {
        id: 1,
        name: "Boost your conversion rate",
        href: "#",
    },
    {
        id: 2,
        name: "How to use search engine optimization to drive traffic to your site",
        href: "#",
    },
    {
        id: 3,
        name: "Improve your customer experience",
        href: "#",
    },
];
const OverlapFont = tw.span`
font-manrope
font-semibold
text-sm
text-gray-500
`;

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header({
    maxValue,
    changeMaxValue,
    hiddenDataFlag,
    setRecoNumber,
}) {
    let [view, setView] = useState(true);

    const onClick = () => {
        setView(!view);
    };

    return (
        <Popover className="w-full h-[10%] bg-white fixed top-0 z-20">
            <div className="max-w-full mx-auto h-full px-4 xl:px-24 border-b-2 border-gray-100">
                <div className="h-full flex justify-between items-center py-4 sm:py-6">
                    <div className="flex justify-start">
                        <a href="#">
                            <span className="font-manrope font-bold text-2xl lg:text-3xl">
                                Running
                                <span className="text-blue hover:text-blues">
                                    Machine
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <form className="hidden md:flex relative">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only"
                        >
                            Search
                        </label>
                        <div className="relative md:w-72 lg:w-80 xl:w-96">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="검색"
                                required
                                autoComplete="off"
                                onClick={onClick}
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue hover:bg-blues focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>
                            {view ? null : (
                                <div className="absolute w-full bg-white rounded-lg border border-gray-300 z-20">
                                    <SearchBar
                                        maxValue={maxValue}
                                        hiddenDataFlag={hiddenDataFlag}
                                        changeMaxValue={changeMaxValue}
                                        setRecoNumber={setRecoNumber}
                                    />
                                </div>
                            )}
                        </div>
                    </form>

                    <div className="hidden md:flex justify-end lg:w-0">
                        <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white font-manrope bg-blue hover:bg-blues"
                        >
                            사업자 등록
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon
                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                {item.name}
                                            </span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Pricing
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Docs
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{" "}
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

{
    /* <Popover className="relative">
{({ open }) => (
    <>
        <Popover.Button
            className={classNames(
                open
                    ? "text-gray-900"
                    : "text-gray-500",
                "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}>
            <span>
                Solutions
            </span>
            <ChevronDownIcon
                className={classNames(
                    open
                        ? "text-gray-600"
                        : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                )}
                aria-hidden="true"
            />
        </Popover.Button>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {solutions.map(
                            (
                                item
                            ) => (
                                <a
                                    key={
                                        item.name
                                    }
                                    href={
                                        item.href
                                    }
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                            {
                                                item.name
                                            }
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {
                                                item.description
                                            }
                                        </p>
                                    </div>
                                </a>
                            )
                        )}
                    </div>
                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        {callsToAction.map(
                            (
                                item
                            ) => (
                                <div
                                    key={
                                        item.name
                                    }
                                    className="flow-root">
                                    <a
                                        href={
                                            item.href
                                        }
                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                        <item.icon
                                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-3">
                                            {
                                                item.name
                                            }
                                        </span>
                                    </a>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    </>
)}
</Popover> */
}

{
    /* <a
                            href="#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Docs
                        </a>

                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open
                                                ? "text-gray-900"
                                                : "text-gray-500",
                                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        )}>
                                        <span>More</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open
                                                    ? "text-gray-600"
                                                    : "text-gray-400",
                                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1">
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {resources.map(
                                                        (
                                                            item
                                                        ) => (
                                                            <a
                                                                key={
                                                                    item.name
                                                                }
                                                                href={
                                                                    item.href
                                                                }
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                <item.icon
                                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                    aria-hidden="true"
                                                                />
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </p>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        {
                                                                            item.description
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                                            Recent
                                                            Posts
                                                        </h3>
                                                        <ul
                                                            role="list"
                                                            className="mt-4 space-y-4">
                                                            {recentPosts.map(
                                                                (
                                                                    post
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            post.id
                                                                        }
                                                                        className="text-base truncate">
                                                                        <a
                                                                            href={
                                                                                post.href
                                                                            }
                                                                            className="font-medium text-gray-900 hover:text-gray-700">
                                                                            {
                                                                                post.name
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            {" "}
                                                            View
                                                            all
                                                            posts{" "}
                                                            <span aria-hidden="true">
                                                                &rarr;
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover> */
}

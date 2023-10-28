import React from "react";
import Container from "../../components/Container";
import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "AIO Service",
    description:
      "One of very few repacking site which offers Windows, Office & Adobe at a time.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "100% Secured",
    description:
      "Virus free downloads from our server so that you don’t get malwares.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Easy Installation",
    description:
      "You just have to click once and the software will automatically install itself.",
    href: "#",
    icon: TrashIcon,
  },
  {
    name: "No Cracks or Patches",
    description:
      "We don’t crack or distribute cracks, we only repack with existing ones.",
    href: "#",
    icon: TrashIcon,
  },
  {
    name: "Auto Activation",
    description:
      "All the softwares will be auto activated during the installation.",
    href: "#",
    icon: TrashIcon,
  },
  {
    name: "Admin Support",
    description: "24/7 Admin support exclusively for our Pro users only.",
    href: "#",
    icon: TrashIcon,
  },
];

const Benifits2 = () => {
  return (
    <div className="pt-20 pb-20 bg-slate-50 dark:bg-slate-800">
      <Container>
        <h1 className="text-center ">
          <span className="font-bold text-3xl  text-slate-700 dark:text-slate-100">
            Why choose us?
          </span>
        </h1>
       
        <div className="mx-auto mt-12 max-w-2xl  lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col border border-slate-300 w-full md:w-[412px] h-[220px] p-6 rounded-md"
              >
                <dt className="text-base font-semibold leading-7 text-slate-700 dark:text-slate-300 hover:text-indigo-700">
                  <div className="mb-6 flex h-10 w-10 items-center  justify-center rounded-lg hover:bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 hover:text-white text-indigo-700"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-slate-400">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
      <Container>
        <div
          className="hero min-h-[300px] rounded-md bg-slate-100 dark:bg-slate-900 mt-20"
          style={{
            backgroundImage: "url(https://i.ibb.co/HYxjFfs/hero-bg.png)",
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-[670px]">
              <h1 className="mb-5 text-3xl font-bold text-slate-700 dark:text-slate-50">
                Start your pro plan today!
              </h1>
              <p className="mb-5 text-slate-400">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary bg-indigo-700 capitalize">
                Get Started Now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-narrow-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l14 0"></path>
                  <path d="M15 16l4 -4"></path>
                  <path d="M15 8l4 4"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benifits2;

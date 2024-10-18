import { RiReactjsLine } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPython } from "react-icons/si";
import { RiJavaFill } from "react-icons/ri";
const TechStack = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React Icon */}
        <div className="group flex flex-col items-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform group-hover:-translate-y-2">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <span className="mt-2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
            React
          </span>
        </div>

        {/* Spring Boot Icon */}
        <div className="group flex flex-col items-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform group-hover:-translate-y-2">
            <BiLogoSpringBoot className="text-7xl text-green-400" />
          </div>
          <span className="mt-2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
            Spring Boot
          </span>
        </div>

        {/* Java Icon */}
        <div className="group flex flex-col items-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform group-hover:-translate-y-2">
            <RiJavaFill className="text-7xl text-cyan-800" />
          </div>
          <span className="mt-2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
            Java
          </span>
        </div>

        {/* Python Icon */}
        <div className="group flex flex-col items-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform group-hover:-translate-y-2">
            <SiPython className="text-7xl text-yellow-300" />
          </div>
          <span className="mt-2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
            Python
          </span>
        </div>

        {/* MySQL Icon */}
        <div className="group flex flex-col items-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform group-hover:-translate-y-2">
            <SiMysql className="text-7xl text-sky-700" />
          </div>
          <span className="mt-2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
            MySQL
          </span>
        </div>

        {/* Docker Icon */}
        <div className="group flex flex-col items-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform transform group-hover:-translate-y-2">
            <FaDocker className="text-7xl text-sky-500" />
          </div>
          <span className="mt-2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
            Docker
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

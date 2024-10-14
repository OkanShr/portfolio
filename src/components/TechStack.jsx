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
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoSpringBoot className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaFill className="text-7xl text-cyan-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-300" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-sky-500" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;

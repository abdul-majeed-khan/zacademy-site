import { Link } from "react-router-dom";

export default function Fellowships() {
  return (
    <>
      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-4 my-32 sm:my-16 sm:mx-6 text-justify sm:text-center">
        <div className="col-span-1 sm:hidden">
          <img src="/hands on shield.svg" className="h-[24rem] mt-8" />
        </div>
        <div className="col-span-1 sm:flex sm:flex-col sm:align-center">
          <h1 className="lg:text-5xl sm:text-3xl font-bold lg:leading-normal">
            Our Fellowships: <br /> The Trial by Fire Saga{" "}
          </h1>
          <img
            src="/hands on shield.svg"
            className="h-[24rem] sm:h-[16rem] mt-8 lg:hidden md:hidden"
          />
          <p className="text-zinc-500 mb-8">
            <br />
            Applicants flood in, seeking to join our ranks, and those selected
            undergo a rigorous trial-by-fire auditing program, shadowing
            alongside resident auditors, codebase developers, and esteemed guest
            auditors.
            <br /> <br />
            Each resident auditor originates from one of these fellowships,
            solidifying a meritocracy that thrives on community involvement,
            where auditors are cultivated rather than simply hired.
          </p>
          <div className="flex flex-row sm:flex-col gap-2">
            <Link to={"/fellowships#smart-contract"}>
              <button className="px-8 py-3 rounded-xl sm:w-full text-md sm:text-sm text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
                Smart Contract Fellowship
              </button>
            </Link>
            <Link to={"/fellowships#zero-knowledge"}>
              <button className="px-8 py-3 rounded-xl sm:w-full text-md sm:text-sm text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
                ZK Fellowship
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

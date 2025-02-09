import CircleText from "./circle-text";
import { FizziLogo } from "./fizzi-logo";

const Footer = () => {
  return (
    <footer className="bg-[#FEE832] text-[#FE6334]">
      <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        <FizziLogo />
        <div className="absolute top-0 right-24 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          {/* circle text */}
          <CircleText />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

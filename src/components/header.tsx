import { FizziLogo } from "@/components/fizzi-logo";

const Header = () => {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="h-20 z-10 cursor-pointer text-sky-800" />
    </header>
  );
};

export default Header;

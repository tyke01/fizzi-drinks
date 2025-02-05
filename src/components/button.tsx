import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

interface Props {
  buttonLink: LinkField;
  buttonText?: string | null;
  className?: string;
}
const Button = ({ buttonLink, buttonText, className }: Props) => {
  return (
    <PrismicNextLink
      field={buttonLink}
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
    >
      {buttonText}{" "}
    </PrismicNextLink>
  );
};

export default Button;

import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <Image
      src="/icons/george-icon.png"
      alt=""
      width={128}
      height={128}
      className={`rounded-[0.65rem] object-cover ${className}`}
      aria-hidden="true"
    />
  );
}

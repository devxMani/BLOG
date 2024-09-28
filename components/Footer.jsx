import { assets } from "@/Assets/assets";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="" width={120} />
    </div>
  );
}

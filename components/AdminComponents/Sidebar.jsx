import { assets } from "@/Assets/assets";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} alt="" width={120} />
      </div>

      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] ms:w-[80%] absolute right-0"></div>

        <div className="flex items-center border border-black gap-3 font-medium px-3 py2 bg-white shadow -[-5px_5px_0px_#000000]">
          <Image src={assets.add_icon} alt="" width={28} /> Add
          <div className="flex items-center border border-black gap-3 font-medium px-3 py2 bg-white shadow -[-5px_5px_0px_#000000]">
            <Image src={assets.add_icon} alt="" width={28} /> Add
            <div className="flex items-center border border-black gap-3 font-medium px-3 py2 bg-white shadow -[-5px_5px_0px_#000000]">
              <Image src={assets.add_icon} alt="" width={28} /> Add
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

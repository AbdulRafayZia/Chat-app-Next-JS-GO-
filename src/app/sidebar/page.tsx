import Image from "next/image";
import GroupSvg from "@/app/assests/group.svg";
import menu from "@/app/assests/menu.svg";
import filter from "@/app/assests/filter.svg";
import search from "@/app/assests/search.svg";

export default function Sidebar() {
  return (
    <div className="w-[25%]">
      <nav
        className="flex justify-between border h-[74px]  p-2"
        style={{ background: "var(--nav-background)" }}
      >
        <Image
          src={""}
          alt=""
          className="border w-[50px] h-[50px] rounded-[50px] ml-4"
        />
        <div className="flex gap-4 mr-4">
          <Image
            className=" cursor-pointer"
            src={GroupSvg}
            alt="Group Icon"
            width={24}
            height={24}
          />

          <Image
            className=" cursor-pointer"
            src={menu}
            alt="Group Icon"
            width={24}
            height={24}
          />
        </div>
      </nav>
      <main
        className="h-screen"
        style={{ background: "var(--sidebar-background)" }}
      >
        <div className="flex justify-center items-center h-[75px] broder border-b-2 border-[#E9EDEF] ">
          <div
            className="flex   items-center justify-center h-[50px]  rounded-[10px] px-[20px] py-[15px]"
            style={{ background: "var(--nav-background)" }}
          >
            <Image className="ml-5  h-[20px]" src={search} alt="search" />
            <input
              className="  focus:border-none focus:outline-none h-[80%] w-[85%] p-3"
              type="text"
              name=""
              id=""
              style={{ background: "var(--nav-background)" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

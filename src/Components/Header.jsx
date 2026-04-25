import React from "react";
import { BellDot } from "lucide-react";
import { Settings } from "lucide-react";

export default function Header() {
  return (
    <div>
      <section className=" fixed top-0 right-0 w-full bg-white z-50 flex justify-center border-b-2 border-black/30 py-1 ">
        <div className="container flex justify-between items-center p-3">
          <h1 className="font-bold text-[25px] text-[#6b34d0]">
            Children Growth
          </h1>
          <nav className="hidden lg:flex gap-6 border border-violet-400 px-4.5 py-2.5 rounded-2xl ">
            <a className="text-[#6d5dee] font-bold hover:text-violet-700 transtion duration-300 ">
              لوحة تحكم
            </a>
            <a className="text-[#6d5dee] font-bold hover:text-violet-700 transtion duration-300 ">
              منحنيات النمو
            </a>
            <a className="text-[#6d5dee] font-bold hover:text-violet-700 transtion duration-300 ">
              المواعيد
            </a>
          </nav>
          <div className=" hidden lg:flex gap-3 ">
            <div className="flex gap-5 justify-center items-center ">
              <BellDot
                className="hover:bg-violet-200 p-1 rounded-2xl transtion duration-300 border border-violet-400 "
                size={30}
              />
              <Settings
                className="hover:bg-violet-200 p-1 rounded-2xl transtion duration-300 border border-violet-400"
                size={30}
              />
            </div>
            <div className="relative rounded-2xl border border-violet-400 hover:border-violet-600 hover:shadow-md shadow-violet-400/20  ">
              <input
                placeholder="Search..."
                class="input shadow-lg border-gray-300  px-5 py-3  w-56 transition-all focus:w-64 outline-none"
                name="search"
                type="search"
              />
              <svg
                class="size-6 absolute top-3 right-3 text-gray-500"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
          </div>
          <button class="group flex lg:hidden items-center justify-center relative z-10 [transition:all_0.5s_ease] rounded-[0.375rem] p-[3px] border border-black cursor-pointer outline-none focus-visible:outline-0">
            <svg
              fill="currentColor"
              stroke="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 overflow-visible [transition:transform_.35s_ease] group-focus:[transition-delay:.25s] :[transition:transform_.35s_ease] group-focus:rotate-45"
            >
              <path
                class="group-focus:[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)]"
                d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
              ></path>
              <path
                class="group-focus:[transform:rotate(22.5deg)_translate(15.5%,-23%)]"
                d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
              ></path>
              <path
                class="group-focus:[transform:rotate(112.5deg)_translate(-15%,-149.5%)]"
                d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"
              ></path>
            </svg>
          </button>
        </div>
        
      </section>
      
        
    </div>
  );
}

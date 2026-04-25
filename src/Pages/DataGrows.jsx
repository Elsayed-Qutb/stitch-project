import React from "react";
import { Baby } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { ChartSpline } from "lucide-react";
import { UserRoundSearch } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { ClipboardMinus } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { CircleStar } from "lucide-react";
import { Lock } from "lucide-react";
import Container from "../Components/Container";

export default function Sidebar() {
  return (
    <div>
      <Header></Header>

      <section className="flex ">
        <aside
          className="fixed top-16 right-0 w-64 h-[calc(100vh-64px)] bg-violet-100/20 border border-violet-500 text-white py-8 px-3
  hidden md:block"
        >
          <div className="container flex flex-col justify-center items-center gap-5 py-4 px-2 ">
            <div className=" flex flex-col items-center text-center gap-1.5">
              <Baby size={55} className="bg-[#5046e5] p-2 rounded-2xl" />
              <h1 className="font-bold text-[24px] text-[#5046e5]">
                Children Growth
              </h1>
              <h1 className="text-gray-600">نظام إدارة البيانات الطبية</h1>
            </div>
            <div className="grid grid-1 gap-2.5 w-12/12 ">
              <button className="bg-[#f1f5ff]  pl-5 p-2  rounded-[10px] border border-violet-600 font-bold text-[15px] flex justify-start gap-2 text-[#6b5ff2] hover:bg-violet-600 transtion duration-300 hover:text-white">
                <ChartSpline />
                <h1>منحنيات النمو</h1>
              </button>

              <button className="bg-[#f1f5ff]  pl-5 p-2  rounded-[10px] border border-violet-600 font-bold text-[15px] flex justify-start gap-2 text-[#6b5ff2] hover:bg-violet-600 transtion duration-300 hover:text-white">
                <UserRoundSearch />
                <h1> سجلات الاطفال </h1>
              </button>
              <button className="bg-[#f1f5ff]  pl-5 p-2  rounded-[10px] border border-violet-600 font-bold text-[15px] flex justify-start gap-2 text-[#6b5ff2] hover:bg-violet-600 transtion duration-300 hover:text-white">
                <CalendarPlus />
                <h1> المواعيد</h1>
              </button>
              <button className="bg-[#f1f5ff]  pl-5 p-2  rounded-[10px] border border-violet-600 font-bold text-[15px] flex justify-start gap-2 text-[#6b5ff2] hover:bg-violet-600 transtion duration-300 hover:text-white">
                <ClipboardMinus />
                <h1> التقراير</h1>
              </button>
            </div>
            <button className="p-2 bg-[#5a4be6] rounded-xl w-12/12  flex gap-3 items-center justify-center">
              <h1 className="font-bold text-[18px]"> عرض النتيجه</h1>
            </button>
            <Link
              to="/Dashboard"
              className="p-2 bg-[#5a4be6] rounded-xl w-12/12  flex gap-3 items-center justify-center  "
            >
              <h1 className="font-bold text-[18px]"> عوده الي لوحه التحكم</h1>
            </Link>
          </div>
        </aside>
        <main className="  mr-0 lg:mr-64 mt-17 p-2 lg:p-5 w-12/12 lg:w-11/12 py-10">
          <div className="container  flex flex-col p-1">
            <div className=" text-end flex flex-col lg:flex-row-reverse justify-between items-center gap-3  "></div>

            <Container></Container>
            <div className="container p-4 lg:p-8 flex flex-col w-full lg:w-12/12  mt-5 rounded-2xl border border-violet-500 ">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 text-center lg:text-end">
                  <h1 className="font-bold text-[25px]">تحليلات النمو</h1>
                  <h1 className="font-medium text-gray-600">
                    متابعة دقيقة لجدول تحصين الطفل والجرعات القادمة
                  </h1>
                </div>
                <div className="flex flex-row lg:flex-row justify-between items-center ">
                  <h1 className="font-bold text-[24px] ">سجل القياسات</h1>
                  <h1 className="text-violet-600 font-bold">رؤيه الكل</h1>
                </div>
                <div className="flex justify-between gap-2  lg:gap-15   p-2 bg-gray-100 rounded-2xl border-b border-black/30 hover:bg-gray-200 transition duration-300 ">
                  <h1 className="font-medium text-[15px] text-end text-gray-600 ">
                    الحاله{" "}
                  </h1>
                  <h1 className="font-medium text-[15px] text-end text-gray-600 ">
                    الطول{" "}
                  </h1>
                  <h1 className="font-medium text-[15px] text-end text-gray-600 ">
                    الوزن
                  </h1>
                  <h1 className="font-medium text-[15px] text-end text-gray-600 ">
                    العمر
                  </h1>
                  <h1 className="font-medium text-[15px] text-end text-gray-600 ">
                    التاريخ
                  </h1>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between px-1  py-2.5 border-b border-black/15 hover:bg-violet-50 transition duration-300 ">
                    <div className="bg-green-200 text-green-700 rounded-2xl p-1 font-bold">
                      طبيعي
                    </div>
                    <h1 className="font-bold">88.2</h1>
                    <div className="font-bold">12.5</div>
                    <div className="">27 شهرا</div>
                    <h1 className="font-bold">مارس 15 </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between px-1  py-2.5 border-b border-black/15 hover:bg-violet-50 transition duration-300 ">
                    <div className="bg-green-200 text-green-700 rounded-2xl p-1 font-bold">
                      طبيعي
                    </div>
                    <h1 className="font-bold">87.5</h1>
                    <div className="font-bold">12.1</div>
                    <div className="">26 شهرا</div>
                    <h1 className="font-bold">فبراير 12 </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between px-1  py-2.5 border-b border-black/15 hover:bg-violet-50 transition duration-300 ">
                    <div className="bg-yellow-100 text-yellow-600 rounded-2xl p-1 font-bold">
                      طبيعي
                    </div>
                    <h1 className="font-bold">86.7</h1>
                    <div className="font-bold">11</div>
                    <div className="">25 شهرا</div>
                    <h1 className="font-bold">يناير 10 </h1>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
              <div className="flex justify-center mt-6">
                      <Link
                        to="/AddBaby"
                        className="p-2 bg-[#5046e5] rounded-xl w-3/12  text-white flex gap-3 items-center justify-center text-center"
                      >
                        <h1 className="font-bold text-[18px]"> العوده</h1>
                        {/* <Plus /> */}
                      </Link>
                     
                    </div>
        </main>
      </section>
    </div>
  );
}

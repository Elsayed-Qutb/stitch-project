import React from "react";
import { Baby } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { ChartSpline } from "lucide-react";
import { UserRoundSearch } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { ClipboardMinus } from "lucide-react";
import { Plus } from "lucide-react";
import { UserRoundPlus } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <section className="flex ">
        <aside
          className="fixed top-16 right-0 w-64 h-[calc(100vh-64px)] bg-violet-100/20 border border-violet-500 text-white py-8 px-3
  hidden md:block"
        >
          <div className="container flex flex-col justify-center items-center gap-8 py-6 px-2 ">
            <div className=" flex flex-col items-center text-center gap-1.5">
              <Baby size={55} className="bg-[#5046e5] p-2 rounded-2xl" />
              <h1 className="font-bold text-[24px] text-[#5046e5]">
                Children Growth
              </h1>
              <h1 className="text-gray-600">نظام إدارة البيانات الطبية</h1>
            </div>
            <div className="grid grid-1 gap-2.5 w-12/12 ">
              <button className="bg-[#f1f5ff] pl-5 p-2 rounded-[10px] border border-violet-600 font-bold text-[15px] flex justify-start gap-2 text-[#6b5ff2] hover:bg-violet-600 transtion duration-300 hover:text-white">
                <LayoutDashboard />
                <h1> لوحة التحكم</h1>
              </button>
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
            <Link to="/AddBaby" className="p-2 bg-[#5046e5] rounded-xl w-12/12  flex gap-3 items-center justify-center">
              <h1 className="font-bold text-[18px]"> اضافه طفل جديد</h1>
              <Plus />
            </Link>
          </div>
        </aside>
        <main className="  mr-0 lg:mr-64 mt-17 p-3 lg:p-5  lg:w-11/12 py-10">
          <div className="container  flex flex-col p-1">
            <div className=" text-end  flex flex-col gap-3">
              <h1 className="font-bold text-[30px] ">لوحة التحكم</h1>
              <h1 className="text-gray-600">
                .أهلاً بك مجدداً د. سارة. إليك نظرة شاملة على نشاط العيادة اليوم
              </h1>
            </div>
            <div className="all  flex flex-col-reverse lg:flex-row mt-3 gap-2.5">
              <div className="left lg:w-4/12 flex flex-col gap-3">
                <div className="flex items-center justify-between border border-violet-400 rounded-3xl px-6 py-4 h-1/4 text-end">
                  <CalendarPlus
                    size={50}
                    className="bg-gray-300 rounded-2xl p-1.5"
                  />
                  <div>
                    <h1 className="font-bold text-[16px] text-gray-500">
                      مواعيد اليوم
                    </h1>
                    <h1 className="font-bold text-[19px]">0</h1>
                  </div>
                </div>
                <div className="flex items-center justify-between border border-violet-400 rounded-3xl px-6 py-4 h-1/4 text-end">
                  <ChartSpline
                    size={50}
                    className="bg-gray-300 rounded-2xl p-1.5"
                  />
                  <div>
                    <h1 className="font-bold text-[16px] text-gray-500">
                      {" "}
                      التقارير المكتمله
                    </h1>
                    <h1 className="font-bold text-[19px]">0</h1>
                  </div>
                </div>
                <div className="flex flex-col border border-violet-400 rounded-3xl px-6 py-4 h-1/2 gap-2 ">
                  <h1 className="text-end font-bold text-[19px]">
                    نصيحه المنصة
                  </h1>
                  <div className="flex flex-col items-center gap-2">
                    <Lightbulb
                      size={40}
                      className=" bg-yellow-200 p-1 rounded-2xl"
                    />
                    <h1 className="font-bold text-[14px] text-gray-500 text-center">
                      {" "}
                      "التتبع المنتظم للطول والوزن خلال السنوات الخمس الأولى
                      يساعد في الاكتشاف المبكر لأي اضطرابات نمو محتملة{" "}
                    </h1>
                    <h1 className="font-medium text-[15px] text-violet-500">
                      اقرا المزيد في مكتبه النمو
                    </h1>
                  </div>
                </div>
              </div>
              <div className="right lg:w-8/12  flex justify-center text-center py-18 border border-violet-400 rounded-2xl">
                <div className="w-8/12 flex flex-col gap-8 items-center text-center">
                  <UserRoundPlus size={45} />
                  <h1 className="font-bold text-[35px]">لا يوجد اطفال بعد</h1>
                  <h1 className="text-gray-500">
                    ابدأ بتنظيم بيانات مرضاك الصغار وتتبع منحنيات نموهم بدقة.
                    يمكنك إضافة الملف الطبي الأول الآن بضغطة زر
                  </h1>
                  <Link to="/AddBaby" className="p-3 px-6 bg-[#5a4be6] rounded-2xl font-bold text-[24px] text-white flex items-center justify-center gap-2">
                    <ArrowLeft />
                    <h1> اضافه طفل جديد</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

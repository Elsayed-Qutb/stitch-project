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
import Header from "../Components/Header";
import { CircleStar } from "lucide-react";

export default function Sidebar() {
  return (
    <div>
      <Header></Header>

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
          </div>
        </aside>
        <main className="  mr-0 lg:mr-64 mt-17 p-4 lg:p-5  lg:w-11/12 py-10">
          <div className="container  flex flex-col p-1">
            <div className=" text-end flex flex-col lg:flex-row-reverse justify-between items-center gap-3  ">
              <div className="w-8/12 lg:w-3/12 flex flex-col items-center rounded-2xl border border-violet-400 p-2 shadow-sm shadow-violet-400/40">
                <h1 className="text-gray-600  ">اسم المريض </h1>
                <h1 className="font-bold text-[25px]">ساره خالد</h1>
              </div>
              <div className="flex flex-col gap-3 text-center lg:text-end">
                <h1 className="font-bold text-[25px]">سجل التطعيمات</h1>
                <h1 className="font-medium text-gray-600">
                  متابعة دقيقة لجدول تحصين الطفل والجرعات القادمة
                </h1>
              </div>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 mt-7 justify-center">
              {/* <div className="grid grid-cols-1 p-3 ">
                <div className="flex h-10/12 justify-between items-center py-12  px-3 border border-violet-600 rounded-2xl">
                  <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-gray-500 ">اخر تطعيم</h1>
                    <h1 className="font-bold text-[22px] "> تطعيم 6 اشهر</h1>
                    <h1 className="text-violet-600 text-[13px]">
                      {" "}
                      منذ 50 يوما{" "}
                    </h1>
                  </div>
                      <CircleStar size={50} color="white" className="bg-violet-700 rounded-2xl" />
                </div>
                <div className="flex h-10/12 justify-between items-center py-12  px-3 border border-violet-600 rounded-2xl">
                  <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-gray-500 ">اخر تطعيم</h1>
                    <h1 className="font-bold text-[22px] "> تطعيم 6 اشهر</h1>
                    <h1 className="text-violet-600 text-[13px]">
                      {" "}
                      منذ 50 يوما{" "}
                    </h1>
                  </div>
                      <CircleStar size={50} color="white" className="bg-violet-700 rounded-2xl" />
                </div>
               
              </div> */}

              <div className="flex flex-col items-end  px-6 p-4 gap-3  border border-violet-700 rounded-2xl">
                <h1 className="font-bold text-blue-700 bg-blue-100 rounded-2xl p-1 w-5/12 text-center">
                  {" "}
                  تقييم الحاله{" "}
                </h1>
                <h1 className="text-end font-bold text-[20px]">
                  مؤشر الصحة العامة
                </h1>

                <h1 className="text-end font-bold text-[40px] text-violet-500">
                  يرجي الراحه الكامله{" "}
                </h1>
                <h1 className="text-end font-semibold text-[17px] text-gray-600">
                  حالة الطفل مستقرة مع متابعة دورية{" "}
                </h1>
              </div>
              <div className="flex flex-col items-end  px-6 p-4 gap-3  border border-violet-700 rounded-2xl">
                <h1 className="font-bold text-yellow-700 bg-yellow-100 rounded-2xl p-1 w-5/12 text-center">
                  {" "}
                  موعد قريب{" "}
                </h1>
                <h1 className="text-end font-bold text-[20px]">
                  الموعد القادم
                </h1>
                <h1 className="text-end font-bold text-[40px] text-violet-500">
                  {" "}
                  14{" "}
                </h1>
                <h1 className="text-end font-bold text-[25px]"> اكتوبر 2026</h1>
                <h1 className="text-end font-semibold text-[17px] text-gray-600">
                  تطعيم الـ 9 أشهر (الحصبة والدرن){" "}
                </h1>
              </div>
              <div className="flex flex-col items-end  px-6 p-4 gap-3  border border-violet-700 rounded-2xl">
                <h1 className="font-bold text-violet-800 bg-violet-300 rounded-2xl p-1 w-5/12 text-center">
                  مكتمل بنسبه 65{" "}
                </h1>
                <h1 className="text-end font-bold text-[20px]">تقدم التحصين</h1>
                <h1 className="text-end font-bold text-[15px] text-gray-500">
                  {" "}
                  تبقت 4 جرعات أساسية لإتمام الجدول الوطني للسنة الأولى
                </h1>
              </div>
            </div>
            <div className="container  p-5 flex flex-col gap-6 mt-3 rounded-2xl">
              <div className="flex flex-col lg:flex-row justify-between items-center border-b-2 p-2 border-black/20">
                <h1 className="font-bold text-[24px] ">
                  قائمة التطعيمات الوطنية
                </h1>
                <nav className="flex gap-4 ">
                  <h1 className="text-gray hover:bg-violet-200 hover:text-violet-700 hover:font-bold rounded-2xl transition duration-300 p-2">الكل</h1>
                  <h1 className="text-gray hover:bg-violet-200 hover:text-violet-700 hover:font-bold rounded-2xl transition duration-300 p-2">المكتمله </h1>
                  <h1 className="text-gray hover:bg-violet-200 hover:text-violet-700 hover:font-bold rounded-2xl transition duration-300 p-2">المفضله</h1>
                </nav>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-15 p-2 border-b border-black/30 hover:bg-blue-100 transition duration-300 ">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-purple-500 to-violet-800 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900">
                    Check
                  </span>
                </label>

                <div className="font-bold text-[18px] text-center">
                  تطعيم عند الولادة
                </div>
                <div className="font-semibold text-[18px] text-end text-gray-600">
                  تم الحقن بواسطة د. سارة في مستشفى الملك فيصل
                </div>
                <div className="font-bold text-[18px] text-end">
                  <h1> 2026 31 سبتمبر</h1>{" "}
                  <h1 className="text-green-700">مكتمل</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-15 p-2 border-b border-black/30 hover:bg-blue-100 transition duration-300 ">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-purple-500 to-violet-800 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900">
                    Check
                  </span>
                </label>

                <div className="font-bold text-[18px] text-center">
                  عمر شهرين
                </div>
                <div className="font-semibold text-[18px] text-end text-gray-600">
                  تم الحقن في مركز الرعاية الأولية{" "}
                </div>
                <div className="font-bold text-[18px] text-end">
                  <h1> مارس 3 2026</h1>{" "}
                  <h1 className="text-green-700">مكتمل</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-15 p-2 border-b border-black/30 hover:bg-blue-100 transition duration-300">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-purple-500 to-violet-800 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900">
                    Check
                  </span>
                </label>

                <div className="font-bold text-[18px] text-center">
                  عمر 9 اشهر{" "}
                </div>
                <div className="font-semibold text-[18px] text-end text-violet-600">
                  الموعد المؤكد: مستشفى الملك فهد التخصصي{" "}
                </div>
                <div className="font-bold text-[18px] text-end">
                  <h1 className="text-blue-600"> 2026 31 مايو</h1>{" "}
                  <h1 className="text-orange-700">قيد الانتظار</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-15 p-2 border-b border-black/30 hover:bg-blue-100 transition duration-300 ">
                <label class="relative flex items-center cursor-pointer group">
                  <input class="peer sr-only" type="checkbox" />
                  <div class="w-8 h-8 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-purple-500 to-violet-800 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <span class="ml-3 text-sm font-medium text-gray-900">
                    Check
                  </span>
                </label>

                <div className="font-bold text-[18px] text-center">
                  عمر 12 شهر{" "}
                </div>
                <div className="font-semibold text-[18px] text-end text-gray-600">
                  سيتم فتح الموعد تلقائياً عند بلوغ السنة{" "}
                </div>
                <div className="font-bold text-[18px] text-end">
                  <h1 className="text-gray-700"> 2026 31 يناير</h1>{" "}
                  <h1 className="text-gray-700">لاحقا</h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

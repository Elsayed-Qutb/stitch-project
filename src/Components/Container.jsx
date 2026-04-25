import React from "react";
import { Image } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { Weight } from "lucide-react";
import { Ruler } from "lucide-react";
import { Percent } from "lucide-react";
import { WeightTilde } from "lucide-react";

export default function Container() {
  return (
    <div>
      <section className="flex justify-center p-2 lg:mt-7">
        <div className="container flex flex-col justify-center items-end gap-6 ">
          <div className="flex justify-between w-12/12 gap-1">
            <div className="flex gap-3  ">
              <button className="p-3 px-6 text-violet-500 border border-violet-500 rounded-2xl font-bold">
                تصدير PDF
              </button>
              <button className="p-3 px-6 text-violet-500 border border-violet-500 rounded-2xl font-bold">
                'طباعه التسجيل'{" "}
              </button>
            </div>
            <div className="w-8/12 lg:w-3/12 flex flex-col items-center text-center rounded-2xl border border-violet-400 p-2 shadow-sm shadow-violet-400/40">
              <h1 className="text-gray-600  ">اسم الطفل </h1>
              <h1 className="font-bold text-[25px]">احمد سعد</h1>
            </div>
          </div>

          <div className=" w-12/12 flex flex-col-reverse lg:flex-row  gap-9">
            <div className="w-12/12 lg:w-7/12 grid grid-cols-2 gap-5">
              <div className=" group flex gap-4 p-3 items-center justify-center border border-violet-600 rounded-3xl hover:-translate-y-2 hover:shadow-xl transtion duration-300">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-gray-500">الطول الحالي </h1>
                  <h1 className="font-bold text-[20px]">88.2 سم</h1>
                  <h1 className="font-bold text-blue-500">
                    ضمن المعدل الطبيعي{" "}
                  </h1>
                </div>
                <Ruler
                  size={50}
                  color="white"
                  className="bg-blue-500 rounded-2xl p-2 group-hover:bg-blue-700 group-hover:text-white "
                />
              </div>
              <div className=" group flex  gap-4 p-3 items-center justify-center border border-violet-600 rounded-3xl hover:-translate-y-2 hover:shadow-xl transtion duration-300">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-gray-500">الوزن الحالي </h1>
                  <h1 className="font-bold text-[20px]">12.6 كجم</h1>
                  <h1 className="font-bold text-green-500">
                    +0.4 عن الشهر الماضي{" "}
                  </h1>
                </div>
                <Weight
                  size={50}
                  color="white"
                  className="group-hover:bg-green-700  bg-green-500 rounded-2xl p-2 transtion duration-400  "
                />
              </div>
              <div className="group  flex gap-4 p-3 items-center justify-center border border-violet-600 rounded-3xl hover:-translate-y-2 hover:shadow-xl transtion duration-300">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-gray-500"> النسبة المئوية </h1>
                  <h1 className="font-bold text-[20px]">59.2 </h1>
                  <h1 className="font-bold text-orange-500">
                    افضل من المتوسط{" "}
                  </h1>
                </div>
                <Percent
                  size={45}
                  color="white"
                  className="bg-orange-400 rounded-2xl p-2 group-hover:bg-orange-500 group-hover:text-white transtion duration-400 "
                />
              </div>
              <div className=" group flex gap-4 p-3 items-center justify-center border border-violet-600 rounded-3xl hover:-translate-y-2 hover:shadow-xl transtion duration-300">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-gray-500">
                    {" "}
                    مؤشر كتلة الجسم (BMI){" "}
                  </h1>
                  <h1 className="font-bold text-[20px]">15.2 </h1>
                  <h1 className="font-bold text-blue-500">نمو متناسق </h1>
                </div>
                <WeightTilde
                  size={50}
                  color="white"
                  className=" group-hover:bg-violet-500 group-hover:text-white bg-violet-700 rounded-2xl p-2 "
                />
              </div>
            </div>

            <div className=" w-12/12  lg:w-5/12 py-5 px-2 flex flex-col items-center gap-6 bg-violet-50 border border-violet-500 rounded-2xl shadow-lg shadow-violet-400/20">
              <Image size={40} />
              <h1 className="font-bold text-[25px]">ياسين عمر محمود</h1>
              <h1 className="font-bold text-gray-600 text-[19px]">
                العمر: سنتان و3 أشهر
              </h1>
              <div className="flex gap-3 ">
                <div className="flex flex-col bg-violet-200 p-2.5 px-4 rounded-2xl text-end">
                  <h1 className="font-bold text-violet-600 text-end">
                    فصيله الدم
                  </h1>
                  <h1> A+</h1>
                </div>
                <div className="flex flex-col bg-violet-200 p-2.5 px-4 rounded-2xl text-end">
                  <h1 className="font-bold text-violet-600">تاريخ الميلاد</h1>
                  <h1> 12 يناير </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

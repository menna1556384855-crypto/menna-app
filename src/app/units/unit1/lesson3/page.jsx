"use client";
import { useState } from "react";

export default function Lesson3() {
  const [scenarioResult, setScenarioResult] = useState("");

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        
        <header className="border-b-4 border-red-500 pb-6">
          <span className="text-red-600 font-bold text-lg md:text-xl block mb-2">الوحدة الأولى: أدوات التواصل والأمان الرقمي</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">الدرس الثالث: درع الحماية - كيف تظل آمناً على الإنترنت؟</h1>
        </header>

        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-3 h-8 bg-red-500 rounded-full inline-block"></span>
            قواعد السلامة والأمان الرقمي
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 text-justify">
            الإنترنت بيئة مليئة بالمعرفة الرائعة والفرص التعليمية، ولكنها مثل أي مكان في العالم الواقعي، تحتوي على بعض المخاطر التي تتطلب منا الحيطة والحذر الشديدين. لحماية نفسك وحساباتك تماماً من أي خطر افتراضي، يجب عليك فهم وتطبيق قاعدتين ذهبيتين للأمان الرقمي:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100 space-y-3">
              <h3 className="text-xl font-bold text-red-900">1. حماية كلمات المرور الشخصية (Passwords)</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                كلمة المرور هي بمثابة مفتاح بيتك الرقمي. لا تشاركها مع أي شخص على الإطلاق، حتى لو كان صديقك المفضل. احرص على صياغة كلمة مرور قوية جداً (تحتوي على حروف كبيرة وصغيرة، أرقام، ورموز خاصة مثل <code className="bg-slate-200 px-1 rounded">#</code> أو <code className="bg-slate-200 px-1 rounded">*</code>) وتجنب استخدام اسمك أو تاريخ ميلادك ليسهل تخمينه واختراقه.
              </p>
            </div>
            <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100 space-y-3">
              <h3 className="text-xl font-bold text-red-900">2. عدم التحدث مع الغرباء (Strangers)</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                لا تقبل طلبات صداقة أو تبدأ في محادثات مع أشخاص مجهولين لا تعرفهم في حياتك الواقعية الحقيقية. بعض الحسابات قد تكون حسابات وهمية ومزيفة بهدف جمع معلوماتك الشخصية أو صورك لاستغلالها لاحقاً. إذا طلب منك شخص غريب صورتك أو عنوان منزلك، ارفض تماماً دون نقاش.
              </p>
            </div>
          </div>
        </section>

        {/* لعبة السيناريو التفاعلية القائمة على الموقف التعليمي */}
        <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl space-y-6">
          <div className="text-red-400 font-bold text-xl">🎮 محاكاة مواقف الأمان الحقيقية:</div>
          <h3 className="text-2xl font-bold">موقف: تلقيت رسالة من شخص مجهول على منصة تعليمية يطلب منك اسم مدرستك وعنوان سكنك مقابل إرسال لعبة مدفوعة مجاناً، ماذا تفعل؟</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <button 
              onClick={() => setScenarioResult("wrong")}
              className="p-5 bg-slate-800 hover:bg-slate-700 text-right border border-slate-700 rounded-xl font-medium text-lg text-slate-300 transition-all"
            >
              أوافق فوراً وأرسل البيانات المطلوبة لأحصل على اللعبة المجانية بسرعة.
            </button>
            <button 
              onClick={() => setScenarioResult("correct")}
              className="p-5 bg-slate-800 hover:bg-slate-700 text-right border border-slate-700 rounded-xl font-medium text-lg text-slate-300 transition-all"
            >
              أرفض تماماً تقديم أي معلومات، وأقوم بحظره فوراً، ثم أخبر والدي أو معلمي. 🛡️
            </button>
          </div>

          {scenarioResult === "correct" && (
            <div className="p-6 bg-emerald-500/20 border border-emerald-500 rounded-xl text-emerald-300 font-medium">
              تصرف عبقري ومثالي! حماية البيانات الشخصية واللجوء للكبار هو الدرع الأساسي للمواطن الرقمي الآمن.
            </div>
          )}
          {scenarioResult === "wrong" && (
            <div className="p-6 bg-red-500/20 border border-red-500 rounded-xl text-red-300 font-medium">
              خطأ فادح! تقديم معلومات السكن للغرباء يعرضك ويعرض عائلتك لمخاطر أمنية واختراقات خطيرة. تراجع عن هذا الخيار!
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
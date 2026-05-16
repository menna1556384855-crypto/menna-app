"use client";
import { useState } from "react";

export default function Lesson1() {
  const [quizAnswer, setQuizAnswer] = useState(null);

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      {/* Container واخد العرض الكامل */}
      <div className="w-full max-w-none space-y-12">
        
        {/* رأس الدرس */}
        <header className="border-b-4 border-emerald-500 pb-6">
          <span className="text-emerald-600 font-bold text-lg md:text-xl block mb-2">الوحدة الأولى: أدوات التواصل والأمان الرقمي</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">الدرس الأول: كيف تحول العالم إلى قرية صغيرة؟</h1>
        </header>

        {/* المكون الأول: الشرح الموسع */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-3 h-8 bg-emerald-500 rounded-full inline-block"></span>
            مفهوم تكنولوجيا المعلومات والاتصالات (ICT)
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 text-justify">
            هل تخيلت يوماً كيف كان أجدادنا يتواصلون مع أقاربهم في البلاد البعيدة؟ كان الأمر يتطلب أسابيعاً وشهوراً لإرسال رسالة ورقية واحدة! أما اليوم، وبفضل الطفرة الهائلة في تكنولوجيا المعلومات والاتصالات (ICT)، تحول كوكب الأرض الشاسع إلى <strong>"قرية صغيرة"</strong>. لم يعد للمسافات الجغرافية أي قيمة؛ بلمسة زر واحدة على شاشة هاتفك المحمول أو من خلال جهاز الكمبيوتر المتصل بشبكة الإنترنت، يمكنك التحدث بالصوت والصورة مع أي شخص في القارة الأخرى وكأنكما تجلسان في الغرفة نفسها. التكنولوجيا لم تغير فقط طريقة تفاعلك مع أصدقائك، بل أعادت تشكيل مفهوم التعليم، العمل، وإدارة الحياة اليومية بالكامل.
          </p>
        </section>

        {/* المكون الثاني: مكالمات الفيديو التعليمية */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-3 h-8 bg-emerald-500 rounded-full inline-block"></span>
            ورشتك التعليمية الافتراضية - مكالمات الفيديو
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600">
            مكالمات الفيديو ليست مجرد وسيلة تسلية، بل هي صفك الدراسي البديل والذكي. تتيح لك هذه الأداة الانضمام إلى محاضرات تفاعلية حية مع معلمك وزملائك. ولكن، كيف تنضم بشكل صحيح وآمن؟
          </p>

          {/* كروت عريضة تأخذ المساحة بالكامل */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-md">
              <h3 className="font-bold text-xl text-emerald-700 mb-2">1. رابط الدعوة (Meeting Link)</h3>
              <p className="text-slate-600 leading-relaxed">لكل محادثة رقمية رابط فريد يرسله المعلم، بمجرد الضغط عليه يتم توجيهك مباشرة إلى غرفة الاجتماع الافتراضية.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-md">
              <h3 className="font-bold text-xl text-emerald-700 mb-2">2. إعدادات الصوت والصورة</h3>
              <p className="text-slate-600 leading-relaxed">قبل الدخول، تأكد من جودة اتصال الإنترنت، واختبر الميكروفون والكاميرا. ادخل دائماً والميكروفون مغلق لتجنب إحداث ضوضاء.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-md">
              <h3 className="font-bold text-xl text-emerald-700 mb-2">3. التفاعل والتحدث</h3>
              <p className="text-slate-600 leading-relaxed">يمكنك استخدام ميزة "رفع اليد الافتراضية" للمشاركة، أو الكتابة في صندوق المحادثة النصية (Chat) لطرح أسئلتك دون مقاطعة المعلم.</p>
            </div>
          </div>
        </section>

        {/* المكون الثالث: عنصر تفاعلي (Knowledge Check) */}
        <section className="bg-emerald-950 text-white p-8 md:p-12 rounded-3xl shadow-lg space-y-6">
          <div className="badge bg-emerald-500 text-emerald-950 px-4 py-1.5 rounded-full text-sm font-bold w-fit">نشاط تفاعلي سريع</div>
          <h3 className="text-2xl md:text-3xl font-bold">سؤال اليوم: ما التصرف الصحيح عند الانضمام لمكالمة فيديو تعليمية لأول مرة؟</h3>
          
          <div className="space-y-4 pt-2">
            <button 
              onClick={() => setQuizAnswer("wrong")}
              className={`w-full p-5 rounded-2xl text-right transition-all font-medium text-lg border ${quizAnswer === "wrong" ? "bg-red-500 border-red-400 text-white" : "bg-emerald-900/50 border-emerald-800 hover:bg-emerald-900"}`}
            >
              أ) فتح الميكروفون والكاميرا فوراً والصراخ لتحية الزملاء.
            </button>
            <button 
              onClick={() => setQuizAnswer("correct")}
              className={`w-full p-5 rounded-2xl text-right transition-all font-medium text-lg border ${quizAnswer === "correct" ? "bg-emerald-500 border-emerald-400 text-slate-950" : "bg-emerald-900/50 border-emerald-800 hover:bg-emerald-900"}`}
            >
              ب) الدخول بميكروفون مغلق، والالتزام بالهدوء، واستخدام ميزة رفع اليد عند الرغبة في الكلام. ✅
            </button>
          </div>

          {quizAnswer === "correct" && (
            <div className="p-4 bg-emerald-500/20 border border-emerald-500 rounded-xl text-emerald-300 font-medium">
              ممتاز يا بطل! إجابة صحيحة تظهر وعيك بآداب المواطنة الرقمية.
            </div>
          )}
          {quizAnswer === "wrong" && (
            <div className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-300 font-medium">
              حاول مرة أخرى! فكر في الهدوء وعدم إزعاج زملائك في الصف.
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
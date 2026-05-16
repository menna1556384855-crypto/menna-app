import Link from "next/link";

export default function Unit2Page() {
  const lessons = [
    { id: "lesson1", title: "الدرس الأول: التواصل المتزامن (اللحظي)", desc: "افهم آليات الاتصال الحى والدردشة المباشرة التي تتطلب استجابة فورية وحادة في نفس الثانية.", path: "/units/unit2/lesson1" },
    { id: "lesson2", title: "الدرس الثاني: التواصل غير المتزامن (المرن)", desc: "تعرف على قوة التواصل الممتد مثل الفيديوهات التعليمية المسجلة والرسائل التي تمنحك وقتاً للتفكير والتحليل.", path: "/units/unit2/lesson2" },
    { id: "lesson3", title: "الدرس الثالث: ميزان وقاعدة اتخاذ القرار", desc: "جدول ارشادي يعلمك كيف تختار الأداة الرقمية المثالية ونوع الاتصال الأنسب بناءً على الموقف الحياتي والتعليمي.", path: "/units/unit2/lesson3" }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        
        <header className="border-b-4 border-amber-500 pb-6">
          <span className="text-amber-600 font-bold text-lg md:text-xl block mb-2">تصفح المحتوى التعليمي</span>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">الوحدة الثانية: أنواع التواصل الرقمي 📊</h1>
          <p className="text-slate-600 text-lg md:text-xl mt-3 max-w-5xl">
            ندرس هنا الفروق الجوهرية بين استراتيجيات الاتصال عبر الويب. متى نستخدم الأدوات الحية الفورية ومتى نلجأ للرسائل المرنة غير المتزامنة لضمان جودة التعليم والعمل.
          </p>
        </header>

        <div className="space-y-6 w-full">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <div className="text-amber-600 font-bold text-sm">رقم الدرس: 0{index + 1}</div>
                <h2 className="text-2xl font-bold text-slate-900">{lesson.title}</h2>
                <p className="text-slate-600 text-lg max-w-4xl">{lesson.desc}</p>
              </div>
              <Link href={lesson.path} className="w-full md:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-center whitespace-nowrap transition-colors">
                ابدأ الدرس الآن 📖
              </Link>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Link href="/units" className="text-slate-500 hover:text-slate-800 font-bold flex items-center gap-2 text-lg">
            ← العودة إلى خريطة المنهج الرئيسية
          </Link>
        </div>

      </div>
    </div>
  );
}
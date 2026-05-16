import Link from "next/link";

export default function Unit1Page() {
  const lessons = [
    { id: "lesson1", title: "الدرس الأول: تكنولوجيا المعلومات ومكالمات الفيديو", desc: "اكتشف كيف تحول العالم لقرية صغيرة وتعرف على الآداب الرقمية للانضمام لغرف المحاضرات الحية بالصوت والصورة.", path: "/units/unit1/lesson1" },
    { id: "lesson2", title: "الدرس الثاني: البريد الإلكتروني الرسمي", desc: "تعلم الهيكل البرمجي الصحيح لكتابة رسائل رسمية واحترافية لمعلميك والجهات التعليمية دون أخطاء.", path: "/units/unit1/lesson2" },
    { id: "lesson3", title: "الدرس الثالث: درع الحماية والأمان الرقمي", desc: "ابنِ حصنك الافتراضي من خلال تعلم صياغة كلمات مرور قوية جداً وقواعد التعامل الآمن مع الغرباء.", path: "/units/unit1/lesson3" }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        
        {/* هيدر عريض واخد الصفحة كلها */}
        <header className="border-b-4 border-emerald-500 pb-6">
          <span className="text-emerald-600 font-bold text-lg md:text-xl block mb-2">تصفح المحتوى التعليمي</span>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">الوحدة الأولى: أدوات التواصل والأمان الرقمي 🛡️</h1>
          <p className="text-slate-600 text-lg md:text-xl mt-3 max-w-5xl">
            تركز هذه الوحدة على تعريفك بأحدث الأدوات التي نستخدمها للتواصل عبر شبكة الإنترنت العالمية، مع تدريبك على استراتيجيات الحفاظ على سلامة خصوصيتك وبياناتك الشخصية من الاختراق.
          </p>
        </header>

        {/* قائمة الدروس على شكل بطاقات عريضة كاملة المساحة */}
        <div className="space-y-6 w-full">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <div className="text-emerald-600 font-bold text-sm">رقم الدرس: 0{index + 1}</div>
                <h2 className="text-2xl font-bold text-slate-900">{lesson.title}</h2>
                <p className="text-slate-600 text-lg max-w-4xl">{lesson.desc}</p>
              </div>
              <Link href={lesson.path} className="w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center whitespace-nowrap transition-colors">
                ابدأ الدرس الآن 📖
              </Link>
            </div>
          ))}
        </div>

        {/* زر رجوع للفهرس العام */}
        <div className="pt-4">
          <Link href="/units" className="text-slate-500 hover:text-slate-800 font-bold flex items-center gap-2 text-lg">
            ← العودة إلى خريطة المنهج الرئيسية
          </Link>
        </div>

      </div>
    </div>
  );
}
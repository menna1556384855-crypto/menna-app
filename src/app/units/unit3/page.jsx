import Link from "next/link";

export default function Unit3Page() {
  const lessons = [
    { id: "lesson1", title: "الدرس الأول: البصمة الرقمية وأثرك المستمر", desc: "اكتشف الأثر التكنولوجي غير القابل للمحو الذي تتركه خلفك على خوادم الإنترنت وكيفية الحفاظ على سمعتك الرقمية.", path: "/units/unit3/lesson1" },
    { id: "lesson2", title: "الدرس الثاني: كفتي الميزان - الحقوق والالتزامات", desc: "وازن بين حقوقك القانونية في الخصوصية والأمان وبين مسؤولياتك الأخلاقية في احترام الآخرين ومنع القرصنة.", path: "/units/unit3/lesson2" },
    { id: "lesson3", title: "الدرس الثالث: خطة الأمان الفوري والمساعدة", desc: "تعلم الخطوات الأربع الحاسمة للتصرف الذكي وحظر المزعجين عند التعرض لأي تنمر أو مخاطر أثناء الإبحار في الويب.", path: "/units/unit3/lesson3" }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        
        <header className="border-b-4 border-indigo-500 pb-6">
          <span className="text-indigo-600 font-bold text-lg md:text-xl block mb-2">تصفح المحتوى التعليمي</span>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">الوحدة الثالثة: المواطنة الرقمية والمسؤوليات ⚖️</h1>
          <p className="text-slate-600 text-lg md:text-xl mt-3 max-w-5xl">
            هذه هي الوحدة الأخلاقية والقيمية الأهم؛ نهدف من خلالها إلى بناء مواطن رقمي إيجابي ومسؤول يدرك حدود حريته، يحمي نفسه من المخاطر، ويساهم بفعالية في نشر المعرفة النافعة.
          </p>
        </header>

        <div className="space-y-6 w-full">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <div className="text-indigo-600 font-bold text-sm">رقم الدرس: 0{index + 1}</div>
                <h2 className="text-2xl font-bold text-slate-900">{lesson.title}</h2>
                <p className="text-slate-600 text-lg max-w-4xl">{lesson.desc}</p>
              </div>
              <Link href={lesson.path} className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-center whitespace-nowrap transition-colors">
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
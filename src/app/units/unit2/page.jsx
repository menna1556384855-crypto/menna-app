import Link from 'next/link';

export default function Unit2Page() {
  const lessons = [
    { id: 1, title: "التواصل المتزامن", color: "border-green-500", bg: "hover:bg-green-50" },
    { id: 2, title: "التواصل غير المتزامن", color: "border-orange-500", bg: "hover:bg-orange-50" },
    { id: 3, title: "اختيار الأداة المناسبة", color: "border-blue-500", bg: "hover:bg-blue-50" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">الوحدة الثانية: أنواع التواصل</h1>
        <p className="text-slate-500 italic">تعلم الفرق بين التواصل الفوري والآجل</p>
      </header>

      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/units/unit2/lesson${lesson.id}`}
                className={`flex items-center p-6 bg-white border-r-8 ${lesson.color} rounded-2xl shadow-sm transition-all transform hover:-translate-x-2 ${lesson.bg} group`}>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-800">الدرس {lesson.id}: {lesson.title}</h2>
              <p className="text-slate-500 text-sm mt-1 text-slate-50">اضغط لقراءة محتوى الدرس[cite: 1]</p>
            </div>
            <span className="text-slate-300 group-hover:text-slate-600">←</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
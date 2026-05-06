import Link from 'next/link';

export default function Unit3Page() {
  const lessons = [
    { id: 1, title: "أدوات التعلم الرقمي", color: "border-purple-500" },
    { id: 2, title: "المنصات التعليمية", color: "border-teal-500" },
    { id: 3, title: "التقييم الإلكتروني", color: "border-red-500" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">الوحدة الثالثة: التكنولوجيا في التعليم</h1>
      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/units/unit3/lesson${lesson.id}`}
                className={`p-6 bg-white border-r-8 ${lesson.color} rounded-2xl shadow-sm hover:scale-105 transition-transform flex justify-between items-center`}>
            <span className="text-xl font-bold text-slate-800">الدرس {lesson.id}: {lesson.title}</span>
            <span className="text-slate-400">←</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
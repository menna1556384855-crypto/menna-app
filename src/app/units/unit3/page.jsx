import Link from 'next/link';

export default function UnitThree() {
  const lessons = [
    { id: 1, title: "البصمة الرقمية (أثرك على الإنترنت)" },
    { id: 2, title: "الحقوق والمسؤوليات الرقمية" },
    { id: 3, title: "كيفية التعامل مع المشكلات" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">دروس الوحدة الثالثة</h1>
      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/units/unit3/lesson${lesson.id}`} 
                className="group p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-purple-500 transition-all flex justify-between items-center shadow-sm">
            <span className="text-slate-400 font-bold">الدرس {lesson.id}</span>
            <span className="text-xl font-bold group-hover:text-purple-600">{lesson.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function UnitOne() {
  const lessons = [
    { id: 1, title: "المقدمة (العالم قرية صغيرة)" },
    { id: 2, title: "البريد الإلكتروني (العنوان والموضوع)" },
    { id: 3, title: "الأمان الرقمي (كلمات المرور)" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">دروس الوحدة الأولى</h1>
      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/units/unit1/lesson${lesson.id}`} 
                className="group p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-500 transition-all flex justify-between items-center shadow-sm">
            <span className="text-slate-400 font-bold">الدرس {lesson.id}</span>
            <span className="text-xl font-bold group-hover:text-blue-600">{lesson.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function Unit2Page() {
  const lessons = [
    { id: 1, title: "التواصل المتزامن", color: "border-green-500" },
    { id: 2, title: "التواصل غير المتزامن", color: "border-orange-500" },
    { id: 3, title: "اختيار الأداة المناسبة", color: "border-blue-500" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold mb-8">دروس الوحدة الثانية: أنواع التواصل[cite: 1]</h1>
      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/units/unit2/lesson${lesson.id}`} 
                className={`p-6 bg-white border-r-8 ${lesson.color} rounded-xl shadow-sm hover:scale-101 transition-transform flex justify-between items-center`}>
            <span className="text-xl font-bold">الدرس {lesson.id}: {lesson.title}</span>
            <span className="text-slate-400">قراءة الدرس ←</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
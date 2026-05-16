import Link from "next/link";

export default function UnitsPage() {
  const unitsData = [
    {
      id: "unit1",
      title: "الوحدة الأولى: أدوات التواصل والأمان الرقمي",
      desc: "اكتشف كيف تحول العالم لقرية صغيرة، وتعلّم أسرار البريد الإلكتروني وحماية بياناتك من المخاطر الرقمية.",
      cardStyle: "border-r-8 border-emerald-500 bg-white",
      btnStyle: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs shadow-emerald-600/20",
      headerImage: "/images/1.jpg", 
      lessons: [
        { name: "الدرس الأول: تكنولوجيا المعلومات ومكالمات الفيديو" },
        { name: "الدرس الثاني: البريد الإلكتروني الرسمي" },
        { name: "الدرس الثالث: درع الحماية والأمان الرقمي" },
      ]
    },
    {
      id: "unit2",
      title: "الوحدة الثانية: أنواع التواصل الرقمي",
      desc: "افهم الفروق الجوهرية بين أدوات الاتصال الفورية الحية والرسائل المرنة، وقواعد اتخاذ القرار للمواقف المختلفة.",
      cardStyle: "border-r-8 border-amber-500 bg-white",
      btnStyle: "bg-amber-600 hover:bg-amber-700 text-white shadow-xs shadow-amber-600/20",
      headerImage: "/images/2.jpg",
      lessons: [
        { name: "الدرس الأول: التواصل المتزامن (اللحظي)" },
        { name: "الدرس الثاني: التواصل غير المتزامن (المرن)" },
        { name: "الدرس الثالث: ميزان وقاعدة اتخاذ القرار" },
      ]
    },
    {
      id: "unit3",
      title: "الوحدة الثالثة: المواطنة الرقمية والمسؤوليات",
      desc: "تعرّف على مفهوم البصمة الرقمية وازن بين حقوقك القانونية على الإنترنت والتزاماتك الأخلاقية تجاه الآخرين.",
      cardStyle: "border-r-8 border-indigo-500 bg-white",
      btnStyle: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs shadow-indigo-600/20",
      headerImage: "/images/3.jpg",
      lessons: [
        { name: "الدرس الأول: البصمة الرقمية وأثرك المستمر" },
        { name: "الدرس الثاني: كفتي الميزان - الحقوق والالتزامات" },
        { name: "الدرس الثالث: خطة الأمان الفوري والمساعدة" },
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-10">
        
        <header className="border-b-4 border-slate-900 pb-6">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">🗺️ خريطة المنهج والوحدات التعليمية</h1>
          <p className="text-slate-600 text-lg md:text-xl mt-2">اختر الوحدة التعليمية لتصفح دروسها وأنشطتها التفاعلية.</p>
        </header>

        {/* شبكة الكروت كاملة العرض */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-full">
          {unitsData.map((unit) => (
            <div 
              key={unit.id} 
              className={`rounded-3xl border border-y-slate-200 border-l-slate-200 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md ${unit.cardStyle}`}
            >
              <div>
                {/* تم تعديل الديف هنا ليعمل كخلفية بديلة لطيفة (Fallback) في حال عدم وجود الصورة */}
                <div className="w-full h-48 overflow-hidden bg-slate-200 relative">
                  <img 
                    src={unit.headerImage} 
                    alt={unit.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">{unit.title}</h2>
                  <p className="text-slate-500 text-base leading-relaxed text-justify">{unit.desc}</p>
                  
                  <div className="pt-2 space-y-2.5">
                    <div className="text-sm font-bold text-slate-400 mb-1">الدروس المتضمنة:</div>
                    {unit.lessons.map((lesson, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 font-medium text-slate-700 text-sm md:text-base">
                        {idx + 1}. {lesson.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <Link 
                  href={`/units/${unit.id}`} 
                  className={`w-full block text-center py-4 font-extrabold text-lg rounded-xl transition-all hover:translate-y-[-2px] active:translate-y-0 ${unit.btnStyle}`}
                >
                  تصفح دروس الوحدة الآن 🚀
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
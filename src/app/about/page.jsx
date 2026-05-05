export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">بطاقة وصف السيناريو</h1>
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
        <div>
          <h2 className="font-bold text-xl text-slate-900">المجال التعليمي</h2>
          <p className="text-slate-600">مادة تكنولوجيا المعلومات والاتصالات ICT[cite: 1]</p>
        </div>
        <div>
          <h2 className="font-bold text-xl text-slate-900">الفئة المستهدفة</h2>
          <p className="text-slate-600">طالب نظامي[cite: 1]</p>
        </div>
        <div>
          <h2 className="font-bold text-xl text-slate-900">الاستراتيجية التعليمية</h2>
          <p className="text-slate-600">التعلم القائم على النشاط والمحاكاة[cite: 1]</p>
        </div>
        <div className="pt-4 border-t border-slate-100">
          <h2 className="font-bold text-xl text-slate-900">وصف الفكرة</h2>
          <p className="text-slate-600 leading-relaxed">
            تهدف هذه المادة العلمية إلى تعريف الطلاب بالأدوات التي نستخدمها للتواصل عبر الإنترنت، 
            مثل البريد الإلكتروني ومكالمات الفيديو، مع التركيز على الاستخدام الآمن والأخلاقي لهذه الأدوات[cite: 1].
          </p>
        </div>
      </div>
    </div>
  );
}
export default function LessonTwo() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <div className="mb-6 flex items-center gap-4">
        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-bold">الدرس 2</span>
        <h1 className="text-3xl font-bold">التواصل غير المتزامن</h1>
      </div>
      
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-orange-600 mb-4">ما هو التواصل غير المتزامن؟</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          هو تواصل لا يتطلب وجود الطرفين في نفس الوقت، حيث يمكن للمستلم قراءة الرسالة والرد عليها في وقت لاحق[cite: 1].
        </p>
        
        <h3 className="font-bold mb-3">أمثلة عليه:</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>البريد الإلكتروني (Email)[cite: 1].</li>
          <li>الرسائل الصوتية أو الفيديو المسجلة[cite: 1].</li>
        </ul>
      </div>
    </div>
  );
}
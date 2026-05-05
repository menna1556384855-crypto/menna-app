export default function AsynchronousLesson() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">التواصل غير المتزامن</h1>
      <div className="bg-purple-50 p-6 rounded-lg mb-8 border-r-8 border-purple-400">
        <p>مثل البريد الإلكتروني أو الرسائل المسجلة حيث يمكن للمستلم قراءتها والرد عليها في وقت لاحق[cite: 1].</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-slate-50">
          <h3 className="font-bold text-lg">أمثلة الاستخدام[cite: 1]</h3>
          <ul className="list-disc list-inside mt-2">
            <li>التقارير الطويلة</li>
            <li>الأمور التي لا تحتاج سرعة</li>
            <li>إدارة المهام ووصف المنتجات</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
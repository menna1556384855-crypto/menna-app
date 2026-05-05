import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-xl font-bold text-blue-600">أدوات التواصل الرقمي</h1>
          <div className="space-x-4 space-x-reverse">
            <a href="/" className="hover:text-blue-500">الرئيسية</a>
            <a href="/units" className="hover:text-blue-500">الوحدات الدراسية</a>
            <a href="/about" className="hover:text-blue-500">عن المشروع</a>
          </div>
        </nav>
        <main className="min-h-screen p-8">{children}</main>
        <footer className="bg-slate-800 text-white p-6 text-center">
          <p>جامعة عين شمس - كلية التربية النوعية - 2026/2025</p>
        </footer>
      </body>
    </html>
  );
}
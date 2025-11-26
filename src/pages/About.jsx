import Header from "../components/Header";

export default function About() {
  const technologies = [
    { name: "React JS", type: "Frontend Framework", icon: "⚛️" },
    { name: "Tailwind CSS", type: "Styling", icon: "🎨" },
    { name: "Vite", type: "Build Tool", icon: "⚡" },
    { name: "React Router", type: "Routing", icon: "🛣️" },
    { name: "Local Storage", type: "Data Persistence", icon: "💾" },
  ];

  const features = [
    {
      icon: "🔧",
      title: "CRUD Operations",
      description: "Create, Read, Update, Delete tugas dengan mudah dan intuitif"
    },
    {
      icon: "🔍",
      title: "Search & Filter",
      description: "Cari dan filter tugas berdasarkan status, judul, atau deskripsi"
    },
    {
      icon: "💾",
      title: "Local Storage",
      description: "Data tersimpan otomatis di perangkat Anda, aman dan privat"
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Tampilan optimal di semua perangkat - mobile, tablet, desktop"
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Loading cepat dan responsif berkat teknologi modern"
    },
    {
      icon: "🎯",
      title: "Productivity Focus",
      description: "Interface yang dirancang untuk meningkatkan produktivitas"
    }
  ];

  const targetUsers = [
    {
      icon: "👨‍🎓",
      title: "Mahasiswa",
      description: "Kelola tugas akademik dan deadline kuliah"
    },
    {
      icon: "💼",
      title: "Profesional",
      description: "Atur project kerja dan meeting penting"
    },
    {
      icon: "🎒",
      title: "Pelajar",
      description: "Jadwal belajar dan tugas sekolah yang terorganisir"
    },
    {
      icon: "🏠",
      title: "Personal Use",
      description: "Kelola aktivitas harian dan tujuan pribadi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4">
              FocusFlow
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Aplikasi To-Do List modern yang membantu Anda mengelola tugas dengan lebih efektif dan produktif
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Modern Design
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                ⚡ Fast Performance
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                📱 Responsive
              </span>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              📖 Tentang Aplikasi
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Apa itu FocusFlow?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  FocusFlow adalah aplikasi manajemen tugas berbasis web yang dirancang dengan 
                  pendekatan modern dan minimalis. Aplikasi ini membantu Anda mengorganisir 
                  kehidupan sehari-hari dengan antarmuka yang bersih dan mudah digunakan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dibangun dengan teknologi terbaru, FocusFlow menawarkan pengalaman pengguna 
                  yang smooth dan responsif di semua perangkat.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Keunggulan</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Tanpa iklan dan gratis selamanya</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Privasi terjamin - data tersimpan lokal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Tanpa registrasi, langsung pakai</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Update otomatis dengan teknologi modern</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🚀 Fitur Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Users */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            👥 Untuk Siapa FocusFlow?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetUsers.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{user.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {user.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {user.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ⚙️ Teknologi yang Digunakan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-2xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {tech.type}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Siap Menjadi Lebih Produktif?</h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Mulai gunakan FocusFlow sekarang dan rasakan kemudahan dalam mengelola tugas sehari-hari
            </p>
            <a
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              🚀 Mulai Sekarang
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FF</span>
            </div>
            <span className="text-xl font-bold">FocusFlow</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 FocusFlow. Dibuat dengan ❤️ untuk meningkatkan produktivitas Anda.
          </p>
        </div>
      </footer>
    </div>
  );
}
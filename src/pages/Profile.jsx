import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Profile() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("focusflow_tasks");
    setTasks(saved ? JSON.parse(saved) : []);
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 text-center mb-10">
          <div className="flex flex-col items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-lg flex items-center justify-center">
                <span className="text-5xl">👤</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Nama User
            </h1>
            <p className="text-gray-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online & Ready to Focus
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60">
            <p className="text-gray-600 text-sm font-semibold mb-1">
              Total Tugas
            </p>
            <h3 className="text-4xl font-bold text-blue-600">{total}</h3>
            <p className="text-sm text-gray-500 mt-1">Semua tugas tersimpan</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60">
            <p className="text-gray-600 text-sm font-semibold mb-1">
              Tugas Aktif
            </p>
            <h3 className="text-4xl font-bold text-green-600">{active}</h3>
            <p className="text-sm text-gray-500 mt-1">Belum diselesaikan</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60">
            <p className="text-gray-600 text-sm font-semibold mb-1">
              Tuntas
            </p>
            <h3 className="text-4xl font-bold text-purple-600">{completed}</h3>
            <p className="text-sm text-gray-500 mt-1">Sudah selesai</p>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            📈 Progress Belajar & Produktivitas
          </h2>

          <div className="flex items-center gap-4">
            <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-lg font-bold text-gray-700">{progress}%</span>
          </div>

          <p className="text-sm text-gray-600 mt-3">
            {progress === 0
              ? "Belum ada progres, yuk mulai selesaikan tugas!"
              : progress < 50
              ? "Progres lumayan, terus tingkatkan!"
              : progress < 100
              ? "Hampir selesai, semangat!"
              : "Hebat! Semua tugas tuntas 🎉"}
          </p>
        </div>
      </main>
    </div>
  );
}

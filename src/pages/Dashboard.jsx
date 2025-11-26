import { useState, useEffect } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("focusflow_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    localStorage.setItem("focusflow_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
    };
    setTasks([...tasks, taskWithId]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleClearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Filter and search tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (task.description &&
        task.description.toLowerCase().includes(searchTerm.toLowerCase()));

    if (filter === "active") return matchesSearch && !task.completed;
    if (filter === "completed") return matchesSearch && task.completed;
    return matchesSearch;
  });

  // Sort tasks
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "newest")
      return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "oldest")
      return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
    return 0;
  });

  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;
  const progressPercentage =
    tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // 🔥 YANG DIUBAH: Format deadline dengan tanggal dan waktu
  const formatDeadline = (deadlineString) => {
    if (!deadlineString) return "";

    try {
      // Jika deadline berupa string "YYYY-MM-DD HH:MM"
      if (deadlineString.includes(" ")) {
        const [datePart, timePart] = deadlineString.split(" ");
        const [year, month, day] = datePart.split("-");
        const date = new Date(year, month - 1, day);

        const formattedDate = date.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });

        return `${formattedDate} ${timePart}`;
      }

      // Jika hanya tanggal saja
      const date = new Date(deadlineString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
      }

      return deadlineString;
    } catch (error) {
      return deadlineString;
    }
  };

  // Fixed filter button styles
  const getFilterButtonClass = (filterType) => {
    const baseClass = "px-4 py-2 rounded-xl font-medium transition-all";

    if (filter === filterType) {
      switch (filterType) {
        case "all":
          return `${baseClass} bg-blue-600 text-white shadow-lg`;
        case "active":
          return `${baseClass} bg-green-600 text-white shadow-lg`;
        case "completed":
          return `${baseClass} bg-purple-600 text-white shadow-lg`;
        default:
          return `${baseClass} bg-gray-600 text-white`;
      }
    } else {
      return `${baseClass} bg-white/50 text-gray-700 hover:bg-white/80 border border-gray-300/50`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Selamat Datang di FocusFlow
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kelola tugas harian Anda dengan antarmuka yang modern dan intuitif
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-2">
                  Total Tugas
                </p>
                <h3 className="text-3xl font-bold text-gray-800">
                  {tasks.length}
                </h3>
                <p className="text-xs text-gray-500 mt-1">Semua tugas</p>
              </div>
              <div className="text-3xl text-blue-500 group-hover:scale-110 transition-transform">
                📋
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-2">
                  Tugas Aktif
                </p>
                <h3 className="text-3xl font-bold text-green-600">
                  {activeCount}
                </h3>
                <p className="text-xs text-gray-500 mt-1">Perlu diselesaikan</p>
              </div>
              <div className="text-3xl text-green-500 group-hover:scale-110 transition-transform">
                ⏳
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-2">
                  Tuntas
                </p>
                <h3 className="text-3xl font-bold text-purple-600">
                  {completedCount}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Berhasil diselesaikan
                </p>
              </div>
              <div className="text-3xl text-purple-500 group-hover:scale-110 transition-transform">
                ✅
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-600 text-sm font-semibold mb-2">
                  Progress
                </p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <p className="text-xs text-gray-500">Tingkat penyelesaian</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Form and Controls */}
          <div className="xl:col-span-1 space-y-6">
            {/* Task Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Tambah Tugas Baru
              </h2>
              <TaskForm onAddTask={handleAddTask} />
            </div>

            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={handleClearCompleted}
                  disabled={completedCount === 0}
                  className="w-full flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-red-700 font-medium">
                    Hapus Tugas Selesai
                  </span>
                  <span className="text-red-500">🗑️</span>
                </button>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSortBy("newest")}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      sortBy === "newest"
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Terbaru
                  </button>
                  <button
                    onClick={() => setSortBy("oldest")}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      sortBy === "oldest"
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Terlama
                  </button>
                  <button
                    onClick={() => setSortBy("alphabetical")}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      sortBy === "alphabetical"
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    A-Z
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tasks List */}
          <div className="xl:col-span-2">
            {/* Search and Filter Bar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 mb-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cari tugas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-10 bg-white/50 border border-gray-300/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="absolute left-3 top-3 text-gray-400">
                      🔍
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap justify-center">
                  <button
                    onClick={() => setFilter("all")}
                    className={getFilterButtonClass("all")}
                  >
                    Semua
                  </button>
                  <button
                    onClick={() => setFilter("active")}
                    className={getFilterButtonClass("active")}
                  >
                    Aktif
                  </button>
                  <button
                    onClick={() => setFilter("completed")}
                    className={getFilterButtonClass("completed")}
                  >
                    Selesai
                  </button>
                </div>
              </div>
            </div>

            {/* Tasks List */}
            {sortedTasks.length === 0 ? (
              <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {searchTerm || filter !== "all"
                    ? "Tidak ada tugas yang cocok"
                    : "Belum Ada Tugas"}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  {searchTerm || filter !== "all"
                    ? "Coba ubah pencarian atau filter Anda"
                    : "Mulai dengan menambahkan tugas pertama Anda sekarang!"}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    Daftar Tugas
                    {filter !== "all" && (
                      <span className="text-lg font-normal text-gray-500 ml-2">
                        ({filter === "active" ? "Aktif" : "Selesai"})
                      </span>
                    )}
                  </h2>
                  <span className="text-sm text-gray-500 bg-white/50 px-3 py-1 rounded-full border border-gray-300/50">
                    {sortedTasks.length} tugas
                  </span>
                </div>

                <div className="space-y-4">
                  {sortedTasks.map((task) => (
                    <div
                      key={task.id}
                      className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl ${
                        task.completed
                          ? "border-green-200/50 bg-green-50/30"
                          : "border-gray-200/50 hover:border-blue-300/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <button
                            onClick={() => handleToggleComplete(task.id)}
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 transition-all ${
                              task.completed
                                ? "bg-green-500 border-green-500 text-white"
                                : "border-gray-300 hover:border-green-500"
                            }`}
                          >
                            {task.completed && "✓"}
                          </button>

                          <div className="flex-1">
                            <h4
                              className={`text-lg font-semibold mb-2 ${
                                task.completed
                                  ? "line-through text-gray-500"
                                  : "text-gray-900"
                              }`}
                            >
                              {task.title}
                            </h4>
                            {task.description && (
                              <p className="text-gray-600 leading-relaxed mb-3">
                                {task.description}
                              </p>
                            )}
                            <div className="flex gap-2 text-sm text-gray-500 flex-wrap">
                              <span className="flex items-center gap-1 bg-gray-100/50 px-2 py-1 rounded-lg">
                                <span>📅</span>
                                {formatDate(task.createdAt)}
                              </span>
                              {/* 🔥 YANG DIUBAH: Panggil formatDeadline di sini */}
                              {task.deadline && (
                                <span className="flex items-center gap-1 bg-blue-100/50 px-2 py-1 rounded-lg text-blue-700">
                                  <span>⏰</span>
                                  {formatDeadline(task.deadline)}
                                </span>
                              )}
                              {task.completed && (
                                <span className="flex items-center gap-1 bg-green-100/50 px-2 py-1 rounded-lg text-green-700">
                                  <span>✅</span>
                                  Selesai
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => handleToggleComplete(task.id)}
                            className={`px-3 py-2 rounded-lg font-semibold transition-all ${
                              task.completed
                                ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                          >
                            {task.completed ? "↩️" : "✅"}
                          </button>
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="px-3 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Judul tugas tidak boleh kosong");
      return;
    }

    // Gabungkan tanggal dan waktu
    let fullDeadline = "";
    if (deadline) {
      if (deadlineTime) {
        fullDeadline = `${deadline} ${deadlineTime}`;
      } else {
        fullDeadline = deadline;
      }
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      deadline: fullDeadline,
      completed: false,
      createdAt: new Date().toISOString(), // Simpan sebagai ISO string
    };

    onAddTask(newTask);

    // Reset form
    setTitle("");
    setDescription("");
    setDeadline("");
    setDeadlineTime("");
    setShowForm(false);
  };

  return (
    <div className="mb-8">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          ➕ Tambah Tugas Baru
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🚀 Buat Tugas Baru
          </h2>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              Judul Tugas <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Selesaikan laporan proyek..."
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              Deskripsi (Opsional)
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tambahkan detail tugas Anda di sini..."
              rows="4"
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="deadline"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                📅 Tanggal Deadline (Opsional)
              </label>
              <input
                type="date"
                id="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="deadlineTime"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                ⏰ Waktu Deadline (Opsional)
              </label>
              <input
                type="time"
                id="deadlineTime"
                value={deadlineTime}
                onChange={(e) => setDeadlineTime(e.target.value)}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ✅ Simpan Tugas
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setTitle("");
                setDescription("");
                setDeadline("");
                setDeadlineTime("");
              }}
              className="flex-1 py-3 px-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              ❌ Batal
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: "📊",
      description: "Kelola tugas",
    },
    {
      name: "Tentang",
      path: "/about",
      icon: "📚",
      description: "Tentang aplikasi",
    },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-sm">FF</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                FocusFlow
              </h1>
              <p className="text-xs text-gray-500 -mt-1 hidden sm:block">
                Productivity Manager
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100/80 rounded-2xl p-1.5 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 min-w-[120px] justify-center
                  ${
                    isActive(item.path)
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/80"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>

                {/* Active indicator pulse */}
                {isActive(item.path) && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Current page indicator for mobile */}
            <div className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
              {navItems.find((item) => isActive(item.path))?.name}
            </div>

            <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-600">
              <span className="text-lg">☰</span>
            </button>
          </div>

          {/* Additional Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Stats Badge */}
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Online</span>
            </div>

            {/* Theme Toggle Placeholder */}
            <button className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-600">
              <span className="text-lg">🌙</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 p-3 rounded-xl transition-all duration-300
                  ${
                    isActive(item.path)
                      ? "bg-blue-50 border border-blue-200 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">{item.name}</span>
                  <span className="text-xs text-gray-500">
                    {item.description}
                  </span>
                </div>
                {isActive(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

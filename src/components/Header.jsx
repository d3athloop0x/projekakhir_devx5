import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", path: "/", emoji: "📊" },
    { name: "Tentang", path: "/about", emoji: "📚" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm sticky top-0 z-50">
      <div className="w-full max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Pilihan 1: Modern Gradient dengan Icon */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden">
              {/* Main Logo Container */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {/* Icon/Shape */}
                <div className="relative">
                  {/* Main F shape */}
                  <div className="w-6 h-2 bg-white rounded-full mb-1 transform group-hover:translate-x-1 transition-transform"></div>
                  <div className="w-4 h-2 bg-white rounded-full mb-1"></div>
                  <div className="w-6 h-2 bg-white rounded-full transform group-hover:translate-x-1 transition-transform"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                </div>
                
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              
              {/* Outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-md opacity-30 group-hover:opacity-50 group-hover:blur-lg transition-all duration-500"></div>
              
              {/* Pulsing dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
            </div>
            
            {/* Text */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                FocusFlow
              </h1>
              <p className="text-xs text-gray-500 -mt-1 hidden sm:block group-hover:text-blue-500 transition-colors">
                Streamline Your Tasks
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                    ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                    }
                  `}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="font-semibold">{item.name}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-blue-500 shadow-sm"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User/Action Area */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-inner flex items-center justify-center text-gray-600 hover:text-gray-800 group">
              <span className="text-lg group-hover:scale-110 transition-transform">🌙</span>
            </button>

            {/* Profile/Status */}
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-gray-200/60">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">👤</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-sm font-semibold text-gray-900">Welcome!</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Ready to focus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden border-t border-gray-200/60 bg-white/95 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all flex-1 mx-1
                    ${
                      isActive
                        ? "text-blue-600 bg-blue-50/80 shadow-inner"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50/50"
                    }
                  `}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-xs font-semibold">{item.name}</span>
                  {isActive && (
                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-1"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
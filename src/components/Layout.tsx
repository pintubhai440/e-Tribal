import React, { useContext } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AuthContext, VillageContext } from '../App';
import { signInWithGoogle, logOut } from '../firebase';
import { Home, BookOpen, Activity, ShoppingBag, Bot, LogIn, LogOut, Menu, X, Shield, UserPlus, MapPin } from 'lucide-react';

export default function Layout() {
  const { user } = useContext(AuthContext);
  const { village, setVillage } = useContext(VillageContext);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Register', path: '/register', icon: UserPlus },
    { name: 'Learning', path: '/learning', icon: BookOpen },
    { name: 'Health', path: '/health', icon: Activity },
    { name: 'Market', path: '/commerce', icon: ShoppingBag },
    { name: 'AI Assistant', path: '/ai', icon: Bot },
    { name: 'Admin', path: '/admin', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-emerald-800 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between min-h-[4rem] py-2 items-center gap-y-2">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 notranslate">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="font-bold text-xl">eT</span>
                </div>
                <span className="font-semibold text-xl tracking-tight">e-Tribal Andhra</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'bg-emerald-900 text-white' : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Translate, Auth, Mobile Menu */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-emerald-900/50 px-3 py-1.5 rounded-md">
                <MapPin size={16} className="text-emerald-200" />
                <select 
                  value={village} 
                  onChange={(e) => setVillage(e.target.value)}
                  className="bg-transparent text-sm text-white border-none focus:ring-0 cursor-pointer outline-none"
                >
                  <option value="All" className="text-stone-900">All Villages</option>
                  <option value="Kondakarakam" className="text-stone-900">Kondakarakam</option>
                  <option value="Patha Rega" className="text-stone-900">Patha Rega</option>
                </select>
              </div>

              <div id="google_translate_element" className="translate-container"></div>
              
              {/* Auth Button (Desktop) */}
              <div className="hidden md:flex items-center gap-4">
                {user ? (
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-emerald-200">
                      <span className="block truncate max-w-[150px] notranslate">{user.displayName || user.phoneNumber || 'User'}</span>
                    </div>
                    <button
                      onClick={logOut}
                      className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-1 bg-white text-emerald-800 hover:bg-emerald-50 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
                  >
                    <LogIn size={16} />
                    <span>Sign In</span>
                  </Link>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-emerald-100 hover:text-white focus:outline-none"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-emerald-800 border-t border-emerald-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex items-center gap-2 bg-emerald-900/50 px-3 py-2 rounded-md mb-2">
                <MapPin size={18} className="text-emerald-200" />
                <select 
                  value={village} 
                  onChange={(e) => setVillage(e.target.value)}
                  className="bg-transparent text-base text-white border-none focus:ring-0 cursor-pointer outline-none w-full"
                >
                  <option value="All" className="text-stone-900">All Villages</option>
                  <option value="Kondakarakam" className="text-stone-900">Kondakarakam</option>
                  <option value="Patha Rega" className="text-stone-900">Patha Rega</option>
                </select>
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium ${
                      isActive ? 'bg-emerald-900 text-white' : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="pt-4 pb-2 border-t border-emerald-700">
                {user ? (
                  <div className="flex items-center justify-between px-3">
                    <span className="text-sm text-emerald-200 truncate notranslate">{user.displayName || user.phoneNumber || 'User'}</span>
                    <button
                      onClick={() => { logOut(); setIsMobileMenuOpen(false); }}
                      className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 bg-white text-emerald-800 hover:bg-emerald-50 px-4 py-3 rounded-md text-base font-medium shadow-sm"
                  >
                    <LogIn size={20} />
                    <span>Sign In</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm">
        <p>© 2026 <span className="notranslate">e-Tribal Andhra</span>. Empowering Kondakarakam and Patha Rega Villages.</p>
      </footer>
    </div>
  );
}

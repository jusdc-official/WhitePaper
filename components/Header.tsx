import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <header className="sticky top-0 z-20 bg-slate-900/50 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
             <BookOpen className="w-8 h-8 text-cyan-400" />
            <div>
              <h1 className="text-xl font-bold text-slate-100">JUSDC Ecosystem Whitepaper</h1>
              <p className="text-xs text-slate-400">Version 1.0 | July 2025</p>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={onToggleSidebar}
              className="p-2 text-slate-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={isSidebarOpen}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
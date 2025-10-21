import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import type { WhitepaperSection } from '../types';

interface SidebarProps {
  sections: WhitepaperSection[];
  activeSection: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, onNavigate, isOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase().trim();
    if (!lowercasedTerm) return sections;
    return sections.filter(section =>
      section.title.toLowerCase().includes(lowercasedTerm)
    );
  }, [sections, searchTerm]);

  const handleNavigation = (id: string) => {
    onNavigate(id);
    setSearchTerm(''); // Clear search after navigation
  };

  return (
    <aside className={`fixed top-0 left-0 h-full w-72 xl:w-80 bg-slate-950/60 backdrop-blur-xl border-r border-slate-800 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3" aria-hidden="true">
              <Search className="w-5 h-5 text-slate-500" />
            </span>
            <input
              type="search"
              placeholder="Search sections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/60 border border-slate-700 rounded-md py-2 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Search sections"
            />
        </div>
        
        <h2 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-3 px-3">Table of Contents</h2>
        
        <nav className="flex-1 overflow-y-auto -mr-3 pr-3">
          {filteredSections.length > 0 ? (
            <ul className="space-y-1">
              {filteredSections.map(section => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(section.id);
                    }}
                    className={`block text-sm py-2 px-3 rounded-md transition-all duration-200 ease-in-out transform hover:bg-slate-800/50 hover:translate-x-1 ${
                      activeSection === section.id && !searchTerm
                        ? 'bg-cyan-900/40 text-cyan-300 font-semibold border-l-2 border-cyan-400 pl-4'
                        : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    {section.title.split('. ').slice(1).join('. ')}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500 text-sm text-center py-6">No results found.</p>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

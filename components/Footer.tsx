import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500">
      <p>
        For the latest documentation and updates, please visit the official website.
      </p>
      <a
        href="https://jusdc.io"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
      >
        <span>https://jusdc.io</span>
        <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
      </a>
      <p className="mt-8 text-xs">&copy; 2025 JUSDC Ecosystem. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

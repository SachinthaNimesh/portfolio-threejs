import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>© 2025 — Designed & Developed by</span>
            <span className="text-cyan-400">Sachintha Dissanayaka</span>
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-cyan-400 fill-cyan-400" /> using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}

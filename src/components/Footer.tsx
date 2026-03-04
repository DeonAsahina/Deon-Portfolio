import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-2xl font-display font-bold text-gradient">Deon.</span>
            <p className="mt-2 text-zinc-500 text-sm">
              © {new Date().getFullYear()} Deon. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://discord.com/users/737946187830919218" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

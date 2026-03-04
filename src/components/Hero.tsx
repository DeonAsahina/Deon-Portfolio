import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-[128px] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase glass rounded-full">
            Available for new projects
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight">
            Trying to <br />
            <span className="text-gradient">be better.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            Hi, I’m Deon — a Mobile Bot Developer & Graphic Designer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
              View My Work
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

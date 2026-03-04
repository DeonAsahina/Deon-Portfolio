import { motion } from 'motion/react';
import { MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Get in Touch</h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.a 
              href="https://discord.com/users/(YOU DISCORD ID)"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-8 glass rounded-2xl flex flex-col items-center hover:bg-white/10 transition-colors"
            >
              <div className="p-3 glass rounded-xl text-primary mb-4">
                <MessageCircle size={24} />
              </div>
              <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold mb-1">Discord</p>
              <p className="text-lg">deonhere.</p>
            </motion.a>
            <div className="p-8 glass rounded-2xl flex flex-col items-center">
              <div className="p-3 glass rounded-xl text-primary mb-4">
                <MapPin size={24} />
              </div>
              <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold mb-1">Location</p>
              <p className="text-lg">Manado, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

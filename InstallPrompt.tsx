import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X } from 'lucide-react';

export default function InstallPrompt() {
  const [showBanner, setShowBanner] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const handler = () => {
      setIsInstallable(true);
      // Show banner after 10 seconds
      setTimeout(() => setShowBanner(true), 10000);
    };

    window.addEventListener('pwa-installable', handler);
    return () => window.removeEventListener('pwa-installable', handler);
  }, []);

  const handleInstall = () => {
    window.dispatchEvent(new Event('pwa-install-trigger'));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-[200] mx-auto max-w-sm"
        >
          <div className="bg-indigo-600 rounded-[28px] p-5 flex items-center gap-4 shadow-2xl shadow-indigo-500/40 border border-indigo-400/30">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div className="flex-grow">
              <p className="text-white font-black text-sm">Install Moments</p>
              <p className="text-indigo-200 text-[11px] font-medium">Add to home screen — works like an app!</p>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={handleInstall} className="px-4 py-2 bg-white text-indigo-600 rounded-xl text-[11px] font-black hover:bg-slate-100">
                Install
              </button>
              <button onClick={() => setShowBanner(false)} className="px-4 py-1 text-indigo-200 text-[11px] font-bold text-center">
                Later
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919920909700"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.8, y: 14 }}
    animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
    transition={{
      opacity: { duration: 0.4, delay: 0.2 },
      scale: { duration: 0.4, delay: 0.2 },
      y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
    }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success shadow-lg transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <span className="animate-pulse-ring absolute inset-0 rounded-full border-2 border-emerald-300/70" />
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;

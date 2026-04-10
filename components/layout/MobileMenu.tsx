import { motion } from "framer-motion";

const menuVars = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0] as never,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as never,
    },
  },
};

const containerVars = {
  initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
  animate: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
};

const mobileLinkVars = {
  initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as never } },
  animate: { y: 0, transition: { ease: [0, 0.55, 0.45, 1] as never, duration: 0.7 } },
};

// @ts-expect-error simple types
export function MobileMenu({ links, onClose }) {
  return (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl origin-top flex flex-col justify-center items-center px-6"
    >
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        exit="initial"
        className="flex flex-col items-center gap-8"
      >
        {links.map((link: any, i: number) => (
          <div key={i} className="overflow-hidden">
            <motion.a
              variants={mobileLinkVars}
              href={link.href}
              onClick={onClose}
              className="text-4xl sm:text-5xl font-heading font-bold uppercase tracking-widest text-white/90 hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

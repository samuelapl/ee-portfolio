"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Laptop } from 'lucide-react'

export default function PageLoadingAnimation() {
  // Variants for the main overlay to fade out
  const overlayVariants = {
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  // Variants for the laptop icon
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        y: {
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
        rotate: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0d0d0d]"
        variants={overlayVariants}
        initial="visible"
        exit="exit"
      >
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate={["visible", "animate"]}
          className="relative"
        >
          <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-1 rounded-full dark:from-yellow-400 dark:to-orange-500">
            <Laptop className="h-24 w-24 text-white" aria-hidden="true" />
          </div>
          <span className="sr-only">Loading laptop icon</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

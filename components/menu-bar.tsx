"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import {
  Home,
  Briefcase,
  HelpCircle,
  DollarSign,
  Mail,
  MessageCircle,
  LogIn,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react"
import { useTheme } from "next-themes"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Services",
    href: "#",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    label: "Why T-2",
    href: "#",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    label: "Pricing",
    href: "#",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "FAQ",
    href: "#",
    gradient: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(2,132,199,0.06) 50%, rgba(3,105,161,0) 100%)",
    iconColor: "text-sky-500",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contact",
    href: "#",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-purple-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export function MenuBar() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.nav
      className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90% to-transparent rounded-3xl z-0 pointer-events-none"
        variants={navGlowVariants}
      />
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="relative">
              <div className="w-10 h-8 bg-gradient-to-br from-[#FF6600] via-[#FF8533] to-[#FFB366] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">T2</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#FF6600]/30 via-[#FF8533]/20 to-[#FFB366]/20 rounded-lg blur-sm -z-10"></div>
            </div>
            <span className="text-foreground font-semibold text-base bg-gradient-to-r from-[#FF6600] via-[#FF8533] to-[#FFB366] bg-clip-text text-transparent">
              T-2 Cloud
            </span>
          </div>

          <ul className="flex items-center gap-2">
            {menuItems.map((item, index) => (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    style={{
                      background: item.gradient,
                      opacity: 0,
                      borderRadius: "16px",
                    }}
                  />
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                  >
                    <span className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </motion.a>
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                  >
                    <span className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="flex items-center gap-2 p-1 rounded-xl bg-gradient-to-b from-background/60 to-background/30 backdrop-blur-sm border border-border/30 shadow-md"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className="absolute -inset-1 bg-gradient-radial from-transparent via-orange-400/20 via-50% to-transparent rounded-xl z-0 pointer-events-none"
            variants={navGlowVariants}
          />

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-8 rounded-lg bg-transparent text-muted-foreground hover:text-foreground transition-colors group relative overflow-hidden"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none bg-gradient-radial from-yellow-400/15 via-yellow-400/5 to-transparent rounded-lg"
              variants={glowVariants}
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </span>
          </motion.button>

          {/* Sign In */}
          <motion.button
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-transparent text-muted-foreground hover:text-foreground transition-colors group relative overflow-hidden"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none bg-gradient-radial from-blue-400/15 via-blue-400/5 to-transparent rounded-lg"
              variants={glowVariants}
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-500">
              <LogIn className="h-4 w-4" />
            </span>
            <span className="relative z-10 text-sm">Sign In</span>
          </motion.button>

          {/* Get Started */}
          <motion.button
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white hover:from-[#FF8533] hover:to-[#FFB366] transition-all duration-300 group relative overflow-hidden shadow-md"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none bg-gradient-radial from-white/20 via-white/10 to-transparent rounded-lg"
              variants={glowVariants}
            />
            <span className="relative z-10 text-sm">Get Started</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95"
    
    const variants = {
      primary: "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
      secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm",
      ghost: "hover:bg-white/5 text-white/70 hover:text-white",
      link: "text-white/70 underline-offset-4 hover:underline hover:text-white",
    }
    
    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-8 text-lg",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

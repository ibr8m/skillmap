import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Features",
    href: "#features"
  }, {
    label: "Waitlist",
    href: "#waitlist"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-2xl">S</span>
            </div>
            <span className="text-xl font-semibold">SkillMap</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                {item.label}
              </button>)}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="minimal">
              Sign in
            </Button>
            <Button variant="hero" onClick={() => document.getElementById('waitlist')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="py-6 space-y-4">
              {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                  {item.label}
                </button>)}
              <div className="px-4 pt-4 space-y-3">
                <Button variant="outline" className="w-full">
                  Sign in
                </Button>
                <Button variant="hero" className="w-full" onClick={() => document.getElementById('waitlist')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
}
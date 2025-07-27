import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Heart } from "lucide-react";
export function Footer() {
  return <footer id="contact" className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-extrabold">S</span>
              </div>
              <span className="text-2xl font-semibold">SkillMap</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="block">Ready to Connect?</span>
              <span className="text-gradient block">Contact Us</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions or want to learn more about SkillMap? We'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="group" asChild>
                <a href="mailto:contact@goskillmap.me">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  Contact Us
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="group border-2" asChild>
                <a
                  href="https://www.linkedin.com/company/skillmapedue/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  Follow Us on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>by SkillMap Team</span>
              </div>
              
              <div className="flex items-center gap-6">
                <span>© 2025 SkillMap. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
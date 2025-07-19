import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CreditCard } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5"></div>
      
      <div className="container-wide py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Coming Soon
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
                <span className="block mb-2">Discover Your Path</span>
                <span className="block mb-2">to Success</span>
                <span className="text-gradient block">with AI</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light px-4">
                AI-powered platform to map your skills, find opportunities, and build your future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-lg mx-auto">
              <Button 
                size="xl" 
                variant="hero"
                className="group w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                size="xl" 
                variant="outline"
                className="group w-full sm:w-auto border-2 px-8 py-4 text-base sm:text-lg font-medium hover:bg-muted/50"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
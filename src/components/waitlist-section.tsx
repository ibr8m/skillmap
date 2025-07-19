import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Shield, ArrowRight, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // Simulate subscription
    setIsSubscribed(true)
    toast({
      title: "Successfully subscribed!",
      description: "You'll be the first to know when SkillMap launches.",
    })
    
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section id="waitlist" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {!isSubscribed ? (
            <div className="animate-fade-in space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Join the Community
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none">
                  Join The Waitlist for{" "}
                  <span className="text-gradient">SkillMap</span>{" "}
                  Today!
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
                  Discover an Array of Incredible Career Mapping Tools and Be Prepared for an Exciting Wave of New Features on the Horizon. Sign up to Our Waitlist to be notified when we launch!
                </p>
              </div>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mt-12">
                <div className="relative w-full sm:flex-1">
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 sm:h-14 px-4 sm:px-6 text-base rounded-2xl bg-muted/50 border-border/50 focus:border-primary focus:bg-background transition-all duration-300 text-center sm:text-left"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-8 rounded-2xl font-semibold text-base bg-primary hover:bg-primary/90 text-primary-foreground border-0 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Join Waitlist!
                </Button>
              </form>

              {/* Bottom text */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-8">
                <CheckCircle className="w-4 h-4" />
                <span>Sign Up now & Get a Chance to Win Free Premium Features on Launch.</span>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in space-y-8">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-primary">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                </div>
                
                <div className="text-center space-y-3">
                  <h2 className="text-4xl font-bold">You're on the list!</h2>
                  <p className="text-xl text-muted-foreground">
                    We'll notify you as soon as SkillMap is ready for launch.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
import { Bot, Target, Users, GraduationCap, MessageSquare, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "AI Mentor & Learning Assistant",
      description: "Personalized AI mentor powered by advanced RAG technology that provides accurate, domain-specific answers and guidance tailored to your learning journey."
    },
    {
      icon: Target,
      title: "Career Assessment Test",
      description: "Comprehensive assessment that helps you discover the most suitable professional field for your skills and interests."
    },
    {
      icon: Users,
      title: "Learning Community",
      description: "Connect with other learners in the same field and share experiences and tips."
    },
    {
      icon: GraduationCap,
      title: "Specialized Courses",
      description: "Specialized training courses provided by experts in various professional fields."
    },
    {
      icon: MessageSquare,
      title: "Professional Consultations",
      description: "Consultation sessions with experts to help you make appropriate professional decisions."
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Connect with hiring companies and job opportunities suitable for your skills after completing the learning path."
    }
  ]

  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-16 animate-fade-in">
          {/* Consistent badge design */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Core Features
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
            <span className="block">AI-Powered Features</span>
            <span className="text-gradient block">We Offer in SkillMap</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive AI-enhanced platform that helps you discover your career path and develop your skills with intelligent guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-border transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-foreground transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
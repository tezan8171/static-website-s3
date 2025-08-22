"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  X,
  ChevronDown,
  Code,
  Smartphone,
  Search,
  Share2,
  Target,
  Palette,
  TrendingUp,
  Megaphone,
  Globe,
  Wrench,
  BarChart3,
  Zap,
  Shield,
  Crown,
  Star,
  Users,
  Award,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Bot,
  ArrowUp,
  Home,
  FileText,
  BriefcaseIcon,
  HelpCircle,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Teju, your AI assistant from T&T Global Ascend. How can I help you elevate your business today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const chatRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsChatOpen(false)
      }
    }

    if (isMenuOpen || isChatOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen, isChatOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      text: currentMessage,
      isBot: false,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setCurrentMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thanks for reaching out! I'd be happy to help you with your digital transformation needs. What specific service are you interested in?",
        "That's a great question! Our team specializes in creating custom solutions. Would you like me to connect you with one of our experts?",
        "I can help you understand our services better. Are you looking for web development, digital marketing, or software solutions?",
        "Excellent! Let me gather some information to provide you with the best recommendations. What's your current business challenge?",
        "I'm here to help! Our team has extensive experience in digital marketing and software development. What would you like to know more about?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage = {
        id: chatMessages.length + 2,
        text: randomResponse,
        isBot: true,
        timestamp: new Date(),
      }

      setChatMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="h-4 w-4" />,
      description: "Back to homepage",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      id: "services",
      label: "Services",
      icon: <Code className="h-4 w-4" />,
      description: "Our digital solutions",
      action: () => scrollToSection("services"),
    },
    {
      id: "about",
      label: "About Us",
      icon: <FileText className="h-4 w-4" />,
      description: "Learn about our mission",
      action: () => scrollToSection("about"),
    },
    {
      id: "team",
      label: "Our Team",
      icon: <Users className="h-4 w-4" />,
      description: "Meet our experts",
      action: () => scrollToSection("team"),
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail className="h-4 w-4" />,
      description: "Get in touch with us",
      action: () => scrollToSection("contact"),
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <BriefcaseIcon className="h-4 w-4" />,
      description: "View our work",
      action: () => alert("Portfolio section coming soon!"),
    },
    {
      id: "blog",
      label: "Blog",
      icon: <FileText className="h-4 w-4" />,
      description: "Latest insights",
      action: () => alert("Blog section coming soon!"),
    },
    {
      id: "careers",
      label: "Careers",
      icon: <Briefcase className="h-4 w-4" />,
      description: "Join our team",
      action: () => alert("Careers page coming soon!"),
    },
    {
      id: "support",
      label: "Support",
      icon: <HelpCircle className="h-4 w-4" />,
      description: "Get help and support",
      action: () => setIsChatOpen(true),
    },
  ]

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development & Deployment",
      description: "Custom websites and web applications built with cutting-edge technologies and deployed seamlessly.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Software Solutions",
      description: "Tailored software development to streamline your business processes and enhance productivity.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tech Support & Management",
      description: "Comprehensive technical support and IT management services to keep your systems running smoothly.",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Advanced search engine optimization strategies to boost your online visibility and rankings.",
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Strategic social media campaigns that engage your audience and build brand loyalty.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Funnels",
      description: "High-converting sales funnels designed to maximize your customer acquisition and retention.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Branding",
      description: "Complete brand identity development that resonates with your target audience.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Strategy",
      description: "Data-driven strategic planning to accelerate your business growth and market presence.",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Paid Ads",
      description: "Targeted advertising campaigns across multiple platforms for maximum ROI.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to expand your online reach and impact.",
    },
  ]

  const videoServices = [
    {
      title: "Web Development Showcase",
      subtitle: "See our latest responsive web applications in action",
      videoUrl: "/web-development-coding-screen.png",
    },
    {
      title: "Digital Marketing Results",
      subtitle: "Real campaigns delivering measurable growth",
      videoUrl: "/digital-marketing-dashboard.png",
    },
    {
      title: "Software Solutions Demo",
      subtitle: "Custom software streamlining business operations",
      videoUrl: "/software-dashboard.png",
    },
  ]

  const aboutHighlights = [
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Performance Marketing",
      description:
        "Data-driven marketing strategies that deliver measurable results and maximize your return on investment through advanced analytics and optimization techniques.",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "SEO Growth",
      description:
        "Comprehensive search engine optimization that drives organic traffic growth, improves rankings, and establishes your digital authority in your industry.",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Robust Web Apps",
      description:
        "Scalable, secure, and high-performance web applications built with modern technologies to support your business operations and growth objectives.",
    },
  ]

  const teamMembers = [
    {
      name: "Tezan Tyagi",
      position: "Founder & CEO",
      icon: <Crown className="h-8 w-8" />,
      description: "Visionary leader driving innovation and strategic growth",
      isFounder: true,
    },
    {
      name: "Vishal Tyagi",
      position: "President",
      icon: <Star className="h-6 w-6" />,
      description: "Strategic operations and business development expert",
    },
    {
      name: "Gaurav Tyagi",
      position: "Vice President",
      icon: <Award className="h-6 w-6" />,
      description: "Technology leadership and product innovation specialist",
    },
    {
      name: "Tarun Kumar",
      position: "Director",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Project management and client relations director",
    },
    {
      name: "Hardik Bhargav",
      position: "Assistant Director",
      icon: <Users className="h-6 w-6" />,
      description: "Team coordination and operational excellence manager",
    },
    {
      name: "Sudhanshu Sharma",
      position: "Divisions Manager",
      icon: <Zap className="h-6 w-6" />,
      description: "Multi-division oversight and performance optimization",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                className="text-2xl font-bold font-space-grotesk cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                T&T <span className="text-primary">Global Ascend</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigationItems.slice(1, 5).map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="hover:text-primary transition-all duration-300 font-dm-sans relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  className="ml-4 bg-transparent hover:bg-primary/10 border-primary/50 hover:border-primary transition-all duration-300"
                >
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 transition-all duration-300 hover:bg-primary/10"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : "top-1"}`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : "top-5"}`}
                  ></span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="bg-card/95 backdrop-blur-md border-b border-border/50 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 text-left group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold font-space-grotesk">{item.label}</div>
                    <div className="text-xs text-muted-foreground font-dm-sans">{item.description}</div>
                  </div>
                </button>
              ))}

              {/* Mobile CTA Section */}
              <div className="pt-4 mt-4 border-t border-border/50">
                <Button
                  onClick={() => {
                    setIsChatOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="w-full font-space-grotesk font-semibold"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Conversation
                </Button>

                <div className="flex gap-4 justify-center mt-4">
                  <div className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Facebook className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden coding-bg">
        <div className="absolute inset-0 grid-pattern animate-grid-fade"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-primary/40 font-mono text-xs animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`,
                }}
              >
                {
                  [
                    "01010",
                    "11001",
                    "function()",
                    "const x =",
                    "return",
                    "if (true)",
                    "else {",
                    "}</script>",
                    "import",
                    "export",
                    "async",
                    "await",
                    "console.log",
                    "useState",
                    "useEffect",
                    "API",
                    "JSON",
                    "HTTP",
                  ][Math.floor(Math.random() * 18)]
                }
              </div>
            ))}
          </div>

          <div className="absolute inset-0 opacity-15">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={`stream-${i}`}
                className="absolute text-accent/30 font-mono text-sm animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              >
                {["</>", "{ }", "[ ]", "=>", "&&", "||", "===", "!==", "++", "--"][Math.floor(Math.random() * 10)]}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-space-grotesk mb-6 leading-tight">
              <span className="block text-foreground mb-2">Welcome to</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                T&T Global Ascend
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-dm-sans text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Where Strategy Meets Elevation
            </p>
            <p className="text-lg font-dm-sans text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Transforming businesses through innovative digital marketing solutions and cutting-edge software
              development
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-3 font-space-grotesk font-semibold hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("services")}
            >
              Explore Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 font-space-grotesk font-semibold bg-transparent hover:scale-105 transition-all duration-300"
              onClick={() => setIsChatOpen(true)}
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("services")}
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              Comprehensive digital solutions designed to elevate your business to new heights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-space-grotesk text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-dm-sans text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              See Our Work in Action
            </h2>
            <p className="text-xl font-dm-sans text-muted-foreground max-w-3xl mx-auto">
              Experience our services through live demonstrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                subtitle: "Modern, responsive websites built with cutting-edge technology",
                video:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Web%20Development%202025-08-22%20at%2018.10.36_b60e508d-wduV4deN11M3sd0urgydkU9UUgENkg.mp4",
                poster: "/web-development-coding-screen.png",
              },
              {
                title: "Digital Marketing",
                subtitle: "Data-driven campaigns that deliver measurable results",
                video:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital%20Marketing%202025-08-22%20at%2018.07.30_1c259999-tGCswGuXdBdbqlRX0yBBJ7svk6oDWV.mp4",
                poster: "/digital-marketing-dashboard.png",
              },
              {
                title: "Software Solutions",
                subtitle: "Custom applications tailored to your business needs",
                video:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Software%20Solutions%202025-08-22%20at%2018.07.54_37332646-7SWCmTcE58mNrjaKgMOznJ58kbdF5B.mp4",
                poster: "/software-dashboard.png",
              },
            ].map((videoItem, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onLoadedData={() => {
                      console.log("[v0] Video loaded successfully:", videoItem.title)
                    }}
                    onError={(e) => {
                      console.log("[v0] Video failed to load:", videoItem.video)
                    }}
                  >
                    <source src={videoItem.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold font-space-grotesk mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                    {videoItem.title}
                  </h3>
                  <p className="text-muted-foreground font-dm-sans leading-relaxed">{videoItem.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              About <span className="text-primary">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              Discover what sets T&T Global Ascend apart in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold font-space-grotesk mb-6">
                Elevating Businesses Through <span className="text-primary">Innovation</span>
              </h3>
              <p className="text-lg text-muted-foreground font-dm-sans leading-relaxed mb-6">
                At T&T Global Ascend, we believe that every business deserves to reach its full potential. Our mission
                is to bridge the gap between strategy and execution, providing comprehensive digital solutions that
                drive real, measurable results.
              </p>
              <p className="text-lg text-muted-foreground font-dm-sans leading-relaxed mb-6">
                Founded on the principle that strategy meets elevation, we combine cutting-edge technology with proven
                marketing methodologies to create transformative experiences for our clients. Our team of experts works
                tirelessly to ensure your business not only adapts to the digital age but thrives in it.
              </p>
              <Button size="lg" className="font-space-grotesk font-semibold">
                Learn More About Our Journey
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                {aboutHighlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-primary">{highlight.icon}</div>
                        <CardTitle className="font-space-grotesk text-xl">{highlight.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-dm-sans text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-card/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              Meet the visionary leaders and experts driving innovation at T&T Global Ascend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 ${
                  member.isFounder ? "lg:col-span-3 md:col-span-2" : ""
                }`}
              >
                <CardHeader className="text-center">
                  {member.isFounder ? (
                    <div className="mb-6">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary">{member.icon}</div>
                      </div>
                      <CardTitle className="font-space-grotesk text-3xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {member.name}
                      </CardTitle>
                      <p className="text-xl text-primary font-semibold font-space-grotesk mb-2">{member.position}</p>
                      <CardDescription className="font-dm-sans text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                        {member.description}
                      </CardDescription>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto bg-card border border-border/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary">{member.icon}</div>
                      </div>
                      <CardTitle className="font-space-grotesk text-xl mb-1">{member.name}</CardTitle>
                      <p className="text-primary font-medium font-space-grotesk mb-2">{member.position}</p>
                      <CardDescription className="font-dm-sans text-muted-foreground leading-relaxed">
                        {member.description}
                      </CardDescription>
                    </div>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground font-dm-sans">
              Together, we are committed to delivering exceptional results and driving your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              Ready to elevate your business? Contact us today to discuss your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk mb-6">
                  Let's Start a <span className="text-primary">Conversation</span>
                </h3>
                <p className="text-muted-foreground font-dm-sans leading-relaxed mb-8">
                  Whether you're looking to boost your digital presence, develop custom software solutions, or create a
                  comprehensive marketing strategy, our team is here to help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-space-grotesk">Email Us</h4>
                    <a
                      href="mailto:theglobalascend@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors font-dm-sans"
                    >
                      theglobalascend@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-space-grotesk">Call Us</h4>
                    <a
                      href="tel:+918171469371"
                      className="text-muted-foreground hover:text-primary transition-colors font-dm-sans"
                    >
                      +91-8171469371
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-space-grotesk">Our Mission</h4>
                    <p className="text-muted-foreground font-dm-sans">Where Strategy Meets Elevation</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold font-space-grotesk mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </div>
                  <div className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </div>
                  <div className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </div>
                  <div className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-2xl">Send us a Message</CardTitle>
                <CardDescription className="font-dm-sans">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-space-grotesk">First Name</label>
                    <Input placeholder="John" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-space-grotesk">Last Name</label>
                    <Input placeholder="Doe" className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium font-space-grotesk">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium font-space-grotesk">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium font-space-grotesk">Service Interest</label>
                  <select className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground">
                    <option>Select a service</option>
                    <option>Web Development & Deployment</option>
                    <option>Software Solutions</option>
                    <option>Digital Marketing</option>
                    <option>SEO Optimization</option>
                    <option>Social Media Management</option>
                    <option>Branding</option>
                    <option>Strategy Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium font-space-grotesk">Message</label>
                  <Textarea
                    placeholder="Tell us about your project and how we can help you elevate your business..."
                    className="bg-background/50 min-h-[120px]"
                  />
                </div>
                <Button className="w-full font-space-grotesk font-semibold">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/30 border-t border-border/50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold font-space-grotesk">
                T&T <span className="text-primary">Global Ascend</span>
              </div>
              <p className="text-muted-foreground font-dm-sans text-sm leading-relaxed">
                Where Strategy Meets Elevation. Transforming businesses through innovative digital solutions and
                strategic excellence.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                  <Facebook className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
                <div className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                  <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
                <div className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
                <div className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                  <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold font-space-grotesk">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-dm-sans">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Software Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Digital Marketing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    SEO Optimization
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Branding
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold font-space-grotesk">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-dm-sans">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Our Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold font-space-grotesk">Contact</h3>
              <div className="space-y-3 text-sm text-muted-foreground font-dm-sans">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:theglobalascend@gmail.com" className="hover:text-primary transition-colors">
                    theglobalascend@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+918171469371" className="hover:text-primary transition-colors">
                    +91-8171469371
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground font-dm-sans">
                © 2024 T&T Global Ascend. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground font-dm-sans">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50" ref={chatRef}>
        {isChatOpen && (
          <div className="mb-4 w-80 sm:w-96 h-96 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col animate-in slide-in-from-bottom-2 duration-500 relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-orange-500/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-orange-500"></div>

            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-orange-500/30 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-orange-400/20 animate-pulse"></div>
                  <Bot className="h-6 w-6 text-cyan-400 relative z-10" />
                </div>
                <div>
                  <h3 className="font-bold font-space-grotesk text-lg bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                    Teju
                  </h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-xs text-cyan-300/80 font-dm-sans">Online</p>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="h-8 w-8 p-0 hover:bg-cyan-500/20 text-cyan-400"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-xl shadow-lg ${
                      message.isBot
                        ? "bg-gradient-to-br from-slate-700/80 to-slate-600/80 text-cyan-100 border border-cyan-500/20"
                        : "bg-gradient-to-br from-cyan-500 to-orange-500 text-white"
                    }`}
                  >
                    <p className="text-sm font-dm-sans">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-cyan-500/20 relative z-10">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-slate-800/50 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-300/50 focus:border-cyan-400"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="px-3 bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-400 hover:to-orange-400"
                  disabled={!currentMessage.trim()}
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col items-end gap-3">
          {!isChatOpen && (
            <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/40 rounded-xl px-4 py-2 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 animate-pulse"></div>
              <p className="text-lg font-bold font-space-grotesk bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent relative z-10">
                Teju
              </p>
            </div>
          )}
          <Button
            onClick={() => setIsChatOpen(!isChatOpen)}
            size="lg"
            className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-orange-500 hover:from-cyan-400 hover:via-blue-400 hover:to-orange-400 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 relative overflow-hidden group transform hover:scale-110"
          >
            {/* Multiple gradient layers for 3D effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
            <div className="absolute inset-1 bg-gradient-to-br from-transparent to-black/20 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/50 to-orange-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

            {/* Rotating border effect */}
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 opacity-75 animate-spin"
              style={{ animationDuration: "3s" }}
            ></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-orange-500"></div>

            {isChatOpen ? (
              <X className="h-8 w-8 relative z-10 text-white drop-shadow-lg" />
            ) : (
              <MessageCircle className="h-8 w-8 relative z-10 text-white drop-shadow-lg" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

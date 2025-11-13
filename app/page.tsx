"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero3D } from "@/components/hero-3d";
import { ArrowRight, Zap, Code, Share2, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <Hero3D />
        <Container>
          <motion.div
            className="text-center max-w-5xl mx-auto space-y-8 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Digital Solutions
              <br />
              That <span className="italic font-black">Convert</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Swiss-Kurdish agency specializing in AI automation, web development,
              and social media marketing. Clean. Fast. Effective.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button size="lg" className="group w-full sm:w-auto">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 sm:pt-16 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">50+</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">95%</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">24h</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Response</div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="bg-[#0a0a0a] relative">
        <Container>
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-4 sm:mb-6">
              What We Do
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto px-4">
              Three core services. Maximum impact. Zero bullshit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* AI Automation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:scale-105 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-black flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">AI Automation</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Automate repetitive tasks, integrate intelligent chatbots,
                    and streamline workflows with cutting-edge AI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Custom AI Chatbots", "Workflow Automation", "Data Processing"].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:scale-105 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-black flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Code className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Web Development</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Lightning-fast, conversion-optimized websites built with
                    modern tech. Performance is non-negotiable.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["High-Performance Sites", "E-Commerce Solutions", "Custom Web Apps"].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:scale-105 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-black flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Share2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Social Media</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Strategic social media marketing that drives engagement,
                    builds brands, and generates real ROI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Content Strategy", "Community Management", "Analytics & Reporting"].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button size="lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </Container>
      </Section>

      {/* Portfolio Highlights */}
      <Section className="relative">
        <Container>
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-4 sm:mb-6">
              Selected Work
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto px-4">
              Real projects. Real results. Real impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "E-Commerce Platform",
                desc: "Built a high-performance online store that increased conversions by 150% and reduced page load times to under 1 second.",
                tech: ["Next.js", "Shopify", "Tailwind"],
              },
              {
                num: "02",
                title: "AI Customer Support",
                desc: "Implemented intelligent chatbot that handles 80% of customer queries, saving 30+ hours per week.",
                tech: ["OpenAI", "Python", "React"],
              },
              {
                num: "03",
                title: "Brand Social Strategy",
                desc: "Grew Instagram following from 2K to 50K in 6 months with strategic content and community engagement.",
                tech: ["Instagram", "TikTok", "Content"],
              },
              {
                num: "04",
                title: "SaaS Dashboard",
                desc: "Designed and developed a modern analytics dashboard with real-time data visualization and reporting.",
                tech: ["React", "D3.js", "Node.js"],
              },
            ].map((project) => (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:border-white/30 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-white/5 to-white/0 mb-6 flex items-center justify-center group-hover:from-white/10 transition-all">
                    <span className="text-5xl sm:text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                      {project.num}
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{project.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-white/10 text-white text-xs font-mono hover:bg-white/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button size="lg">
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section className="bg-[#0a0a0a] relative">
        <Container>
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-4 sm:mb-6">
              Client Success
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto px-4">
              Results speak louder than promises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "JAFF Studio transformed our online presence. The website they built is not only beautiful but converts visitors into customers.",
                name: "Sarah Johnson",
                role: "CEO, TechStart",
              },
              {
                quote: "The AI automation they implemented saved us countless hours. ROI was positive within the first month.",
                name: "Marcus Weber",
                role: "Founder, SwissFlow",
              },
              {
                quote: "Professional, fast, and results-driven. Our social media engagement increased 300% in just 3 months.",
                name: "Lisa Martinez",
                role: "CMO, BrandCo",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-white/30 transition-all duration-300">
                  <CardContent className="pt-6 sm:pt-8">
                    <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-white/60">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8 px-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              Book a free consultation. No sales pitch. Just honest advice on
              how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-8">
              <Button size="lg" className="group w-full sm:w-auto">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 sm:pt-16 border-t border-white/10 mt-12 sm:mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {[
                  "Swiss Registered",
                  "24h Response",
                  "Money-back Guarantee",
                  "95% Satisfaction",
                ].map((item) => (
                  <div key={item} className="text-center">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-2" />
                    <p className="text-xs sm:text-sm text-white/60">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

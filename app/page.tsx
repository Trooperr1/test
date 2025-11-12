"use client";

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
    <>
      <Navigation />

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <Hero3D />
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-8 pt-20">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              Digital Solutions
              <br />
              That <span className="italic">Convert</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Swiss-Kurdish agency specializing in AI automation, web development,
              and social media marketing. Clean. Fast. Effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">50+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">95%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">24h</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Response</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="bg-[#0a0a0a]">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
              What We Do
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Three core services. Maximum impact. Zero bullshit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Automation */}
            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-white text-black rounded-none flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <CardTitle>AI Automation</CardTitle>
                <CardDescription>
                  Automate repetitive tasks, integrate intelligent chatbots,
                  and streamline workflows with cutting-edge AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">Custom AI Chatbots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">Workflow Automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">Data Processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-white text-black rounded-none flex items-center justify-center mb-6">
                  <Code className="w-8 h-8" />
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Lightning-fast, conversion-optimized websites built with
                  modern tech. Performance is non-negotiable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">High-Performance Sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">E-Commerce Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">Custom Web Apps</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-white text-black rounded-none flex items-center justify-center mb-6">
                  <Share2 className="w-8 h-8" />
                </div>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>
                  Strategic social media marketing that drives engagement,
                  builds brands, and generates real ROI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">Content Strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">Community Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <span className="text-white/70">Analytics & Reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Portfolio Highlights */}
      <Section>
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
              Selected Work
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Real projects. Real results. Real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card>
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/0 mb-6 flex items-center justify-center">
                <span className="text-6xl font-black text-white/10">01</span>
              </div>
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>
                  Built a high-performance online store that increased conversions
                  by 150% and reduced page load times to under 1 second.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">Next.js</span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">Shopify</span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">Tailwind</span>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card>
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/0 mb-6 flex items-center justify-center">
                <span className="text-6xl font-black text-white/10">02</span>
              </div>
              <CardHeader>
                <CardTitle>AI Customer Support</CardTitle>
                <CardDescription>
                  Implemented intelligent chatbot that handles 80% of customer
                  queries, saving 30+ hours per week.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">OpenAI</span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">Python</span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">React</span>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card>
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/0 mb-6 flex items-center justify-center">
                <span className="text-6xl font-black text-white/10">03</span>
              </div>
              <CardHeader>
                <CardTitle>Brand Social Strategy</CardTitle>
                <CardDescription>
                  Grew Instagram following from 2K to 50K in 6 months with
                  strategic content and community engagement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">Instagram</span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">TikTok</span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">Content</span>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card>
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/0 mb-6 flex items-center justify-center">
                <span className="text-6xl font-black text-white/10">04</span>
              </div>
              <CardHeader>
                <CardTitle>SaaS Dashboard</CardTitle>
                <CardDescription>
                  Designed and developed a modern analytics dashboard with
                  real-time data visualization and reporting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">React</span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">D3.js</span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono">Node.js</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg">
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section className="bg-[#0a0a0a]">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
              Client Success
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Results speak louder than promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-8">
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  "JAFF Studio transformed our online presence. The website they
                  built is not only beautiful but converts visitors into customers."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full" />
                  <div>
                    <div className="font-bold text-white">Sarah Johnson</div>
                    <div className="text-sm text-white/60">CEO, TechStart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  "The AI automation they implemented saved us countless hours.
                  ROI was positive within the first month."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full" />
                  <div>
                    <div className="font-bold text-white">Marcus Weber</div>
                    <div className="text-sm text-white/60">Founder, SwissFlow</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  "Professional, fast, and results-driven. Our social media
                  engagement increased 300% in just 3 months."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full" />
                  <div>
                    <div className="font-bold text-white">Lisa Martinez</div>
                    <div className="text-sm text-white/60">CMO, BrandCo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Book a free consultation. No sales pitch. Just honest advice on
              how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-16 border-t border-white/10 mt-16">
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="text-center">
                  <CheckCircle2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <p className="text-sm text-white/60">Swiss Registered</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <p className="text-sm text-white/60">24h Response</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <p className="text-sm text-white/60">Money-back Guarantee</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <p className="text-sm text-white/60">95% Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

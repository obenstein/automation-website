'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Sticky Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary-500)] to-[var(--accent-purple)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <span className="text-xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                DataSigil
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#services" 
                className="text-[var(--foreground)] hover:text-[var(--primary-500)] transition-colors font-medium"
              >
                Services
              </a>
              <a 
                href="#use-cases" 
                className="text-[var(--foreground)] hover:text-[var(--primary-500)] transition-colors font-medium"
              >
                Use Cases
              </a>
              <a 
                href="mailto:contact@datasigil.com" 
                className="px-6 py-2.5 bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-purple)] rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--primary-500)] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,60%,5%)] via-[hsl(270,60%,8%)] to-[hsl(220,60%,5%)]"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-[hsl(220,75%,55%)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(270,100%,65%)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(180,100%,50%)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-effect border border-white/10 animate-fade-in-up">
              <span className="text-sm font-medium gradient-text">AI-Powered Automation Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s', fontFamily: 'Space Grotesk, sans-serif' }}>
              Build <span className="gradient-text">AI-Powered Workflows</span> with Inherent Flexibility
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Designed for technical professionals who demand precision, control, and seamless integration across n8n, Zapier, Make, and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#use-cases" 
                className="group px-8 py-4 bg-gradient-to-r from-[hsl(220,75%,55%)] to-[hsl(270,100%,65%)] rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Use Cases
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 glass-effect rounded-full font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-16 flex flex-wrap gap-3 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {['n8n', 'Zapier', 'Make', 'AI Agents', 'RAG', 'LLMs', 'MCP Servers'].map((tech, index) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 glass-effect rounded-full text-sm font-medium border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Powerful Automation, <span className="gradient-text">Precisely Built</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              We achieve powerful automation by building precisely with code. Host locally for maximum control or leverage the cloud for convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service Card 1 */}
            <div className="group p-8 glass-effect rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(220,75%,55%)] to-[hsl(270,100%,65%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Code-First Automation
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Build with precision using code for maximum flexibility and control. Deploy multi-step AI agents with the autonomy you need.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group p-8 glass-effect rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(180,100%,50%)] to-[hsl(220,75%,55%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Flexible Hosting
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Choose your infrastructure: host locally for maximum control or leverage cloud convenience. Your workflow, your way.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group p-8 glass-effect rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(270,100%,65%)] to-[hsl(330,100%,70%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                AI Chatbots & Agents
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Build sophisticated chatbots and multi-agent systems connected to vast data sources, LLMs, vector stores, and MCP servers.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group p-8 glass-effect rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(25,100%,60%)] to-[hsl(330,100%,70%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Custom Integrations
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Connect your go-to apps with customized integrations. Seamlessly link tools, databases, APIs, and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 relative bg-[var(--surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Real-World <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              From ITOps to Sales, we deliver automation solutions that transform how you work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Use Case 1 - ITOps */}
            <div className="group p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] hover:border-[hsl(220,75%,55%)] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(220,75%,55%)] to-[hsl(270,100%,65%)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IT</span>
                </div>
                <h3 className="text-xl font-bold">ITOps</h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                AI assistant delivering swift responses to employee questions, typically within minutes
              </p>
            </div>

            {/* Use Case 2 - Support */}
            <div className="group p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] hover:border-[hsl(180,100%,50%)] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(180,100%,50%)] to-[hsl(220,75%,55%)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Support</h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Answer questions via WhatsApp using a RAG-powered knowledge base for instant, accurate support
              </p>
            </div>

            {/* Use Case 3 - SecOps */}
            <div className="group p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] hover:border-[hsl(270,100%,65%)] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(270,100%,65%)] to-[hsl(330,100%,70%)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">SecOps</h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Examine email traffic to extract key security intelligence and protect your organization
              </p>
            </div>

            {/* Use Case 4 - Sales */}
            <div className="group p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] hover:border-[hsl(25,100%,60%)] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(25,100%,60%)] to-[hsl(330,100%,70%)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Sales</h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Sophisticated multi-agent system to extract, process, and synchronize call information seamlessly
              </p>
            </div>

            {/* Use Case 5 - Marketing */}
            <div className="group p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] hover:border-[hsl(220,75%,55%)] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(220,75%,55%)] to-[hsl(180,100%,50%)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Marketing</h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Connect marketing tools like HubSpot to simplify your go-to-market process and boost efficiency
              </p>
            </div>

            {/* Use Case 6 - Custom */}
            <div className="group p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] hover:border-[hsl(270,100%,65%)] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(270,100%,65%)] to-[hsl(220,75%,55%)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Custom Solutions</h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Build RAG chatbots for company documents using Google Drive and Gemini, tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,75%,55%)] via-[hsl(270,100%,65%)] to-[hsl(180,100%,50%)] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Ready to <span className="gradient-text">Transform</span> Your Workflows?
            </h2>
            <p className="text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
              Let&apos;s build intelligent automation solutions tailored to your technical requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@datasigil.com" 
                className="group px-10 py-5 bg-gradient-to-r from-[hsl(220,75%,55%)] to-[hsl(270,100%,65%)] rounded-full font-semibold text-white text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#services" 
                className="px-10 py-5 glass-effect rounded-full font-semibold text-white text-lg border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--border)]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              DataSigil
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              AI-Powered Workflow Automation for Technical Professionals
            </p>
            <a 
              href="mailto:contact@datasigil.com" 
              className="text-[var(--primary-500)] hover:text-[var(--accent-purple)] transition-colors font-medium"
            >
              contact@datasigil.com
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--text-muted)]">
            <p>© {new Date().getFullYear()} DataSigil. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

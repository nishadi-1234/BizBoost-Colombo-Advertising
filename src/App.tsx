/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  Globe, 
  Instagram, 
  MessageSquare, 
  Smartphone, 
  Target, 
  TrendingUp, 
  MapPin,
  Mail,
  Phone
} from "lucide-react";

export default function App() {
  const services = [
    {
      title: "Local SEO Optimizer",
      desc: "Get found by Colombo customers when they search for services like yours.",
      icon: <Globe className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Social Media Growth",
      desc: "Strategic content for Instagram and Facebook tailored to the Sri Lankan audience.",
      icon: <Instagram className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Google Ads Management",
      desc: "High-intent traffic that converts. We manage your precision targeting in Colombo.",
      icon: <Target className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Mobile-First Design",
      desc: "Websites and landing pages built for the high mobile usage in Sri Lanka.",
      icon: <Smartphone className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Brand Storytelling",
      desc: "Crafting a professional look and voice that builds trust with local clients.",
      icon: <MessageSquare className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Analytics & ROI",
      desc: "Clear reporting on how your marketing spend is turning into real business growth.",
      icon: <BarChart3 className="w-6 h-6 text-teal-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">BizBoost <span className="text-teal-600">Colombo</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-teal-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-teal-600 transition-colors">About</a>
            <a href="#contact" className="px-5 py-2.5 bg-[#1c1917] text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-200">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-24 pb-32 md:pt-40 md:pb-48">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700"> Colombo's SMB Growth Partner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                Your Business. <br />
                <span className="text-teal-600"> Colombo's </span> Audience.
              </h1>
              <p className="text-xl text-stone-600 max-w-lg mb-10 leading-relaxed">
                We help Colombo businesses get found, get noticed, and stay ahead. No fluff—just results-driven marketing for the local market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-all hover:scale-105 shadow-xl shadow-teal-100 group">
                  Book a Growth Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-stone-200 rounded-2xl font-bold hover:bg-stone-50 transition-all flex items-center justify-center">
                  View Our Success Cases
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-teal-200/20 rounded-[3rem] blur-3xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1549463387-927d883fe19d?q=80&w=2000&auto=format&fit=crop" 
                  alt="Colombo Skyline" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold">Trusted by 50+ Local Businesses</p>
                      <p className="text-xs text-stone-500">From Pettah to Bambalapitiya</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 px-6 bg-white border-y border-stone-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise built for Colombo's unique market</h2>
              <p className="text-stone-600">
                We don't do generic. We understand the specific digital landscape in Sri Lanka, ensuring your marketing dollars work harder.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-[#fafaf9] border border-stone-200 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-50/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-stone-100 shadow-sm mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="about" className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Team meeting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Growth chart" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                   <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" alt="Colombo Business" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-teal-600 flex items-center justify-center p-8 text-white">
                    <div>
                      <p className="text-5xl font-extrabold mb-1">10X</p>
                      <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Growth Observed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Not just another agency. <br />
                <span className="text-teal-600">We're your local growth lab.</span>
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Most agencies use global templates. We use local insights. We know which neighborhoods in Colombo respond to what messages, and how to navigate the specific cultural nuances of advertising in Sri Lanka.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Deep understanding of Sri Lankan consumer behavior.",
                  "Transparent pricing tailored for local small businesses.",
                  "24/7 dedicated local support via WhatsApp and Call.",
                  "Data-driven strategies that prioritize direct sales."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-teal-600" />
                    </div>
                    <span className="font-semibold text-stone-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#1c1917] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/20 blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/10 blur-[120px]" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to dominate the <br /> Colombo market?</h2>
                <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto">
                  Stop guessing and start growing. Take the first step with a free audit of your current digital presence.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="tel:+94112345678" className="px-10 py-5 bg-teal-600 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-teal-500 transition-all shadow-xl shadow-teal-900/40">
                    <Phone className="w-6 h-6" />
                    +94 11 234 5678
                  </a>
                  <a href="mailto:hello@bizboost.lk" className="px-10 py-5 bg-white text-[#1c1917] rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-stone-100 transition-all">
                    <Mail className="w-6 h-6" />
                    Get a Quote
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">BizBoost Colombo</span>
            </div>
            <p className="text-stone-500 max-w-sm leading-relaxed">
              Empowering the next generation of Colombo's entrepreneurs. We bridge the gap between local craftsmanship and global digital standards.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-stone-400">Location</h4>
            <address className="not-italic text-sm text-stone-600 space-y-4">
              <div className="flex gap-2">
                 <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                 <span>123 Galle Road, <br />Colombo 03, Sri Lanka</span>
              </div>
            </address>
          </div>

          <div>
             <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-stone-400">Connect</h4>
             <div className="flex gap-4">
               {[
                 { name: 'Facebook', icon: <MessageSquare className="w-5 h-5" /> },
                 { name: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
                 { name: 'LinkedIn', icon: <TrendingUp className="w-5 h-5" /> },
                 { name: 'Twitter', icon: <Globe className="w-5 h-5" /> }
               ].map(social => (
                 <a key={social.name} href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-teal-50 hover:border-teal-200 transition-all text-stone-600 hover:text-teal-600">
                   <span className="sr-only">{social.name}</span>
                   {social.icon}
                 </a>
               ))}
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between gap-4 text-xs font-medium text-stone-400 uppercase tracking-widest">
          <p>© 2024 BizBoost Colombo. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-teal-600">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action */}
      <a 
        href="https://wa.me/94112345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-200 hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
}

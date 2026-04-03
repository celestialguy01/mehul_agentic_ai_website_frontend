import React from 'react'
import "./styles/globals.css";
import BusinessScaleSection from "./components/businessscale_section.jsx";
import {CapabilitiesSection} from "./components/capabilities_section.jsx";
import ContactSection from "./components/contact_section.jsx";
import HeroSection from "./components/hero_section.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import hero_bg_desktop from "./assets/images/hero_bg.jpg";
import capabilities_1 from "./assets/images/capability_1.png";
import capabilities_2 from "./assets/images/capability_2.png";
import capabilities_3 from "./assets/images/capability_3.png";

 const items_business = [
   { id: 'b1', title: 'Applied AI Services', description: 'Targeted AI-driven execution — from research and analysis to content generation and workflow support, delivered without full system builds.' },
   { id: 'b2', title: 'Production-Grade AI Systems', description: 'End-to-end Agentic AI systems with reasoning, tool usage, and structured workflows — designed for real-world deployment.' },
   { id: 'b3', title: 'Consultancy', description: 'Guidance on designing, evaluating, and integrating AI systems — from architecture decisions to practical implementation strategies.' },
 ];

const items_capabilities = [
  { id: 'c1', title: 'AI Models & Intelligence', description: 'Frontier models, Hugging Face, prompt engineering, embeddings, RAG pipelines', backgroundImage: capabilities_1},
  { id: 'c2', title: 'Agentic Systems & Infrastructure', description: 'CrewAI, LangGraph, MCP, tool integrations, APIs, Docker, databases, real-time systems', backgroundImage: capabilities_2},
  { id: 'c3', title: 'Interfaces & Integration', description: 'React, Tailwind, shadcn/ui, API integration, System Integration & Deployment', backgroundImage: capabilities_3},
];

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* ===============================
          HERO BACKGROUND IMAGE
          - Covers header + hero section only
          - Positioned absolute, z-0
         =============================== */}

        <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
                <img
                  src={hero_bg_desktop}
                  alt=""
                  aria-hidden="true"
                  loading="eager"
                  decoding="async"
                  className="object-cover w-full h-full"
                />
                
                {/* Optional overlay for better text contrast */}
                <div 
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b to-transparent from-black/20"
        />
      </div>

      {/* ===============================
          MAIN CONTENT
          - Positioned relative, z-20
          - All sections follow same layout pattern
         =============================== */}
      <main className="relative z-20">
        <div className="section-gap">
          
          {/* ========== HERO SECTION ========== */}
          <section className="page-section">
            <div className="page-container--transparent">
              <Header />
            </div>
          </section>

          <section className="page-section">
            <div className="page-container--transparent">
              <HeroSection />
            </div>
          </section>

          {/* ========== BUSINESS SECTION ========== */}
          <section className="page-section">
            <div className="page-container">
              <BusinessScaleSection items={items_business} />
            </div>
          </section>

          {/* ========== CAPABILITIES SECTION ========== */}
          <section className="page-section">
            <div className="page-container">
              <CapabilitiesSection items={items_capabilities} />
            </div>
          </section>

          {/* ========== CONTACT SECTION ========== */}
          <section id="contact" className="page-section">
            <div className="page-container">
              <ContactSection />
            </div>
          </section>

          {/* ========== FOOTER ========== */}
          <section id="contact" className="page-section">
            <div className="page-container">
              <Footer />
            </div>
          </section>          

        </div>
      </main>
    </div>
  );
}





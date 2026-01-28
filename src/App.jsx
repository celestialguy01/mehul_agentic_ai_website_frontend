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
   { id: 'b1', title: 'Make Your Processes AI-Driven', description: 'Turn routine workflows into intelligent systems — from lead follow-ups to report generation — that adapt and improve continuously.' },
   { id: 'b2', title: 'Automate Complex Tasks', description: 'Deploy AI agents that analyze data, make decisions, and take action — from drafting proposals to triaging support queries.' },
   { id: 'b3', title: 'Increase Efficiency & Reduce Costs', description: 'Achieve more output with fewer resources — AI runs 24/7, scales instantly, and eliminates repetitive manual effort.' },
 ];

const items_capabilities = [
  { id: 'c1', title: 'Agentic AI Frameworks', description: 'CrewAI, LangGraph, OpenAI SDK, MCP', backgroundImage: capabilities_1},
  { id: 'c2', title: 'Infrastructure', description: 'RAG, Toolings, Docker, SQL, REST API, WebSockets', backgroundImage: capabilities_2},
  { id: 'c3', title: 'Frontend', description: 'React JS, Tailwind CSS, Shadcn/ui', backgroundImage: capabilities_3},
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




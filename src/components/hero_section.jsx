import Chatbot from './chatbot';

function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="
        min-h-[100svh]
        md:min-h-screen
        flex flex-col
        justify-between
      "
    >
      {/* Component 1 — Text block */}
      <div
        className="flex flex-col gap-2 items-start text-left"
      >
        <h1 className="text-h1">Mehul Agarwal</h1>
        <h1 className="text-h1">Agentic AI Specialist</h1>
        <p className="body-1 w-full md:max-w-[50%]">
          I build and ship production-grade Agentic AI systems — from intelligent reasoning to polished frontend experiences.
        </p>
      </div>

      {/* Component 2 — Chatbot (fluid, parent-sized) */}
      <div
        className="
          flex justify-center
          mt-[24px]
          md:mt-[48px]
          md:justify-end
        "
      >
        <div
          className="
            w-full
            max-w-[90vw]
            md:max-w-[420px]
            lg:max-w-[520px]
          "
        >
          <Chatbot />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;



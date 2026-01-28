/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        /* Fonts & weights (unchanged) */
        fontFamily: {
          heading: ["Poppins", "sans-serif"],
          body: ["Plus Jakarta Sans", "sans-serif"],
        },
        fontWeight: {
          semibold: "600",
          regular: "400",
        },
  
        /* Responsive typography tokens (flattened for direct utility use)
           Usage examples:
             - <h1 className="text-h1">...
             - <p className="text-body-1-base md:text-body-1-md lg:text-body-1-lg">...
        */
        fontSize: {
        /* =========================
            Headings
            ========================= */
      
          h1: [
            "clamp(1.75rem, 1.25rem + 2.2vw, 2.75rem)", // 28px → 44px
            {
              lineHeight: "1.2",
              letterSpacing: "-0.005em",
              fontWeight: "600",
            },
          ],
        
          h2: [
            "clamp(1.375rem, 1.05rem + 1.4vw, 2rem)", // 22px → 32px
            {
              lineHeight: "1.4",
              letterSpacing: "-0.005em",
              fontWeight: "600",
            },
          ],
        
          h3: [
            "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)", // 16px → 18px
            {
              lineHeight: "1.35",
              letterSpacing: "-0.005em",
              fontWeight: "600",
            },
          ],
        
          h4: [
            "clamp(1.125rem, 1rem + 0.7vw, 1.375rem)", // 18px → 22px
            {
              lineHeight: "1.3",
              letterSpacing: "-0.005em",
              fontWeight: "600",
            },
          ],
        
          /* =========================
              Body text
              ========================= */
        
          "body-1": [
            "clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem)", // 18px → 20px
            {
              lineHeight: "1.4",
              letterSpacing: "0.02em",
              fontWeight: "400",
            },
          ],
        
          "body-2": [
            "clamp(0.875rem, 0.8rem + 0.35vw, 1rem)", // 14px → 16px
            {
              lineHeight: "1.6",
              letterSpacing: "0.02em",
              fontWeight: "400",
            },
          ],
        
          "body-3": [
            "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)", // 16px → 18px
            {
              lineHeight: "1.3",
              letterSpacing: "0em",
              fontWeight: "400",
            },
          ],
        
          "body-4": [
            "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)", // 16px → 18px
            {
              lineHeight: "1.3",
              letterSpacing: "0em",
              fontWeight: "400",
            },
          ],
      },
            
  
        /* Colors unchanged (kept literal tokens + semantic aliases) */
        colors: {
          "page-bg": "#F9FAFB",
          h1: "#1A1A1A",
          h2: "#000000",
          h3: "#1A1A1A",
          h4: "#000000",
          "body-1": "#444444",
          "body-2": "#000000",
          "body-3": "#6B7280",
          "body-4": "#000000",
          /* semantic aliases */
          background: "#F9FAFB",
          foreground: "#444444",
        },
  
        /* Spacing tokens flattened for direct use with px-*, py-*, gap-*, etc. */
        spacing: {
          /* container horizontal padding */
          'container-h-padding-base': '32px',  // 2rem (mobile)
          'container-h-padding-md': '40px',    // 2.5rem (tablet)
          'container-h-padding-lg': '128px',   // 8rem (desktop)
        
          /* vertical padding for sections */
          'section-vertical-padding-base': '10px', // 0.62rem
          'section-vertical-padding-md': '16px',   // 1rem
          'section-vertical-padding-lg': '10px',   // 0.62rem
        
          /* gaps between sections */
          'section-gap-base': '40px', // 2.5rem (mobile)
          'section-gap-md': '48px',   // 3rem
          'section-gap-lg': '96px',   // 6rem
        },
  
        /* maxWidth tokens flattened for responsive usage */
        maxWidth: {
          'page-base': '100%',
          'page-md': '1024px',
          'page-lg': '1440px',
        },
      },
    },
    plugins: [],
  };
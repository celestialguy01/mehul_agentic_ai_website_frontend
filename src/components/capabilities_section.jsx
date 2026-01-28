import React from 'react';

/**
 * CapabilitiesTile
 * Reusable tile with background image, rounded corners and top-centered vertical layout.
 */
export function CapabilitiesTile({
  title,
  description,
  backgroundImage,
  className = '',
  ...rest
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[24px]
        shadow-[0_6px_20px_rgba(166,166,166,0.22)]
        ${className}`}
      {...rest}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Effects overlay */}
      <div
        className="absolute inset-0 backdrop-blur-[18px] pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 16px -2px rgba(255,255,255,0.4)',
        }}
      />

      {/* Content */}
      <div
        className="
          relative z-10 flex flex-col
          px-[16px] py-[40px]
          md:px-[32px] md:py-[80px]
          gap-y-[18px] md:gap-y-[25px]
        "
      >
        <h3 className="text-left text-h4">{title}</h3>
        <p className="text-body-4">{description}</p>
      </div>
    </article>
  );
}

/**
 * CapabilitiesSection
 * Renders tiles vertically on mobile, horizontally on tablet+desktop.
 */
export function CapabilitiesSection({ items, className = '', ...rest }) {
  const defaultTiles = [
    {
      id: 'cap-1',
      title: 'Integrate rapidly',
      description: 'Plug into your stack without friction.',
      backgroundImage: '/images/capabilities-1.jpg',
    },
    {
      id: 'cap-2',
      title: 'Operationalize AI',
      description: 'Deploy safely with governance built-in.',
      backgroundImage: '/images/capabilities-2.jpg',
    },
    {
      id: 'cap-3',
      title: 'Upskill teams',
      description: 'Enable adoption with education and tooling.',
      backgroundImage: '/images/capabilities-3.jpg',
    },
  ];

  const tiles = Array.isArray(items) && items.length === 3 ? items : defaultTiles;

  return (
    <div
      className={`flex flex-col items-center gap-y-[48px] ${className}`}
      {...rest}
    >
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-h2">Capabilities</h2>
        <p className="text-body-2">
          Core technologies and frameworks that power my Agentic AI systems
        </p>
      </div>

      {/* Tiles */}
      <div
        className="
          flex flex-col
          w-full
          gap-y-[32px]
          px-[15px]
          md:flex-row
          md:items-stretch
          md:gap-x-[90px]
          md:gap-y-0
        "
      >
        {tiles.map((t, idx) => (
          <CapabilitiesTile
            key={t.id ?? idx}
            title={t.title}
            description={t.description}
            backgroundImage={t.backgroundImage}
            className="w-full md:flex-1"
          />
        ))}
      </div>
    </div>
  );
}

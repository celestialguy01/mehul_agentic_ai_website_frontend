import React from 'react';

export function BusinessScaleTile({ title, description, className = '', ...rest }) {
  return (
    <article
      className={`flex flex-col items-center px-0 text-center md:px-[10px] py-[16px] md:py-[40px] gap-y-[8px] md:gap-y-[16px] ${className}`}
      {...rest}
    >
      <h3 className="text-h3">{title}</h3>
      <p className="text-body-3">
        {description}
      </p>
    </article>
  );
}



function BusinessScaleSection({ items, className = '', ...rest }) {
  const defaultTiles = [
    { id: 'scale-1', title: 'Scale confidently', description: 'Grow operations efficiently.' },
    { id: 'scale-2', title: 'Optimize costs', description: 'Reduce overhead with automation.' },
    { id: 'scale-3', title: 'Drive outcomes', description: 'Turn insights into action.' },
  ];

  const tiles = Array.isArray(items) && items.length === 3 ? items : defaultTiles;

  return (
    <div
      className={`flex flex-col items-center gap-y-[18px] md:gap-y-[48px] ${className}`}
      {...rest}
    >
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-h2">
          How Our AI Systems Scale Business
        </h2>
        <p className="text-body-2">
          Whether you’re a startup, consultancy, or enterprise — our AI systems adapt to your workflow, not the other way around.
        </p>
      </div>

      {/* Tiles */}
      <div className="w-full">
        <div
          className="flex flex-col w-full divide-y divide-black md:flex-row md:divide-y-0 md:divide-x"
        >
          {tiles.map((t, idx) => (
            <BusinessScaleTile
              key={t.id ?? idx}
              title={t.title}
              description={t.description}
              className="w-full px-[10px] md:w-1/3 md:px-[20px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default BusinessScaleSection;

// Usage example:
// const items = [
//   { id: 't1', title: 'Scale confidently', description: 'Grow operations efficiently.' },
//   { id: 't2', title: 'Optimize costs', description: 'Reduce overhead with automation.' },
//   { id: 't3', title: 'Drive outcomes', description: 'Turn insights into action.' },
// ];
// <BusinessScaleSection items={items} />
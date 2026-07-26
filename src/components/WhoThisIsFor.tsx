const segments = [
  "Manufacturing & distribution companies still tracking orders in Excel",
  "Service businesses juggling leads across WhatsApp, email, and spreadsheets",
  "Companies whose ERP is a patchwork of disconnected tools",
];

const WhoThisIsFor = () => {
  return (
    <section className="relative z-10 bg-cesta-dark py-16" aria-labelledby="who-this-is-for-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h2 id="who-this-is-for-heading" className="mb-6 text-2xl font-bold md:text-3xl">
            Who this is <span className="holographic-text">for</span>
          </h2>
          <ul className="space-y-3 text-left text-lg text-soft">
            {segments.map((segment, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cesta-electric" aria-hidden="true" />
                <span>{segment}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;

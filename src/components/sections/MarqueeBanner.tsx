const items = [
  '🌟 Certified Instructor',
  '🪷 Yoga & Dance',
  '🎓 All Age Groups',
  '📱 Online & Offline Classes',
  '💛 4.9★ Rated',
  '🌺 Kathak & Contemporary',
  '✨ 100+ Happy Students',
  '🏆 6+ Years Experience',
];

export default function MarqueeBanner() {
  const full = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold/20 bg-brown py-3 text-goldLight">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-10 pr-10">
            {full.map((label, i) => (
              <span key={`${dup}-${i}`} className="whitespace-nowrap text-sm font-medium">
                {label}
                <span className="ml-10 text-gold/40">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

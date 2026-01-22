import { useEffect, useState } from "react";

export default function SkillCircle({ name, percentage }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = percentage;
    const duration = 1200;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setValue(Math.round(start));
    }, 16);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative w-28 h-28 rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(#22d3ee ${value * 3.6}deg, rgba(148,163,184,0.2) 0deg)`
        }}
      >
        <div className="absolute w-20 h-20 rounded-full bg-black/80 theme-card flex items-center justify-center shadow-inner">
          <span className="text-xl font-bold text-cyan-400">
            {value}%
          </span>
        </div>
      </div>

      <p className="text-sm font-semibold tracking-wide">
        {name}
      </p>
    </div>
  );
}
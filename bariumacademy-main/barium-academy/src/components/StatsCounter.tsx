import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 1000, label: "Students Enrolled", suffix: "+", accent: false },
  { value: 10000, label: "Classes Completed", suffix: "+", accent: false },
  { value: 98, label: "Satisfaction Rate", suffix: "%", accent: true },
  { value: 200, label: "Expert Tutors", suffix: "+", accent: false },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [started, setStarted] = useState(false);

  return (
    <section
      className="stats-section"
      ref={ref}
      onMouseEnter={() => { setStarted(false); setTimeout(() => setStarted(true), 50); }}
    >
      <div className="stats-inner">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className={`stat-number ${stat.accent ? "stat-accent" : ""}`}>
              {inView && started ? (
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              ) : (
                <span>0{stat.suffix}</span>
              )}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

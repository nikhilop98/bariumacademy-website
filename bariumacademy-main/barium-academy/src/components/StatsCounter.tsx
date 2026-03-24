import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 1000, label: "Students Enrolled", suffix: "+", accent: false },
  { value: 10000, label: "Classes Completed", suffix: "+", accent: false },
  { value: 98, label: "Satisfaction Rate", suffix: "%", accent: true },
  { value: 200, label: "Expert Tutors", suffix: "+", accent: false },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-inner">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className={`stat-number ${stat.accent ? "stat-accent" : ""}`}>
              <CountUp
                start={0}
                end={inView ? stat.value : 0}
                duration={2.5}
                suffix={stat.suffix}
              />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

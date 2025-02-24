import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./index.scss";

export default function CountUpStats() {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div className="countup-container" ref={ref}>
      <h2></h2>

      <div className="countup-stats">
        <div className="countup-item">
          <h3>
            <CountUp start={0} end={8} duration={6} startOnMount={false} delay={2} redraw={true} useEasing={true} play={startCount} />
          +</h3>
          <p>Years Coding</p>
        </div>

        <div className="countup-item">
          <h3>
            <CountUp start={0} end={30} duration={10} startOnMount={false} delay={0} redraw={true} useEasing={true} play={startCount} />+
          </h3>
          <p>Projects Completed</p>
        </div>

        <div className="countup-item">
          <h3>
            <CountUp start={0} end={500} duration={10} startOnMount={false} delay={0} redraw={true} useEasing={true} play={startCount} />+
          </h3>
          <p>LeetCode Solved</p>
        </div>
      </div>
    </div>
  );
}

import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import { motion } from "framer-motion";

const data = [
  { x: 0, y: 2 },
  { x: 1, y: 20 },
  { x: 2, y: 15 },
  { x: 3, y: 25 },
];

const xScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.x))],
  range: [0, 300],
});

const yScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.y))],
  range: [100, 0],
});

const CustomGraph = () => {
  return (
    <svg width={300} height={100}>
      <motion.path
        d={LinePath({
          data,
          x: (d) => xScale(d.x),
          y: (d) => yScale(d.y),
        })?.props.d}
        stroke="blue"
        strokeWidth={2}
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
    </svg>
  );
};

export default CustomGraph;

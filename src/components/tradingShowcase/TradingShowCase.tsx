import { FC } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const traders = [
  {
    name: "BGUSER-SSAL7LSL",
    position: "1/300",
    profit: "+$1.38",
    roi: "+353.28%",
    chart: "/chart.png",
  },
  {
    name: "freezia",
    position: "1/350",
    profit: "+$15.77",
    roi: "+332.45%",
    chart: "/chart.png",
  },
  {
    name: "BGUSER-3E97LLZW",
    position: "11/300",
    profit: "+$35.43",
    roi: "+331.86%",
    chart: "/chart.png",
  },
  {
    name: "Laura#橘喵边",
    position: "3/200",
    profit: "+$12.71",
    roi: "+307.91%",
    chart: "/chart.png",
  },
];

export const CopyTradingShowcase: FC = () => {
  return (
    <section className="w-full text-white py-20 bg-gradient-to-b from-[#001010] to-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Smart Trading Starts with Copy Trading
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Copy top traders and discover strategies to earn like a pro effortlessly.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traders.map((trader, index) => (
            <motion.div
              key={index}
              className="bg-black/20 border border-white/10 rounded-xl p-5 flex flex-col items-start hover:border-cyan-400 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-full text-left">
                <div className="font-medium text-sm mb-1">{trader.name}</div>
                <div className="text-xs text-gray-400 mb-1">{trader.position}</div>
                <div className="text-xs text-right text-gray-400 mb-2">
                  30d copiers profit{" "}
                  <span className="text-white font-semibold">{trader.profit}</span>
                </div>
                <div className="text-2xl font-semibold mb-1">{trader.roi}</div>
                <div className="text-xs text-gray-400 mb-3">30D ROI</div>
                <img src={trader.chart} alt="chart" className="mb-4 w-full" />
                <Button className="w-full bg-transparent text-white hover:bg-gray-100 text-sm border">
                  Copy
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
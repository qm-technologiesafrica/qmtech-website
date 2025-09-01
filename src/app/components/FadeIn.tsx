"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { fadeInY } from "../../../utils/motion";
type Props = {
  children: ReactNode;
  delay?: number;
};
const FadeIn = ({ children, delay }: Props) => {
  return (
    <motion.div
      whileInView={"visible"}
      initial={"hidden"}
      viewport={{ once: true, margin: "100% 0px -200px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

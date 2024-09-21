"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return <TypeAnimation sequence={["Make Websites", 1000, "Write Backends", 1000,"Am Learning More",1000]} wrapper="span" speed={40} className="font-bold lg:text-3xl text-purple-600" repeat={Infinity} />;
};

export default TypingAnimation;
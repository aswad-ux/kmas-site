"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

/** Drop this into any page layout to activate scroll reveal globally. */
export default function ScrollRevealInit() {
  useScrollReveal();
  // useEffect is handled inside the hook; this component just mounts it.
  return null;
}

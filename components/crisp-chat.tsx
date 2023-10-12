"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fe71a9c5-1a88-44ae-9879-75e9e82c45ee");
  }, []);

  return null;
};

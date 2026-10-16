"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Lang } from "@/content/fiki";

type Ctx = { lang: Lang; t: Content; setLang: (l: Lang) => void };

const LangContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "fiki-lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ro");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ro" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  return <LangContext.Provider value={{ lang, t: content[lang], setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

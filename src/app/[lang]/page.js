"use client";

import React from "react";
import { useEffect, useState } from "react";

export default function SpanishPage({ params }) {
  const resolvedParams = React.use(params);
  const { lang } = resolvedParams;

  const [allData, setAllData] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setAllData(json));
  }, []);

  useEffect(() => {
    if (allData && allData.languages) {
      console.log("Data loaded:", allData);
      for (let i = 0; i < allData.languages.length; i++) {
        if (allData.languages[i].code === lang) {
          setSelectedLanguage(allData.languages[i]);
          setLoading(false);
          break;
        }
      }
      setLoading(false);
    }
  }, [allData, lang]);

  return (
    <div className="w-screen h-screen text-white flex flex-col items-center font-[family-name:var(--font-geist-sans)] mt-[20vh]">
      <p className="text-neutral-200 font-bold text-[35px]">{loading ? "Loading..." : selectedLanguage ? selectedLanguage.name : "Language not found"}</p>
      <p className="text-neutral-400 text-[15px] mt-[20px]">{loading ? "" : selectedLanguage ? selectedLanguage.no_content ? "Noch keine Inhalte": "" : ""}</p>
    </div>
  );
}
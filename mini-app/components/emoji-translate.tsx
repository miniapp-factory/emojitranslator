"use client";

import { useState } from "react";

export function EmojiTranslate({
  sentence,
}: {
  sentence: string;
}) {
  const [emojis, setEmojis] = useState<string>("");

  const translate = () => {
    // Simple placeholder translation logic
    const mapping: Record<string, string> = {
      Translate: "🔁",
      this: "🗣️",
      sentence: "📜",
      into: "➡️",
      only: "🤖",
      emojis: "🧩",
    };
    const words = sentence.split(" ");
    const result = words
      .map((w) => mapping[w] ?? w)
      .join(" ");
    setEmojis(result);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={translate}
      >
        Translate
      </button>
      {emojis && (
        <p className="text-4xl" aria-label="Translated emojis">
          {emojis}
        </p>
      )}
    </div>
  );
}

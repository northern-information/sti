import "./App.css";
import { useState } from "react";

const toneIndicators = {
  "/j": "joking",
  "/hj": "half-joking",
  "/s": "sarcastic",
  "/gen": "genuine",
  "/g": "genuine",
  "/srs": "serious",
  "/nsrs": "non-serious",
  "/pos": "positive connotation",
  "/pc": "positive connotation",
  "/neu": "neutral connotation",
  "/neg": "negative connotation",
  "/nc": "negative connotation",
  "/p": "platonic",
  "/r": "romantic",
  "/c": "copypasta",
  "/l": "lyrics",
  "/ly": "lyrics",
  "/lh": "light-hearted",
  "/nm": "not mad",
  "/lu": "a little upset",
  "/nbh":
    "vagueposting or venting, but directed at nobody here (none of your followers)",
  "/nsb": "not subtweeting",
  "/sx": "sexual intent",
  "/x": "sexual intent",
  "/nsx": "non-sexual intent",
  "/nx": "non-sexual intent",
  "/rh": "rhetorical question",
  "/rt": "rhetorical question",
  "/t": "teasing",
  "/ij": "inside joke",
  "/m": "metaphorically",
  "/li": "literally",
  "/hyp": "hyperbole",
  "/f": "fake",
  "/th": "threat",
  "/cb": "clickbait",
};

export default function ToneIndicatorList() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (indicator: string) => {
    navigator.clipboard.writeText(indicator);
    setCopied(indicator);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-black text-[#ffff00] p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Tone Indicators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
        {Object.entries(toneIndicators).map(([indicator, meaning]) => (
          <button
            key={indicator}
            onClick={() => handleCopy(indicator)}
            onKeyDown={(e) => e.key === "Enter" && handleCopy(indicator)}
            className="w-full p-4 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-yellow-400 text-[#ffff00] text-left rounded-lg transition"
            aria-label={`Copy ${indicator} meaning ${meaning}`}
          >
            <span className="font-mono text-lg font-bold">{indicator}</span>
            <span className="block text-gray-300 text-sm">{meaning}</span>
            {copied === indicator && (
              <span className="block text-green-400 text-xs mt-1">Copied!</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

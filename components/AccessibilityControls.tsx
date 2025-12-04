"use client";

import { useEffect, useState } from "react";

export default function AccessibilityControls() {
  const [colorblindMode, setColorblindMode] = useState(false);
  const [readingRuler, setReadingRuler] = useState(false);
  const [focusMode, setFocusMode] = useState(false);

  // Fonte — agora usa slider
  const [fontSize, setFontSize] = useState(100);
  const [fontSliderOpen, setFontSliderOpen] = useState(false);

  const [rulerPosition, setRulerPosition] = useState(0);

  // ---------------------------
  // Carregar valores salvos
  // ---------------------------
  useEffect(() => {
    const savedColorblindMode = localStorage.getItem("colorblindMode") === "true";
    const savedFocusMode = localStorage.getItem("focusMode") === "true";
    const savedFontSize = Number(localStorage.getItem("fontSize") || "100");

    setColorblindMode(savedColorblindMode);
    setFocusMode(savedFocusMode);
    setFontSize(savedFontSize);

    if (savedColorblindMode) document.body.classList.add("colorblind-mode");
    if (savedFocusMode) document.body.classList.add("focus-mode");

    // Aplicar tamanho da fonte
    document.documentElement.style.fontSize = `${savedFontSize}%`;
  }, []);

  // ---------------------------
  // Atualizar fonte ao alterar slider
  // ---------------------------
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem("fontSize", String(fontSize));
  }, [fontSize]);

  // ---------------------------
  // Régua de leitura
  // ---------------------------
  useEffect(() => {
    if (readingRuler) {
      const handleMouseMove = (e: MouseEvent) => {
        setRulerPosition(e.clientY - 20);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [readingRuler]);

  // ---------------------------
  // Toggles
  // ---------------------------

  const toggleColorblindMode = () => {
    const newMode = !colorblindMode;
    setColorblindMode(newMode);
    localStorage.setItem("colorblindMode", String(newMode));
    document.body.classList.toggle("colorblind-mode", newMode);
  };

  const toggleReadingRuler = () => {
    setReadingRuler(!readingRuler);
  };

  const toggleFocusMode = () => {
    const newMode = !focusMode;
    setFocusMode(newMode);
    localStorage.setItem("focusMode", String(newMode));
    document.body.classList.toggle("focus-mode", newMode);
  };

  // ---------------------------
  // RENDER
  // ---------------------------

  return (
    <>
      <div className="fixed right-4 top-20 z-50 flex flex-col gap-2">

        {/* Modo Daltônico */}
        <button
          onClick={toggleColorblindMode}
          className={`${
            colorblindMode ? "bg-accent" : "bg-gray-700"
          } hover:bg-accent/80 text-white p-3 rounded-full shadow-lg transition-all`}
          title="Modo Daltônico"
        >
          👁️
        </button>

        {/* Régua de Leitura */}
        <button
          onClick={toggleReadingRuler}
          className={`${
            readingRuler ? "bg-accent" : "bg-gray-700"
          } hover:bg-accent/80 text-white p-3 rounded-full shadow-lg transition-all`}
          title="Régua de Leitura"
        >
          📏
        </button>

        {/* Controle de Fonte (botão + slider) */}
        <div className="relative">
          <button
            onClick={() => setFontSliderOpen(!fontSliderOpen)}
            className={`${
              fontSliderOpen ? "bg-accent" : "bg-gray-700"
            } hover:bg-accent/80 text-white p-3 rounded-full shadow-lg transition-all`}
            title="Ajustar tamanho da fonte"
          >
            🔤
          </button>

          {/* Slider aparece aqui */}
          {fontSliderOpen && (
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-xl shadow-xl flex items-center gap-3 w-48">
              <span className="text-sm opacity-70">A-</span>

              <input
                type="range"
                min="80"
                max="160"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />

              <span className="text-sm opacity-70">A+</span>
            </div>
          )}
        </div>

        {/* Modo Foco */}
        <button
          onClick={toggleFocusMode}
          className={`${
            focusMode ? "bg-accent" : "bg-gray-700"
          } hover:bg-accent/80 text-white p-3 rounded-full shadow-lg transition-all`}
          title="Modo Foco"
        >
          🎯
        </button>
      </div>

      {/* Régua de Leitura */}
      {readingRuler && (
        <div
          className="reading-ruler"
          style={{ top: `${rulerPosition}px` }}
        />
      )}
    </>
  );
}

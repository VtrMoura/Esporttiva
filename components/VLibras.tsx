"use client";

import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    // não duplica
    if (document.getElementById("vlibras-container")) return;

    // cria container bruto
    const container = document.createElement("div");
    container.id = "vlibras-container";
    container.innerHTML = `
      <div vw class="enabled">
        <div vw-access-button></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    `;
    document.body.appendChild(container);

    // script
    const script = document.createElement("script");
    script.src = "https://plugin.vlibras.gov.br/app/vlibras-plugin.js";
    script.defer = true;
    script.onload = () => {
      // @ts-ignore
      new window.VLibras.Widget("https://plugin.vlibras.gov.br/app");
    };

    document.body.appendChild(script);
  }, []);

  return null;
}

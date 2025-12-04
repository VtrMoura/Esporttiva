"use client";

import Script from "next/script";

export default function VLibras() {
  return (
    <>
      <Script
        src="https://plugin.vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-expect-error
          new window.VLibras.Widget("https://plugin.vlibras.gov.br/app");
        }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div vw class="enabled">
              <div vw-access-button></div>
              <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
              </div>
            </div>
          `,
        }}
      />
    </>
  );
}

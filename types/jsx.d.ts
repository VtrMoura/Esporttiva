declare namespace JSX {
  interface IntrinsicElements {
    // Atributos do VLibras
    "div": React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
      vw?: boolean;
      "vw-access-button"?: boolean;
      "vw-plugin-wrapper"?: boolean;
    };
  }
}

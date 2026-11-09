// Baut interne Links und Bildpfade so, dass sie auch unter einem Unterpfad (base) funktionieren.
export const url = (path: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + path;

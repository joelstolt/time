const MAX_DIMENSION = 1920;
const JPEG_QUALITY = 0.82;

export async function compressImage(file) {
  if (!file || !file.type || !file.type.startsWith("image/")) return file;
  try {
    const bitmap = await createImageBitmap(file).catch(() => null);
    let width, height, source;
    if (bitmap) {
      width = bitmap.width;
      height = bitmap.height;
      source = bitmap;
    } else {
      const url = URL.createObjectURL(file);
      try {
        const img = await new Promise((resolve, reject) => {
          const el = new Image();
          el.onload = () => resolve(el);
          el.onerror = reject;
          el.src = url;
        });
        width = img.naturalWidth;
        height = img.naturalHeight;
        source = img;
      } finally {
        URL.revokeObjectURL(url);
      }
    }
    if (!width || !height) return file;
    const scale = Math.min(1, MAX_DIMENSION / Math.max(width, height));
    const targetW = Math.round(width * scale);
    const targetH = Math.round(height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(source, 0, 0, targetW, targetH);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY));
    if (!blob) return file;
    if (blob.size >= file.size && file.type === "image/jpeg") return file;
    const baseName = (file.name || "bild").replace(/\.[^.]+$/, "");
    return new File([blob], `${baseName}.jpg`, { type: "image/jpeg", lastModified: Date.now() });
  } catch {
    return file;
  }
}

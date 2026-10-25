const SECRET_KEY = import.meta.env.VITE_ENCRYPT_KEY || "";

function xorWithKey(text: string, key: string): string {
  return text
    .split("")
    .map((char, index) => {
      const keyChar = key.charAt(index % key.length);
      return String.fromCharCode(char.charCodeAt(0) ^ keyChar.charCodeAt(0));
    })
    .join("");
}

export function encryption(text: string, expiresInSeconds = 3600): string {
  const expiresAt = Date.now() + expiresInSeconds * 1000;
  const payload = JSON.stringify({ text, expiresAt });
  const xorResult = xorWithKey(payload, SECRET_KEY);
  const utf8Bytes = new TextEncoder().encode(xorResult);
  return btoa(String.fromCharCode(...utf8Bytes));
}

export function decryption(base64: string): string | null {
  try {
    const binaryString = atob(base64);
    const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0));
    const xorResult = new TextDecoder().decode(bytes);
    const decrypted = xorWithKey(xorResult, SECRET_KEY);

    const { text, expiresAt } = JSON.parse(decrypted);
    if (Date.now() > expiresAt) {
      return null;
    }

    return text;
  } catch (err) {
    return null;
  }
}

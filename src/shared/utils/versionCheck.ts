const CURRENT_VERSION = import.meta.env.VITE_NODE_BUILD_VERSION as string;
const VERSION_KEY = "version";

export function checkVersionAndReload(): void {
  const storedVersion = localStorage.getItem(VERSION_KEY);

  if (storedVersion && storedVersion !== CURRENT_VERSION) {
    console.log("🔄 New version detected. Reloading...");
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    window.location.reload();
  } else if (!storedVersion) {
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
  }
}

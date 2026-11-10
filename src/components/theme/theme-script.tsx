/** localStorage key for the theme choice ("light" | "dark"; absent = follow the system). */
export const THEME_STORAGE_KEY = "atajolab-theme";

/**
 * Runs before the first paint (inline in <head>) and sets the `.dark` class,
 * so the page never flashes the wrong theme. Kept tiny and dependency-free.
 */
const script = `(function(){try{var c=localStorage.getItem("${THEME_STORAGE_KEY}");var d=c==="dark"||(c!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

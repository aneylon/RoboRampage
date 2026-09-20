import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
    >
      {isDark ? (
        <>
          <span class="material-symbols-outlined">dark_mode</span>
        </>
      ) : (
        <>
          <span class="material-symbols-outlined">light_mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;

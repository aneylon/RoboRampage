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
          <span className="material-symbols-outlined">dark_mode</span>
        </>
      ) : (
        <>
          <span className="material-symbols-outlined">light_mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;

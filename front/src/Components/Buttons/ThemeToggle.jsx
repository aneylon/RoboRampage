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
      {isDark ? <>(</> : <>*</>}
    </button>
  );
};

export default ThemeToggle;

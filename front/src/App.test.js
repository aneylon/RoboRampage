import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app page", () => {
  render(<App />);
  const textElement = screen.getByText(/some text/i);
  expect(textElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

test("renders title with text", () => {
  render(<Menu />);
  const menuElement = screen.getByText(/menu/i);
  expect(menuElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders title with text", () => {
  render(<Button text="Start New" />);
  const titleElement = screen.getByText(/start new/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders error text", () => {
  render(<Button />);
  const titleElement = screen.getByText(/please enter/i);
  expect(titleElement).toBeInTheDocument();
});

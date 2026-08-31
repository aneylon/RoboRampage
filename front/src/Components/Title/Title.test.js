import { render, screen } from "@testing-library/react";
import Title from "./Title";

test("renders title with text", () => {
  render(<Title text="Robo Rampage" />);
  const titleElement = screen.getByText(/robo rampage/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders error text", () => {
  render(<Title />);
  const titleElement = screen.getByText(/please enter/i);
  expect(titleElement).toBeInTheDocument();
});

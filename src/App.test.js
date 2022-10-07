import {render, screen} from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText("Learn React");
//   expect(linkElement).toBeInTheDocument();
// });
// test("1renders learn react link", () => {
//   throw new Error("tests failed!!");
// });

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", {name: /learn react/i});
  expect(linkElement).toBeInTheDocument();
});

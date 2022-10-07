import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  let colorButton = screen.getByRole("button", {name: "Change to blue"});
  expect(colorButton).toHaveStyle({backgroundColor: "red"});
});

// test("button has correct initial text", () => {
//   // render(<App/>)
// });

test("button turns blue when clicked", () => {
  render(<App />);
  let colorButton = screen.getByRole("button", {name: "Change to blue"});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: "blue"});

  expect(colorButton.textContent).toBe("Change to red");
});

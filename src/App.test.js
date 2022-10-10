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

test("initial condition", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {name: "Change to blue"});

  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");

  expect(checkBox).not.toBeChecked();
});

test("Chekcbox disables button in first click and enables on second click", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});

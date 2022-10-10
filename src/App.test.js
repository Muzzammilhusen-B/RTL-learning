import {fireEvent, render, screen} from "@testing-library/react";
import App, {replaceCamelWithSpaces} from "./App";

test("button has correct initial color", () => {
  render(<App />);
  let colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toHaveStyle({backgroundColor: "MediumVioletRed"});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: "MidnightBlue"});

  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

// test("button has correct initial text", () => {
//   // render(<App/>)
// });

// test("button turns blue when clicked", () => {
//   render(<App />);
//   let colorButton = screen.getByRole("button", {name: "Change to blue"});

//   fireEvent.click(colorButton);

//   expect(colorButton).toHaveStyle({backgroundColor: "blue"});

//   expect(colorButton.textContent).toBe("Change to red");
// });

// test("initial condition", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", {name: "Change to blue"});

//   expect(colorButton).toBeEnabled();

//   const checkBox = screen.getByRole("checkbox");

//   expect(checkBox).not.toBeChecked();
// });

// test("Chekcbox disables button in first click and enables on second click", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", {name: "Change to blue"});
//   const checkBox = screen.getByRole("checkbox", {name: "Disable button"});

//   fireEvent.click(checkBox);
//   expect(colorButton).toBeDisabled();

//   fireEvent.click(checkBox);
//   expect(colorButton).toBeEnabled();
// });

// test("Disable button has gray backgroud and reverts to red", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", {name: "Change to blue"});
//   const checkBox = screen.getByRole("checkbox", {name: "Disable button"});

//   fireEvent.click(checkBox);
//   expect(colorButton).toHaveStyle("background-color:gray");

//   //enable button
//   fireEvent.click(checkBox);
//   expect(colorButton).toHaveStyle("background-color:red");
// });

// test("Disable button has gray backgroud and reverts to blue", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", {name: "Change to blue"});
//   const checkBox = screen.getByRole("checkbox", {name: "Disable button"});

//   //change button to blue
//   fireEvent.click(colorButton);

//   //disable button
//   fireEvent.click(checkBox);
//   expect(colorButton).toHaveStyle("background-color:gray");

//   //enable button
//   fireEvent.click(checkBox);
//   expect(colorButton).toHaveStyle("background-color:blue");
// });

describe("spaces before  camael-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

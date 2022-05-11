import React from "react";
import {
  fireEvent,
  getByLabelText,
  render,
  screen,
} from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import Login from "../Login";

describe("Login", () => {



  test("login form should be in a document", () => {
    const component = render(<Login />);
    const labelNods = component.getByText("Your Email");
    expect(labelNods).toBeInTheDocument();
    // console.log(component);
  });

  test("email field should have label", () => {
    const component = render(<Login />);
    const emailInputNode = component.getByLabelText("Your Email");
    expect(emailInputNode).toHaveAttribute("name", "email");

    //...........another way............................
    // render(<Login/>);
    // const emailInputNode = screen.getByLabelText(/Your Email/i);
    // expect(emailInputNode).toHaveAttribute("name", "email");
  });

  test("password field should have attribute type password", () => {
    const component = render(<Login />);
    const passwordInput = component.getByLabelText("Password");
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  test("password field should have label", () => {
    const component = render(<Login />);
    const emailInputNode = component.getByLabelText("Password");
    expect(emailInputNode).toHaveAttribute("name", "password");
  });

  test("email should except text as input field", ()=>{
    const {getByLabelText} = render(<Login/>);
    const emailInputfillNode = getByLabelText("Your Email");
    expect(emailInputfillNode.value).toMatch("");
    fireEvent.change(emailInputfillNode, {target: {value: "abcdef@gmail.com"}});
    expect(emailInputfillNode.value).toMatch("abcdef@gmail.com");

  })

  test("password should except text as input field", ()=>{
    const {getByLabelText} = render(<Login/>);
    const passswordInputfillNode = getByLabelText("Password");
    expect(passswordInputfillNode.value).toMatch("");
    fireEvent.change(passswordInputfillNode, {target: {value: "abhisahjg123"}});
    expect(passswordInputfillNode.value).toMatch("abhisahjg123");

  })

  // test('when submit the login form should fire onClick event at once', () => {
  //   const handleClilck = jest.fn();
  //   const {getByText} = render(<Login/>);
  //   const buttonNode = getByText(/SignIn/i);
  //   fireEvent.click(buttonNode);
  //   // fireEvent.click(screen.getByText(/SignIn/i));
  //   expect(handleClilck).toHaveBeenCalled();

  // });




});

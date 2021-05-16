import React from "react";
import { render } from "@testing-library/react";
import { LoginWithAuth } from "./Login";

describe("Login", () => {
  it("render correctly", () => {
    const { getByLabelText } = render(<LoginWithAuth />);

    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
  })
})

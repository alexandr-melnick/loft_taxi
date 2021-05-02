import React from "react";
import {render} from "@testing-library/react";
import {Home} from "./Login";

describe("Home", () => {
    it("render correctly", () => {
        const {getByLabelText} = render(<Home />);

        expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
    })
})

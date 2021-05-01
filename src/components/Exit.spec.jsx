import React from "react";
import {Exit} from "./Exit";
import {render} from '@testing-library/react';

describe("Exit", () => {
    it("renders correctly", () => {
        const {container} = render(<Exit />)
        expect(container.innerHTML).toMatch("Exit")
    })
})

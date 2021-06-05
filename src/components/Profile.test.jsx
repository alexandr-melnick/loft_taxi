import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { WithAuthProfile } from "./Profile";
import { createStore } from "redux";

const store = createStore(
    (state) => state,
    {
        auth: {
            usercard: {
                cardNumber: "0000",
                expiryDate: "00/00",
                cardName: "card name",
                cvc: "000"
            }
        },
        register: { token: "testToken" }
    }
);

jest.mock("mapbox-gl", () => ({
    Map: jest.fn(() => ({
        remove: () => { }
    })),
}));

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

jest.mock('react-hook-form', () => ({
    ...jest.requireActual('react-hook-form'),
    useForm: jest.fn(),
}))

describe("Profile", () => {
    const setState = jest.fn();
    const error = "errorMessage";
    beforeEach(() => {
        useState.mockImplementation(init => [error, setState])
        useForm.mockImplementation(init => ({ register: () => ({ ref: jest.fn() }), handleSubmit: jest.fn() }))
    });

    it('render correctly', () => {

        const { container } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <WithAuthProfile />
                </Provider>
            </BrowserRouter>
        )
        expect(container).toBeTruthy();
        expect(container.querySelector("div")).toHaveClass("profile");
        expect(container.querySelector("form")).toHaveClass("card-form");        
        expect(container.querySelector("h2")).toHaveTextContent("Profile");        
        expect(container.querySelector(".test-error")).toHaveTextContent(error);      
    });
})

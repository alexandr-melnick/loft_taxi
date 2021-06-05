import React from "react";
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

describe("Profile", () => {
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
    });
})

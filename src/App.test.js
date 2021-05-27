import React from "react";
import { render } from '@testing-library/react';
import { WithAuthApp } from './App';

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe("App", () => {
  it('render correctly', () => {
    const { getByTestId } = render(<WithAuthApp/>);
    // expect(getByTestId('main-section')).toBeInTheDocument();
    expect(getByTestId('login-section')).toBeInTheDocument();
  });
})

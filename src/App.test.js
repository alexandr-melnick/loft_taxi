import React from "react";
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./components/Home', () => ({Home: () => <div>Home Component</div>}));
jest.mock('./components/Profile', () => ({Profile: () => <div>Profile Component</div>}));
jest.mock('./components/About', () => ({About: () => <div>About Component</div>}));

describe("App", () => {
  it("renders correctly", () => {
    const {container} = render(<App />);
    expect(container.innerHTML).toMatch("Home Component");
  })

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page ", () => {
      const {getByText, container} = render(<App />);

      fireEvent.click(getByText('About'));
      expect(container.innerHTML).toMatch('About Component');
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch('Profile Component');
    })
  });
})

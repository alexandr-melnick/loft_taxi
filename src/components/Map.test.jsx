import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Map } from "./Map";
import { createStore } from "redux";

const store = createStore(
  (state) => state,
  {
    addressesList: { addresses: {} },
    route: { coords: []}
  }
);

// jest.mock("mapbox-gl", () => ({
//   Map: jest.fn(() => ({
//     remove: () => {}
//   })),
// }));

jest.mock('mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn(),
  })),
  NavigationControl: jest.fn(),
}));

// const componentWillUnmount = jest.spyOn(MapConnected.prototype, 'componentWillUnmount')
// const componentWillUnmount = jest.spyOn(MapConnected.instance(), 'componentWillUnmount');

describe("Map", () => {
  it('render correctly', () => {
//     class MapMock extends Map {
//       constructor(props) {
//         super(props)
//         this.componentDidMount = jest.fn()
//         this.componentWillUnmount = jest.fn()
//         this.state = { map : { remove: jest.fn() } }
//       }
  
//       render() {
//         return (<Map />)
//       }
//     }
//     const { container } = render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <MapMock />
//         </Provider>
//       </BrowserRouter>
//     )
//     // expect(container).toBeTruthy();
    
  });
})

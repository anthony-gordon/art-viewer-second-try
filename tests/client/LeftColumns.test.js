import React from "react";
import { shallow, mount } from "enzyme";
//shallow - unit testing this particular file and what it does

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import LeftColumns from "../../client/components/LeftColumns.jsx";
//need to write {} to get the unconnected (specific) version of App
//import App would be the connected default export of App.jsx
import "./setup-dom";

const wrapper = mount(<LeftColumns />);

test("renders the React component", () => {
  expect(wrapper.length).toEqual(1);
});

test("Text renders on App", () => {
  expect(wrapper.find("#viewallbackgroundsbutton").text()).toBe("View all");
  expect(wrapper.find("#viewallartworkssbutton").text()).toBe("View all");
});

//INIT
test("Test Suite Working", () => {
  expect(true).toBe(true);
});

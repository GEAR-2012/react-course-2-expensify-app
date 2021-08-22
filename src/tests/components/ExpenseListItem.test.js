import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

configure({ adapter: new Adapter() });

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

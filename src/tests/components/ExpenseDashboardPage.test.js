import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

configure({ adapter: new Adapter() });

test("should render ExpenseDashboardPage correctly", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});

import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ExpensesSummary } from "../../components/ExpensesSummary";

configure({ adapter: new Adapter() });

test("should correctly render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2355634563} />);
  expect(wrapper).toMatchSnapshot();
});

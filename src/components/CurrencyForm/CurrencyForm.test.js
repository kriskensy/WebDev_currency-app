import { cleanup, render, screen } from "@testing-library/react";
import CurrencyForm from "./CurrencyForm";
import userEvent from "@testing-library/user-event";

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}}/>);
  });
  it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();

    render(<CurrencyForm action={action}/>); //render component

    const submitButton = screen.getByText('Convert'); //find "convert" button

    //find field elems
    const amountField = screen.getByTestId('amount');
    const selectFromField = screen.getByTestId('select-from');
    const selectToField = screen.getByTestId('select-to');

    const testCases = [
      { amount: 100, from: 'PLN', to: 'USD' },
      { amount: 20, from: 'USD', to: 'PLN' },
      { amount: 200, from: 'PLN', to: 'USD' },
      { amount: 354, from: 'USD', to: 'PLN' },
    ];

    for(const test of testCases) {
      //clear amountField before every testCase / iteration
      userEvent.clear(amountField);

      userEvent.type(amountField, String(test.amount));
      userEvent.selectOptions(selectFromField, test.from);
      userEvent.selectOptions(selectToField, test.to);

      userEvent.click(submitButton); //simulate user click on "convert" button
  
      expect(action).toHaveBeenCalledWith({ amount: test.amount, from: test.from, to: test.to });
    }

    //check if action callback was called once for every iteration
    expect(action).toHaveBeenCalledTimes(testCases.length);

    cleanup();
  });
});
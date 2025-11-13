import { render, screen } from "@testing-library/react";
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
    userEvent.click(submitButton); //simulate user click on "convert" button
    expect(action).toHaveBeenCalledTimes(1); //check if action callback was called once
  })
});
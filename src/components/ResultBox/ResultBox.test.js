import { cleanup, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ResultBox from "./ResultBox";

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox amount={35} from="PLN" to="USD"/>)
  });
  it('should render proper info about conversion PLN -> USD', () => {
    //move render in to loop
    // render(<ResultBox from="PLN" to="USD" amount={35}/>);
    // const conversionOutput = screen.getByTestId('conversionOutput');

    const testCases = [
      {amount: 35, from: 'PLN', to: 'USD', expected: 'PLN 35.00 = $10.00'},
      {amount: 70, from: 'PLN', to: 'USD', expected: 'PLN 70.00 = $20.00'},
      {amount: 100, from: 'PLN', to: 'USD', expected: 'PLN 100.00 = $28.57'},
      {amount: 200, from: 'PLN', to: 'USD', expected: 'PLN 200.00 = $57.14'},
    ];

    for(const test of testCases) {
      render(<ResultBox from={test.from} to={test.to} amount={test.amount}/>);

      const conversionOutput = screen.getByTestId('conversionOutput');
      expect(conversionOutput).toHaveTextContent(test.expected);
      cleanup();
    }
  });
  it('should render proper info about conversion USD -> PLN', () => {

    const testCases = [
      {amount: 100, from: 'USD', to: 'PLN', expected: '$100.00 = PLN 350.00'},
      {amount: 200, from: 'USD', to: 'PLN', expected: '$200.00 = PLN 700.00'},
      {amount: 5, from: 'USD', to: 'PLN', expected: '$5.00 = PLN 17.50'},
      {amount: 63, from: 'USD', to: 'PLN', expected: '$63.00 = PLN 220.50'},
    ]

    for(const test of testCases) {
      render(<ResultBox from={test.from} to={test.to} amount={test.amount}/>);

      const conversionOutput = screen.getByTestId('conversionOutput');
      expect(conversionOutput).toHaveTextContent(test.expected);
      cleanup();
    }
  });
});
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ResultBox from "./ResultBox";

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox amount={35} from="PLN" to="USD"/>)
  });
  it('should render proper info about conversion PLN -> USD', () => {
    render(<ResultBox from="PLN" to="USD" amount={35}/>);
    const conversionOutput = screen.getByTestId('conversionOutput');
    expect(conversionOutput).toHaveTextContent('PLN 35.00 = $10.00');
  });
});
import { render } from "@testing-library/react";
import ResultBox from "./ResultBox";

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox amount={56} from="PLN" to="USD"/>)
  });
});
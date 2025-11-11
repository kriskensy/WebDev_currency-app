import { convertPLNToUSD } from "../convertPLNToUSD";

describe('ConvertPLNToUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('4')).toBeNaN();
    expect(convertPLNToUSD('rto')).toBeNaN();
    expect(convertPLNToUSD('/')).toBeNaN();
    expect(convertPLNToUSD('h')).toBeNaN();
  });
});
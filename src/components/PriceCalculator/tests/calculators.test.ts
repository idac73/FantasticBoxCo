import { expect } from 'chai';
import { PriceCalculatorDataProps } from '../constants';
import { sizeCalculation, totalCalculation } from '../calculators';

const mockData: PriceCalculatorDataProps = {
  boxLength: 0.5,
  height: 0.5,
  grade: 'C',
  optionalExtras: ['handles'],
  quality: '3-color',
  quantity: 100,
  step: 5,
  width: 0.5
};

describe('sizeCalculation for square 0.5mm boxes', () => {
  it('should calculate correctly', () => {
    expect(sizeCalculation(mockData)).to.equal(1.5);
  });
});

describe('totalCalculation for x100, grade C, 3 color square 0.5mm boxes', () => {
  it('should calculate correctly', () => {
    expect(totalCalculation(mockData)).to.equal(47.5);
  });
});

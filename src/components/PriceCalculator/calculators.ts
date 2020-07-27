import { PriceCalculatorDataProps } from './constants';

export const sizeCalculation = (pc: PriceCalculatorDataProps) => {
  const { height, boxLength, width } = pc;
  let size =
    boxLength * height * 2 + height * width * 2 + width * boxLength * 2;
  return size;
};

export const totalCalculation = (pc: PriceCalculatorDataProps) => {
  const { grade, optionalExtras, quality, quantity } = pc;
  let size = sizeCalculation(pc);
  let gradeCalculation: number = 0;
  let extrasCalculation: number = 0;
  let qualityCalulation: number = 0;
  let total = 0;
  switch (grade) {
    case 'A':
      gradeCalculation = size * 0.2;
      break;
    case 'B':
      gradeCalculation = size * 0.1;
      break;
    case 'C':
      gradeCalculation = size * 0.05;
      break;
    default:
      gradeCalculation = 0;
      break;
  }
  gradeCalculation = gradeCalculation * quantity;

  switch (quality) {
    case '3-color':
      qualityCalulation = quantity * size * 0.2;
      break;
    case '2-color':
      qualityCalulation = quantity * size * 0.1;
      break;
    case 'black-only':
      qualityCalulation = quantity * size * 0.05;
      break;
    case 'no-printing':
      qualityCalulation = 0;
      break;
    default:
      qualityCalulation = 0;
      break;
  }

  if (optionalExtras.includes('handles')) {
    extrasCalculation = quantity * 0.1;
  }

  if (optionalExtras.includes('reinforced-bottom')) {
    extrasCalculation = extrasCalculation + quantity * 0.05;
  }

  total = gradeCalculation + qualityCalulation + extrasCalculation;

  if (quality === 'FantasticBoxCo-branding') {
    total = total - total * 0.05;
  }

  return total;
};

export interface PriceCalculatorDataProps {
  boxLength: number;
  height: number;
  grade: 'A' | 'B' | 'C' | '';
  optionalExtras: string[];
  quality:
    | '3-color'
    | '2-color'
    | 'black-only'
    | 'no-printing'
    | 'FantasticBoxCo-branding'
    | '';
  quantity: number;
  step: number;
  width: number;
}

export interface PriceCalculatorFormProps {
  formData: PriceCalculatorDataProps;
  handleFormElementChange?: any;
  handleStepNavStep?: any;
  handleSequentialStep?: any;
}

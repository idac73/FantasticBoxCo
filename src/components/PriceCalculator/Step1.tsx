import React from 'react';
import { PriceCalculatorFormProps } from './constants';

export const Step1: React.FC<PriceCalculatorFormProps> = ({
  formData,
  handleFormElementChange,
  handleSequentialStep
}) => {
  const { boxLength, height, quantity, width } = formData;
  const proceedEnabled =
    height > 0 && boxLength > 0 && quantity > 0 && width > 0;
  return (
    <div id="step-1" className="content-step">
      <h2>Step 1 - Dimensions &amp; Quantity</h2>

      <p className="intro">
        Enter the width, height, length and quantity of the box(es) you require.
      </p>

      <div className="form-row">
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          name="width"
          id="width"
          value={width}
          min="0"
          step="0.01"
          onChange={handleFormElementChange}
        />
        <span style={{ color: '#999', marginLeft: '0.25em' }}>m</span>
      </div>

      <div className="form-row">
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          name="height"
          id="height"
          value={height}
          min="0"
          step="0.01"
          onChange={handleFormElementChange}
        />
        <span style={{ color: '#999', marginLeft: '0.25em' }}>m</span>
      </div>

      <div className="form-row">
        <label htmlFor="boxLength">Length:</label>
        <input
          type="number"
          name="boxLength"
          id="boxLength"
          value={boxLength}
          min="0"
          step="0.01"
          onChange={handleFormElementChange}
        />
        <span style={{ color: '#999', marginLeft: '0.25em' }}>m</span>
      </div>

      <div className="form-row">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          min="0"
          step="1"
          onChange={handleFormElementChange}
        />
        <span style={{ color: '#999', marginLeft: '0.25em' }}>m</span>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-primary btn-next"
          disabled={!proceedEnabled}
          onClick={() => {
            handleSequentialStep('next');
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;

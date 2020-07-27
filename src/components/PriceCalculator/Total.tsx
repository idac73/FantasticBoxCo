import React from 'react';
import { totalCalculation } from './calculators';
import { PriceCalculatorFormProps } from './constants';

export const Total: React.FC<PriceCalculatorFormProps> = ({
  formData,
  handleSequentialStep
}) => {
  const {
    boxLength,
    height,
    grade,
    optionalExtras,
    quality,
    quantity,
    width
  } = formData;
  return (
    <div id="total-cost" className="content-step">
      <h2>Total Cost</h2>

      <dl className="breakdown">
        <dt>Dimensions &amp; Quantity:</dt>
        <dd>
          {quantity} &times; {width}(W)&times;{height}(H)&times;{boxLength}
          (L)
        </dd>

        <dt>Cardboard Grade:</dt>
        <dd>{grade} grade</dd>

        <dt>Print Quality:</dt>
        <dd>
          {quality &&
            `${quality[0].toUpperCase()}${quality.slice(1).replace('-', ' ')}`}
        </dd>

        <dt>Optional Extras:</dt>
        <dd>
          <ol>
            {optionalExtras.includes('handles') && <li>Handles</li>}
            {optionalExtras.includes('reinforced-bottom') && (
              <li>Reinforced bottoms</li>
            )}
          </ol>
        </dd>

        <dt>Total Cost:</dt>
        <dd>${totalCalculation(formData).toFixed(2)}</dd>
      </dl>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-back"
          onClick={() => {
            handleSequentialStep('prev');
          }}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default Total;

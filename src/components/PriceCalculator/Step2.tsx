import React from 'react';
import { sizeCalculation } from './calculators';
import { PriceCalculatorFormProps } from './constants';

export const Step2: React.FC<PriceCalculatorFormProps> = ({
  formData,
  handleFormElementChange,
  handleSequentialStep
}) => {
  const { grade } = formData;
  const enabledGradeC = sizeCalculation(formData) < 2;
  const proceedEnabled = grade !== '';
  return (
    <div id="step-2" className="content-step">
      <h2>Step 2 - Cardboard Grade</h2>

      <p className="intro">
        <strong>FantasticBoxCo</strong> offer a variety of grades of cardboard,
        each altering the price per m<sup>2</sup>:
      </p>

      <ol className="btn-radios-list">
        <li>
          <label>
            <input
              type="radio"
              name="cardboard-grade"
              value="A"
              onChange={handleFormElementChange}
              checked={grade === 'A' ? true : false}
            />
            <span className="btn btn-radio">
              A Grade
              <br />
              $0.20 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="cardboard-grade"
              value="B"
              onChange={handleFormElementChange}
              checked={grade === 'B' ? true : false}
            />
            <span className="btn btn-radio">
              B Grade
              <br />
              $0.10 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label
            style={
              !enabledGradeC
                ? { opacity: 0.5, pointerEvents: 'none' }
                : { opacity: 1, pointerEvents: 'inherit' }
            }
          >
            <input
              type="radio"
              name="cardboard-grade"
              value="C"
              onChange={handleFormElementChange}
              checked={grade === 'C' ? true : false}
              disabled={!enabledGradeC}
            />
            <span className="btn btn-radio">
              C Grade
              <br />
              $0.05 m<sup>2</sup>
            </span>
          </label>
        </li>
      </ol>

      <div
        className="error"
        style={!enabledGradeC ? { display: 'block' } : { display: 'none' }}
      >
        Your order is for boxes with area that exceeds 2 m<sup>2</sup>. In this
        case the grade C cardboard is not an option.
      </div>

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

export default Step2;

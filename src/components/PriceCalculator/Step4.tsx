import React from 'react';
import { PriceCalculatorFormProps } from './constants';

export const Step4: React.FC<PriceCalculatorFormProps> = ({
  formData,
  handleFormElementChange,
  handleSequentialStep
}) => {
  const { grade, optionalExtras, quality } = formData;
  const enabledGradeA = grade === 'A';
  const proceedEnabled = quality !== '';
  return (
    <div id="step-4" className="content-step">
      <h2>Step 4 - Optional Extras</h2>
      <ol className="btn-radios-list">
        <li>
          <label>
            <input
              type="checkbox"
              name="optional-extras"
              value="handles"
              onChange={handleFormElementChange}
              checked={optionalExtras.includes('handles')}
            />
            <span className="btn btn-radio">
              Handles
              <br />
              $0.10 per box
            </span>
          </label>
        </li>
        <li>
          <label
            style={
              !enabledGradeA
                ? { opacity: 0.5, pointerEvents: 'none' }
                : { opacity: 1, pointerEvents: 'inherit' }
            }
          >
            <input
              type="checkbox"
              name="optional-extras"
              value="reinforced-bottom"
              onChange={handleFormElementChange}
              checked={optionalExtras.includes('reinforced-bottom')}
              disabled={!enabledGradeA}
            />
            <span className="btn btn-radio">
              Reinforced bottom
              <br />
              $0.05 per box
              <br />
              <small>(only available with grade A cardboard)</small>
            </span>
          </label>
        </li>
      </ol>
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
          Finish
        </button>
      </div>
    </div>
  );
};

export default Step4;

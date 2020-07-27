import React from 'react';
import { PriceCalculatorFormProps } from './constants';

export const Step3: React.FC<PriceCalculatorFormProps> = ({
  formData,
  handleFormElementChange,
  handleSequentialStep
}) => {
  const { quality } = formData;
  const proceedEnabled = quality !== '';
  return (
    <div id="step-3" className="content-step">
      <h2>Step 3 - Print Quality</h2>

      <p className="intro">
        A variety of printing options are available for any branding / logos
        which are required:
      </p>

      <ol className="btn-radios-list">
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value="3-color"
              onChange={handleFormElementChange}
            />
            <span className="btn btn-radio">
              3 colors
              <br />
              $0.20 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value="2-color"
              onChange={handleFormElementChange}
            />
            <span className="btn btn-radio">
              2 colors
              <br />
              $0.10 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value="black-only"
              onChange={handleFormElementChange}
            />
            <span className="btn btn-radio">
              Black only
              <br />
              $0.05 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value="no-printing"
              onChange={handleFormElementChange}
            />
            <span className="btn btn-radio">
              No printing
              <br />
              $0.00
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value="FantasticBoxCo-branding"
              onChange={handleFormElementChange}
            />
            <span className="btn btn-radio">
              <strong>FantasticBoxCo</strong> branding
              <br />
              5% discount on total price
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
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;

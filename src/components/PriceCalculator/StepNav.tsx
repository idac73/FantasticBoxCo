import React from 'react';
import { totalCalculation } from './calculators';
import { PriceCalculatorFormProps } from './constants';

export const StepNav: React.FC<PriceCalculatorFormProps> = ({
  formData,
  handleStepNavStep
}) => {
  const {
    boxLength,
    height,
    grade,
    optionalExtras,
    quality,
    quantity,
    step,
    width
  } = formData;
  return (
    <aside>
      <ul className="progress">
        <li>
          <a
            href="#step-1"
            className={step === 1 ? 'step step-1 is-active' : 'step step-1'}
            onClick={(e: any) => {
              e.preventDefault();
              handleStepNavStep(1);
            }}
          >
            <div className="step-number">1</div>
            <h3 className="step-heading">Dimensions &amp; Quantity</h3>
            <dl>
              <dt>Width:</dt>
              <dd>{width}m</dd>
              <dt>Height:</dt>
              <dd>{height}m</dd>
              <dt>Length:</dt>
              <dd>{boxLength}m</dd>
              <dt>Quantity:</dt>
              <dd>{quantity}</dd>
            </dl>
          </a>
        </li>
        <li>
          <a
            href="#step-2"
            className={step === 2 ? 'step step-2 is-active' : 'step step-2'}
            onClick={(e: any) => {
              e.preventDefault();
              handleStepNavStep(2);
            }}
          >
            <div className="step-number">2</div>
            <h3 className="step-heading">Cardboard Grade</h3>
            <span className="step-value">{grade ? `${grade} Grade` : '-'}</span>
          </a>
        </li>
        <li>
          <a
            href="#step-3"
            className={step === 3 ? 'step step-3 is-active' : 'step step-3'}
            onClick={(e: any) => {
              e.preventDefault();
              handleStepNavStep(3);
            }}
          >
            <div className="step-number">3</div>
            <h3 className="step-heading">Print Quality</h3>
            <span className="step-value">
              {quality
                ? `${quality[0].toUpperCase()}${quality
                    .slice(1)
                    .replace('-', ' ')}`
                : '-'}
            </span>
          </a>
        </li>
        <li>
          <a
            href="#step-4"
            className={step === 4 ? 'step step-4 is-active' : 'step step-4'}
            onClick={(e: any) => {
              e.preventDefault();
              handleStepNavStep(4);
            }}
          >
            <div className="step-number">4</div>
            <h3 className="step-heading">Optional Extras</h3>
            <span className="step-value">
              {optionalExtras.length > 0 ? (
                <ol>
                  {optionalExtras.includes('handles') && <li>Handles</li>}
                  {optionalExtras.includes('reinforced-bottom') && (
                    <li>Reinforced bottoms</li>
                  )}
                </ol>
              ) : (
                '-'
              )}
            </span>
          </a>
        </li>
        <li>
          <a
            href="#total-cost"
            className="step step-total-cost"
            onClick={(e: any) => {
              e.preventDefault();
              handleStepNavStep(5);
            }}
          >
            <h3 className="step-total-cost-heading">Total Cost</h3>
            <div className="step-total-cost-value">
              &#36;
              {step === 5 ? totalCalculation(formData).toFixed(2) : '0.00'}
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default StepNav;

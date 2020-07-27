import { AppContainer } from 'components/AppContainer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PriceCalculatorDataProps } from 'components/PriceCalculator/constants';
import StepNav from 'components/PriceCalculator/StepNav';
import Step1 from 'components/PriceCalculator/Step1';
import Step2 from 'components/PriceCalculator/Step2';
import Step3 from 'components/PriceCalculator/Step3';
import Step4 from 'components/PriceCalculator/Step4';
import Total from 'components/PriceCalculator/Total';
import React, { useEffect, useState } from 'react';
import { sizeCalculation } from 'components/PriceCalculator/calculators';

import 'components/PriceCalculator/styles.css';

export const PriceCalculator: React.FC<PriceCalculatorDataProps> = ({
  boxLength = 0,
  height = 0,
  grade = '',
  optionalExtras = [],
  quality = '',
  quantity = 0,
  step = 1,
  width = 0
}) => {
  const [pc, setPC] = useState<PriceCalculatorDataProps>({
    boxLength,
    height,
    grade,
    optionalExtras,
    quality,
    quantity,
    step,
    width
  });

  const handleFormElementChange = (e: React.FormEvent<HTMLInputElement>) => {
    let myProp = e.currentTarget.name;
    const evalValue = e.currentTarget.value;
    if (myProp.includes('grade')) {
      myProp = 'grade';
    }
    if (myProp.includes('quality')) {
      myProp = 'quality';
    }
    if (myProp.includes('optional') && evalValue.includes('handles')) {
      myProp = 'optionalExtras';
    }
    if (
      myProp.includes('optional') &&
      evalValue.includes('reinforced-bottom')
    ) {
      myProp = 'optionalExtras';
    }
    const myValue = () => {
      let returnValue;
      if (evalValue && Number(evalValue)) {
        if (myProp.includes('quantity')) {
          returnValue = parseFloat(evalValue);
        } else {
          returnValue = parseFloat(evalValue).toFixed(2);
        }
      } else if (evalValue && myProp !== 'optionalExtras') {
        returnValue = evalValue;
      } else if (myProp === 'optionalExtras') {
        let tempOptionalExtras = pc.optionalExtras;
        if (
          !e.currentTarget.checked &&
          tempOptionalExtras.includes(e.currentTarget.value)
        ) {
          tempOptionalExtras = tempOptionalExtras.filter(
            (oe: string) => oe !== e.currentTarget.value
          );
        }
        if (
          e.currentTarget.checked &&
          !tempOptionalExtras.includes(e.currentTarget.value)
        ) {
          tempOptionalExtras.push(e.currentTarget.value);
        }
        returnValue = tempOptionalExtras;
      }
      return returnValue;
    };

    const removeReinforcedBottom =
      myProp === 'grade' &&
      myValue() !== 'A' &&
      pc.optionalExtras.includes('reinforced-bottom');

    removeReinforcedBottom
      ? setPC({
          ...pc,
          [myProp]: myValue(),
          optionalExtras: pc.optionalExtras.filter(
            (oe: string) => oe !== 'reinforced-bottom'
          )
        })
      : setPC({
          ...pc,
          [myProp]: myValue()
        });
  };

  const handleStepNavStep = (step: number) => {
    switch (step) {
      case 1:
        setPC({ ...pc, step: 1 });
        break;
      case 2:
        pc.height > 0 &&
          pc.boxLength > 0 &&
          pc.quantity > 0 &&
          pc.width > 0 &&
          setPC({ ...pc, step: 2 });
        break;
      case 3:
        pc.grade !== '' && setPC({ ...pc, step: 3 });
        break;
      case 4:
        pc.quality !== '' && setPC({ ...pc, step: 4 });
        break;
      case 5:
        pc.quality !== '' && setPC({ ...pc, step: 5 });
        break;
      default:
        setPC({ ...pc, step: 1 });
        break;
    }
  };

  const handleSequentialStep = (direction: 'next' | 'prev') => {
    switch (direction) {
      case 'next':
        pc.step < 5 && setPC({ ...pc, step: pc.step + 1 });
        break;
      case 'prev':
        pc.step > 0 && setPC({ ...pc, step: pc.step - 1 });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    pc.grade === 'C' && sizeCalculation(pc) > 2 && setPC({ ...pc, grade: 'B' });
  }, [pc]);

  return (
    <AppContainer title="FantasticBoxCo Price Calculator">
      <StepNav formData={pc} handleStepNavStep={handleStepNavStep} />
      <section>
        <TransitionGroup>
          {pc.step === 1 && (
            <CSSTransition key="step1" classNames="fade" timeout={850}>
              <Step1
                formData={pc}
                handleFormElementChange={handleFormElementChange}
                handleSequentialStep={handleSequentialStep}
              />
            </CSSTransition>
          )}
          {pc.step === 2 && (
            <CSSTransition key="step2" classNames="fade" timeout={850}>
              <Step2
                formData={pc}
                handleFormElementChange={handleFormElementChange}
                handleSequentialStep={handleSequentialStep}
              />
            </CSSTransition>
          )}
          {pc.step === 3 && (
            <CSSTransition key="step3" classNames="fade" timeout={850}>
              <Step3
                formData={pc}
                handleFormElementChange={handleFormElementChange}
                handleSequentialStep={handleSequentialStep}
              />
            </CSSTransition>
          )}
          {pc.step === 4 && (
            <CSSTransition key="step4" classNames="fade" timeout={850}>
              <Step4
                formData={pc}
                handleFormElementChange={handleFormElementChange}
                handleSequentialStep={handleSequentialStep}
              />
            </CSSTransition>
          )}
          {pc.step === 5 && (
            <CSSTransition key="step5" classNames="fade" timeout={850}>
              <Total
                formData={pc}
                handleSequentialStep={handleSequentialStep}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </section>
    </AppContainer>
  );
};

export default PriceCalculator;

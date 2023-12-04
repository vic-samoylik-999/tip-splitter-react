import React from 'react';
import { nanoid } from 'nanoid';
import Button from './Button';

function TipSelector(props) {
  const tipTypes = [5, 10, 15, 25, 50];

  const customTipClick = (amount) => {
    if (props.customTipAmount == amount) {
      props.setCustomTipAmount('');
      props.setIsCustomTip(false);
    } else {
      props.setIsCustomTip(true);
      props.setCustomTipAmount(amount);
    }
  };

  const customTipHandler = (e) => {
    if (e.target.value == 0) {
      props.setIsCustomTip(false);
      props.setCustomTipAmount('');
    }
    props.setCustomTipAmount(Number(e.target.value));
  };
  return (
    <section className="tip-selector">
      <h3 className="tip-selector__label">Select Tip %</h3>
      <div className="tip-selector__grid">
        {tipTypes.map((item) => {
          return (
            <Button
              customTipAmount={props.customTipAmount}
              onClick={() => customTipClick(item)}
              value={item}
              key={nanoid()}
              type="tip"
            >
              {item + '%'}
            </Button>
          );
        })}
        <div className="tip-selector__custom-tip">
          <input
            className="tip-selector__input"
            value={props.customTipAmount}
            onChange={customTipHandler}
            type="number"
            placeholder="Custom"
          />
        </div>
      </div>
    </section>
  );
}

export default TipSelector;

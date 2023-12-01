import React from 'react';
import { nanoid } from 'nanoid';
import Button from './Button';

function TipSelector() {
  const tipTypes = [5, 10, 15, 25, 50];
  return (
    <section className="tip-selector">
      <h3 className="tip-selector__label">Select Tip %</h3>
      <div className="tip-selector__grid">
        {tipTypes.map((item) => {
          return (
            <Button key={nanoid()} type="tip">
              {item + '%'}
            </Button>
          );
        })}
        <div className="tip-selector__custom-tip">
          <input type="number" placeholder="Custom" />
        </div>
      </div>
    </section>
  );
}

export default TipSelector;

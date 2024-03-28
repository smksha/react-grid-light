import React, { useState } from 'react';
import '../../src/App.css';

const Cell = ({ filled, onClick }) => {
  return (
    <button
      className={filled ? 'cell cell_active' : 'cell'}
      onClick={onClick}
      type="button"
    />
  );
};

const MyGrid = ({ config }) => {
  const [order, setOrder] = useState([]);

  const deactivateCells = () => {
    const timer = setInterval(() => {
      setOrder((order) => {
        let newOrder = order.slice();
        newOrder.pop();
        return newOrder;
      });
      if (order.length === 0) {
        clearInterval(timer);
      }
    }, 300);
  };

  const activateCell = (index) => {
    let newOrder = [...order, index];
    setOrder(newOrder);

    //deactivation
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="grid_container">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order && order.includes(index)}
              onClick={() => activateCell(index)}
            />
          ) : (
            <span></span>
          );
        })}
      </div>
    </div>
  );
};

export default MyGrid;

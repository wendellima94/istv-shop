import React from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './FinishSaleButton.css';

const FinishSaleButton = () => {
  return (
    <div className="finish-sale">
      <button className="finish-sale-button">
        <CreditCardIcon className="icon" />
        Finalizar Compra
      </button>
    </div>
  );
};

export default FinishSaleButton;

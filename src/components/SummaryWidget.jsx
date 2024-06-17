import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const SummaryWidget = ({ transactions, invoices }) => {
  const [thresholdInput, setThresholdInput] = useState(500);
  const [threshold, setThreshold] = useState(500);

  const handleThresholdChange = (event) => {
    setThresholdInput(Number(event.target.value));
  };

  const handleSetThreshold = () => {
    setThreshold(thresholdInput);
  };

  const totalAmount = useMemo(() => {
    return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  }, [transactions]);

  const recentInvoices = useMemo(() => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return invoices.filter(invoice => new Date(invoice.creationDate) >= thirtyDaysAgo).length;
  }, [invoices]);

  const totalColor = useMemo(() => {
    if (totalAmount < 0) return 'red';
    if (totalAmount < threshold) return 'yellow';
    return 'green';
  }, [totalAmount, threshold]);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Summary</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Set Threshold:</label>
        <input
          type="text"
          value={thresholdInput}
          onChange={handleThresholdChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSetThreshold}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Set Threshold
        </button>
      </div>
      <p className="text-2xl" style={{ color: totalColor }}>Total Amount: ${totalAmount.toFixed(2)}</p>
      <p className="mt-2">Invoices in Last 30 Days: {recentInvoices}</p>
    </div>
  );
};

SummaryWidget.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reference: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  invoices: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      reference: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SummaryWidget;

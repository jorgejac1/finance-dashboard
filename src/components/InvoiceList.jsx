import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const InvoiceList = ({ invoices, transactions }) => {
  const isInvoicePaid = (invoice) => {
    return transactions.some(transaction =>
      transaction.reference === invoice.reference &&
      transaction.amount === invoice.amount &&
      new Date(transaction.date) > new Date(invoice.creationDate)
    );
  };

  const invoiceListWithStatus = useMemo(() => {
    return invoices.map(invoice => ({
      ...invoice,
      status: isInvoicePaid(invoice) ? 'Paid' : 'Not Paid'
    }));
  }, [invoices, transactions]);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Invoices</h2>
      <ul className="space-y-4">
        {invoiceListWithStatus.map(invoice => (
          <li key={invoice.reference} className="p-4 bg-gray-100 rounded-lg">
            <p>Client: {invoice.client}</p>
            <p>Date: {invoice.creationDate}</p>
            <p>Amount: ${invoice.amount}</p>
            <p>Status: {invoice.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      reference: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reference: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default InvoiceList;

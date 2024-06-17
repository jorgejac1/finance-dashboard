import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InvoiceForm from './InvoiceForm';
import InvoiceList from './InvoiceList';

const InvoiceWidget = ({ invoices, transactions, onAddInvoice }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddInvoice = (invoice) => {
    if (invoice.client && invoice.creationDate && invoice.amount && invoice.reference) {
      onAddInvoice(invoice);
      setShowForm(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-2">Invoices</h2>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={() => setShowForm(true)}
      >
        Add Invoice
      </button>
      {showForm && <InvoiceForm onSubmit={handleAddInvoice} />}
      <InvoiceList invoices={invoices} transactions={transactions} />
    </div>
  );
};

InvoiceWidget.propTypes = {
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
  onAddInvoice: PropTypes.func.isRequired,
};

export default InvoiceWidget;

import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceProvider';
import SummaryWidget from '../components/SummaryWidget';
import InvoiceWidget from '../components/InvoiceWidget';

const Dashboard = () => {
  const { transactions, invoices, addInvoice } = useContext(FinanceContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Financial Dashboard</h1>
        <div className="col-span-1 md:col-span-2">
          <SummaryWidget transactions={transactions} invoices={invoices} />
        </div>
        <div className="col-span-1">
          <InvoiceWidget invoices={invoices} transactions={transactions} onAddInvoice={addInvoice} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

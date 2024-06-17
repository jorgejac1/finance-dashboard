import React, { createContext, useEffect, useState } from 'react';
import { fetchTransactions, fetchInvoices } from '../services/mockData';

export const FinanceContext = createContext();

const FinanceProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [transactionData, invoicesData] = await Promise.all([
                    fetchTransactions(),
                    fetchInvoices(),
                ]);
                
                setTransactions(transactionData);
                setInvoices(invoicesData);
            } catch(error) {
                console.error('Error fetching data');
                setError('Failed to load financial data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const addInvoice = (invoice) => {
        setInvoices(prevInvoices => [...prevInvoices, invoice]);

        const newTransaction = {
            date: new Date().toISOString(),
            description: `Invoice ${invoice.reference}`,
            reference: invoice.reference,
            amount: invoice.amount
        };

        addTransaction(newTransaction);
    };

    const addTransaction = (transaction) => {
        setTransactions(prevTransactions => [...prevTransactions, transaction]);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) { return <div>Error...</div>; }
 
    return (
        <FinanceContext.Provider value={{ transactions, invoices, addInvoice, addTransaction }}>
            {children}
        </FinanceContext.Provider>
    );
};

export default FinanceProvider;

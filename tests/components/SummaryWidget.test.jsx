import React, { useContext , useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FinanceContext } from '../../src/context/FinanceProvider';
import SummaryWidget from '../../src/components/SummaryWidget';

const mockTransactions = [
    { amount: 100 },
    { amount: -50 },
    { amount: 200 },
];

const mockInvoices = [
    {creationDate: new Date().toISOString() },
    {creationDate: new Date().toISOString() },
];

const renderWithContext = (transactions, invoices) => {
    return render(
        <FinanceContext.Provider value={{ transactions, invoices}}>
            <SummaryWidget />
        </FinanceContext.Provider>
    );
};

describe('SummaryWidget', () => {
    it('renders correctly with initial data', () => {
        renderWithContext(mockTransactions, mockInvoices);

        expect(screen.getByText('Summary')).toBeInTheDocument();
        expect(screen.getByText('Total Amount: $250.00')).toBeInTheDocument();
        expect(screen.getByText('Invoices in Last 30 Days: 2')).toBeInTheDocument();
    });

    // test if amoutn is green
    // reder
    // totalAMount getByText  $250
    // toHaveStyle color: green

    // test if amount is yellow
    // render
    // fireEvent.change(input, { target value 300})
    // totalAMount getByText  $250
    // toHaveStyle color: yellow

     // test if amount is yellow
    // render
    // fireEvent.change(input, { target value 50})
    // totalAMount getByText  $250
    // toHaveStyle color: yellow
});
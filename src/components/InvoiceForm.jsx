import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InvoiceForm = ({ onSubmit }) => {
    const [client, setClient] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [amount, setAmount] = useState('');
    const [reference, setReference] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ client, creationDate, amount: parseFloat(amount), reference });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Client</label>
                <input className="mt-1 block w-full border border-gray-300 rounded-md p2" value={client} onChange={(e) => setClient(e.target.value)} />
            </div>
            <div>
                <label>Date</label>
                <input className="mt-1 block w-full border border-gray-300 rounded-md p2" type="date" value={creationDate} onChange={(e) => setCreationDate(e.target.value)} />
            </div>
            <div>
                <label>Amount</label>
                <input className="mt-1 block w-full border border-gray-300 rounded-md p2" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label>Reference</label>
                <input className="mt-1 block w-full border border-gray-300 rounded-md p2" value={reference} onChange={(e) => setReference(e.target.value)} />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Invoice</button>
        </form>
    );
};

InvoiceForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default InvoiceForm;

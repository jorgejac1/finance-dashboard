const mockTransactions = [
    { date: '2024-05-01', description: 'Groceries', reference: 'T001', amount: -50.00},
    { date: '2024-05-02', description: 'Freelance Payment', reference: 'T002', amount: 200.00},
    { date: '2024-05-03', description: 'Rent', reference: 'T003', amount: -500.00},
];

const mockInvoices = [
    { client: 'Client A', creationDate: '2024-05-01', referene: 'I001', amount: 150.00},
    { client: 'Client B', creationDate: '2024-05-02', referene: 'I002', amount: 200.00},
];

export const fetchTransactions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockTransactions)
        }, 1000);
    });
};

export const fetchInvoices = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockInvoices);
        }, 1000);
    });
};
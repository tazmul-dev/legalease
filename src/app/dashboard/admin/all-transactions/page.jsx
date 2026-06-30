import { Card } from "@heroui/react";

export const metadata = {
  title: "All Transactions | Admin Dashboard",
  description: "View all platform transactions and payments.",
};

// 1. Async function to fetch data
async function getTransactions() {
  return [
    { id: "TRX-884291", email: "client.one@example.com", amount: 450.00, date: "2026-06-29T10:30:00Z" },
    { id: "TRX-884292", email: "lawyer.two@example.com", amount: 150.00, date: "2026-06-28T14:15:00Z" },
    { id: "TRX-884293", email: "client.three@example.com", amount: 2400.00, date: "2026-06-27T09:45:00Z" },
    { id: "TRX-884294", email: "lawyer.four@example.com", amount: 300.00, date: "2026-06-26T16:20:00Z" },
    { id: "TRX-884295", email: "client.five@example.com", amount: 850.00, date: "2026-06-25T11:10:00Z" },
  ];
}

// Formatters
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default async function AllTransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">All Transactions</h1>
        <p className="text-gray-500 text-sm mt-1">Review all payments between users and lawyers.</p>
      </div>

      {/* =========================================
          MOBILE VIEW (Cards) - Shows below 768px
          ========================================= */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {transactions.map((tx) => (
          <Card key={tx.id} className="p-4 border border-gray-100 shadow-sm bg-white rounded-xl flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Transaction ID</span>
              <span className="text-sm font-mono text-gray-900 font-medium">{tx.id}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Email</span>
              <span className="text-sm text-gray-600 truncate max-w-[180px]">{tx.email}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Date</span>
              <span className="text-sm text-gray-500">{formatDate(tx.date)}</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-50 mt-1">
              <span className="text-xs text-gray-500 uppercase font-semibold">Amount</span>
              <span className="text-lg font-bold text-emerald-600">{formatCurrency(tx.amount)}</span>
            </div>
          </Card>
        ))}

        {transactions.length === 0 && (
          <div className="p-8 text-center text-sm text-gray-500 bg-white rounded-xl border border-gray-100">
            No transactions found.
          </div>
        )}
      </div>

      {/* =========================================
          DESKTOP VIEW (Table) - Shows above 768px
          ========================================= */}
      <Card className="hidden md:block w-full border border-gray-100 shadow-sm bg-white overflow-hidden rounded-xl">
        <div className="w-full">
          <table className="w-full text-left border-collapse">
            
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  User / Lawyer Email
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-gray-700 font-medium">
                    {tx.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {tx.email}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    {formatCurrency(tx.amount)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatDate(tx.date)}
                  </td>
                </tr>
              ))}

              {transactions.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-sm text-gray-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
            
          </table>
        </div>
      </Card>
      
    </div>
  );
}
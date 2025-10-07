const bills = [
  { dueDate: "2025-09-02", status: "PAID", name: "Crunchyroll", category: "Subscription", amount: 14.90 },
  { dueDate: "2025-09-08", status: "PAID", name: "Consorcio", category: "Investments", amount: 332.00 },
  { dueDate: "2025-09-08", status: "LATE", name: "Phone", category: "Bill", amount: 85.00 },
  { dueDate: "2025-09-08", status: "PAID", name: "Veterinarian", category: "Debt", amount: 600.00 },
  { dueDate: "2025-09-10", status: "PAID", name: "Music Class", category: "Investments", amount: 175.00 },
  { dueDate: "2025-09-10", status: "LATE", name: "Electricity", category: "Bill", amount: null },
  { dueDate: "2025-09-23", status: "PAID", name: "Credit Card", category: "Debt", amount: 400.00 },
];

const debts = [
  { totalDue: 600.00, plan: "Monthly", name: "Veterinarian", type: "Loan", estimated: false},
  { totalDue: 4000.00, plan: "Monthly", name: "NuBank", type: "Credit Card", estimated: true },
  { totalDue: 450.00, plan: "TBD", name: "Chicken Wire", type: "Loan", estimated: false },
  { totalDue: 1643.73, plan: "TBD", name: "IPVA", type: "Tax", estimated: false },
  { totalDue: 254.39, plan: "TBD", name: "MEI", type: "Tax", estimated: false },

  
];
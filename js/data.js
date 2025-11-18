window.payments = [
  { totalDue: "R$ 1.643,73", dueDate: "2025-09-15", name: "IPVA" },
  { totalDue: "R$ 254,39", dueDate: "2025-08-22", name: "DAS" },
  { totalDue: "R$ 80,90", dueDate: "2025-10-20", name: "DAS" },
  { totalDue: "R$ TBD", dueDate: "2025-09-20", name: "Electricity" },
  { totalDue: "R$ 2.500,00", dueDate: "2025-11-23", name: "NuBank" },
  { totalDue: "R$ 340,00", dueDate: "2025-11-08", name: "Consorcio" },
  { totalDue: "R$ 2.500,00", dueDate: "2025-10-23", name: "NuBank" },
  { totalDue: "R$ 340,00", dueDate: "2025-11-08", name: "Consorcio" },
  { totalDue: "R$ 164,00", dueDate: "2025-11-08", name: "Phone" },
  { totalDue: "R$ 348,00", dueDate: "2026-01-08", name: "Consorcio" },
];

// Add timeToPay (x days or x days late)
window.payments.forEach(p => {
  const today = new Date();
  const due = new Date(p.dueDate);

  if (!isNaN(due)) {
    const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    p.timeToPay = diffDays < 0 ? `${Math.abs(diffDays)} days late` : `${diffDays} days`;
  } else {
    p.timeToPay = "-";
  }
});

// Sort payments by oldest dueDate
window.payments.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

window.renderPayments = (id, data) => {
  const t = document.getElementById(id);
  data.forEach(i => {
    t.innerHTML += `
      <tr>
        <td class="px-4">${i.dueDate}</td>
        <td class="text-left">${i.totalDue ?? "-"}</td>
        <td class="text-left px-4">${i.name}</td>
        <td class="text-right px-6">${i.timeToPay}</td>
        </td>
      </tr>`;
  });
};

// Call render functions
window.renderBalances("balancesTable", window.balances);
window.renderPayments("paymentsTable", window.payments);


// import data.js

const table = document.getElementById("bills-table");

bills.forEach(bill => {
  if (bill.status === "PAID") return;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td contenteditable="false">${bill.name}</td>
    <td contenteditable="false">${bill.amount}</td>
    <td contenteditable="false">${bill.dueDate}</td>
    <td contenteditable="false">${bill.status}</td>
  `;
  table.appendChild(row);
});



document.getElementById('calculateBtn').addEventListener('click', () => {
    // Get the values from the form
    const khana = Number(document.getElementById('khana').value) || 0;
    const kapray = Number(document.getElementById('kapray').value) || 0;
    const jhootay = Number(document.getElementById('jhootay').value) || 0;
    const petrol = Number(document.getElementById('petrol').value) || 0;
    const packages = Number(document.getElementById('packages').value) || 0;
    const bills = Number(document.getElementById('bills').value) || 0;

    // Calculate daily total
    const dailyTotal = khana + petrol;

    // Calculate monthly total (30 days)
    const monthlyTotal = (dailyTotal * 30) + packages + bills;
    const allDetails = kapray + jhootay;
    const yearlyTotal = (monthlyTotal * 12) + (allDetails * 6);

    // Display the result
    document.getElementById('monthly').textContent = `Monthly Expense: Rs. ${yearlyTotal/12} or $ ${(yearlyTotal/12)/283}`;
    document.getElementById('yearly').textContent = `Yearly Expense: Rs. ${yearlyTotal } or $ ${(yearlyTotal)/283}`;
});

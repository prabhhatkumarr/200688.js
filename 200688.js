let income = 256000;

function tax(income) {
    if (income > 0 && income < 250000) {
        let totalIncome = income;
    }
    else if (income > 250000 && income < 500000) {
        let totalIncome = income - (income * (5 / 100));
    }
    else if (income > 500000 && income < 750000) {
        let totalIncome = income - (income * (10 / 100));
    }
    else if (income > 750000 && income < 1000000) {
        let totalIncome = income - (income * (15 / 100));
    }
    else if (income > 1000000 && income < 1250000) {
        let totalIncome = income - (income * (20 / 100));
    }
    else if (income > 1250000 && income < 1500000) {
        let totalIncome = income - (income * (25 / 100));
    }
    else if (income > 1500000) {
        let totalIncome = income - (income * (30 / 100));
    }
    return totalIncome;
}

console.log(totalIncome);

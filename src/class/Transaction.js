
function calculateRewards(price) {
    if (price >=50 && price < 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
}
export class Transaction {
    constructor(price) {
        this.price = price;
        this.rewards = calculateRewards(price);
        this.transactionDate = new Date();
    }
}

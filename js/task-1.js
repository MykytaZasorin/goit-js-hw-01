function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `Your ordered ${quantity} droids worth ${totalPrice} credits!`;
}
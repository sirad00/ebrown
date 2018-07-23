function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}
funds = 2;

totalBet = 2
while (funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if (totalBet === 2) {
        console.log("Unlucky! Skip this round....");
    } else {
        // play...
    }
    funds++;
}
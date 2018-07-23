function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

totalBet=1;
funds = 2;
while (funds > 1 && funds < 15) {
    let totalBet = rand(1, funds);
    if (totalBet === 1) {
        console.log("Unlucky! Skip this round....");
        continue;
    }
    funds++;

}
if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
} else {
    // distribute total bet
    let remaining = totalBet;
    do {
        let bet = rand(1, remaining);
        let face = randFace();
        bets[face] = bets[face] + bet;
        remaining = remaining - bet;
    } while (remaining > 0)
}

// round 6:
//         starting funds: 11p
//         bets: crown: 6 pence, anchor: 0 pence, heart: 0 pence, spade: 0 pence, club: 0 pence, diamond: 0 pence (total: 6 pence)
//         hand: club, crown, diamond
//         winnings: 6
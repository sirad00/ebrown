funds = 119;
// if (new Date().getDay() === 3) {
//     totalBet = 1;
// } else if (funds === 7) {
//     totalBet = funds;
// } else {
//     console.log("no superstition here!")
// }
// // for (let temp, i = 0, j = 1;
// //      j < 30;
// //     temp = i,i = j, j = i + temp)
// //     console.log(`
// // temp= ${temp}
// // i = ${i}
// // j = ${j}`);
// //     console.log(j);

// // let s = '3';
// // for (; s.length<10; s=' ' + s);

// // for (let x=0.2; x<3.0; x+=0.2)
// // console.log(x);
// // let player = "Alex";
// // for (; !player.isBroke;)
// //     console.log("Still playing!"


// // switch (totalBet) {
// //     case 7:
// //         totalBet = funds;
// //         console.log('case 7');
// //     //break;
// //     case 11:
// //         totalBet = 0;
// //         console.log('case 11');
// //         break;
// //     case 13:
// //         totalBet = 0;
// //         console.log('case 13');
// //         break;
// //     case 21:
// //         totalBet = 21;
// //         console.log('case 21');
// //         break;
// // }

// // console.log(totalBet);


// // totalBet = 11;

// // switch (totalBet) {
// //     case 7:
// //         totalBet = funds;
// //         break;
// //     case 11:
// //     case 13:
// //         totalBet = 0;
// //         // break;
// //     case 21:
// //         totalBet = 21;
// //         console.log("case 21");
// //         break;
// // }
// // console.log(totalBet);

// totalBet = 13;

// // switch (totalBet) {
// //     case 7:
// //         totalBet = funds;
// //         break;
// //     case 13:
// //         funds = funds - 1;
// //         console.log(funds);
// //     case 11:
// //         totalBet = 0;
// //         break;
// //     case 21:
// //         totalBet = 21;
// //         break;
// // }
// // console.log(totalBet);

// function adjustBet(totalBet, funds) {
//     switch (totalBet) {
//         case 7:
//             console.log("inside function case 7");
//             return funds;
//         case 13:
//             console.log("inside function case 13");
//             return 12;
//         default:
//             return totalBet;
//     }
// }

// console.log(adjustBet(totalBet, funds));
// // console.log(totalBet);
// // console.log (funds);

function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}
// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0, 5)];
}

const hand = [randFace(), randFace(), randFace()];
for (let i = 0; i < hand.length; i++)
    console.log(`Roll ${i + 1}: ${hand[i]}`);

totalBet = 13;
while (funds > 1 && funds < 200) {
    let totalBet = rand(1, funds);
    if (totalBet === 13) {
        console.log("Unlucky! Skip this round....");
        continue;
    }

}
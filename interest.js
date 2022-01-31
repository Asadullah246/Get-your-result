function totalMoney(money, percentage, year){
    let interest=money*percentage*year/100;
    console.log(interest);
    let total=money+interest;
    return total;

}

// let amount=5000;
// let sud=5;
// let year=10;
let amount=[5000, 5, 10]
// let amount={
//     "taka": 5000,
//     "sud" : 5,
//     "year":10
// }
// let allMoney=totalMoney(amount["taka"], amount["sud"], amount["year"])
let allMoney=totalMoney(...amount)
console.log(allMoney)

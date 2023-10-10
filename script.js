const age = prompt("You age are...");

if (age >=18) {
    console.log("You can watch this video!")
} else {
    const numberYersLeft = 18 - age;
    let endFrase;



    if (numberYersLeft > 1) {endFrase = "years"} else {endFrase = "year"}
    console.log(`You can watch this X, after ${numberYersLeft} ${endFrase}!`)
}
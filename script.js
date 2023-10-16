
function getAverage (dept1AverSales, dept2AverSales) {
    return `Average sells: ${(dept1AverSales+dept2AverSales)/2}`
}

function printBonus (dept1AverSales, dept2AverSales) {
    const procent = (dept1AverSales + dept2AverSales)/100
    const dep1 = procent * dept1AverSales;
    const dep2 = procent * dept2AverSales;
    // document.writeln(`Department1 has ${dep1}%`);
    // document.writeln(`Department2 has ${dep2}%`);
    console.log(`Department1 has ${dep1}%`)
    console.log(`Department2 has ${dep2}%`)

    if (dep1 > dep2) {
       return `Department1 has win with ${dep1-dep2}% bonus.`;
    } else if (dep2 > dep1) {
        return `Department2 has win with ${dep2-dep1}% bonus.`;
    } else return `There are no winner!!!`;
}
// document.writeln(getAverage(50, 50))
// document.writeln(printBonus(50, 50))
console.log(getAverage(11, 22))
console.log(printBonus(11, 22))
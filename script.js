const bils = [11, 20, 47]
// const tips = []
const totalBils = []

const calculateTips = (tips) => (tips >= 20) ? Number((tips/100*20).toFixed(2)) : Number((tips/100*15).toFixed(2))
const tips = bils.map(calculateTips)


for (let i = 0;i < bils.length; i++) {
    totalBils.push(bils[i]+tips[i])
}

let newBody = `
    <p>${bils.join(', ')}</p>
<!--    <br>-->
    <p>${tips.join(', ')}</p>
<!--    <br>-->
    <p>${totalBils.join(', ')}</p>
`
document.body.innerHTML = newBody
console.log(bils)
console.log(tips)
console.log(totalBils)

// console.log(calculateTips(chek[1]))

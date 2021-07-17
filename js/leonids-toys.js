
const toyToFind = 4

const toys = [
{
    id: 1,
    name: "Furby",
    maker: "Hasbro",
    operatingSystem: "FurbyOS",
    price: 40,
    weight: 2.3
},
{
    id: 2,
    name: "Beany Baby",
    maker: "Matel",
    operatingSystem: "none",
    price: 6,
    weight: .3
},
{
    id: 3,
    name: "Super Nintendo",
    maker: "Nitendo",
    operatingSystem: "SNES",
    price: 120,
    weight: 4.1
}
]

const actionFigure = {
    id: 4,
    name: "GI Joe",
    maker: "Hasbro",
    operatingSystem: "none",
    price: 6,
    weight: 1.3
}

const bobbleHead = {
    id: 5,
    name: "Bobble Head",
    maker: "China",
    operatingSystem: "none",
    price: 5,
    weight: .9
}

toys.push(actionFigure)
toys.push(bobbleHead)


for (const toy of toys) {
    if (toy.id === toyToFind) {
    toy.price = toy.price / .95 
    console.log(`Price is ${toy.price}`)
    }
}

const segaGenesis = {
    name: "Sega Genesis",
    maker: "China",
    operatingSystem: "SGplay",
    price: 199,
    weight: .8
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1 
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(segaGenesis)

for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
}
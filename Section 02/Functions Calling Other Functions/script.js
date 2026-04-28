const cutFruitPieces = cuttingFruit => cuttingFruit * 4;


const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges. Orang pieces: ${cutFruitPieces(orangePieces)} and Apple pieces: ${cutFruitPieces(applePieces)}`;
    return juice;
}

const fruit = fruitProcessor(3, 2);
console.log(fruit)


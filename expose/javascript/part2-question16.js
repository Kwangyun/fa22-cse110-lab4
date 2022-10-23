let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (a in statistics) {
    if (a[0].startsWith('r')  || statistics[a]%2 == 1){
        console.log(a + " value: " + statistics[a])
    }
}
function findPrime(...numbers) {
    numbers.forEach(number => {
        if (number > 1) {
            let i = 2
            let isPrime = true

            while (i < number) {
                if (number % i == 0)
                    isPrime = false
                i++
            }

            if (isPrime)
                console.log(number + " asaldır.")
            else
                console.log(number + " asal değildir !")


        } else {
            console.log(number + " asal değildir !")
        }
    });
}

findPrime(2, 3, 5, 7, 11, 13, 17, 19, 23)
// findPrime(1, 4, 7, 8, 9, 55, 87, 47, 5457, 475, 471, 576, 7475, 67)
// findPrime(-56, 463, 4125, 7619, 46579, 41, -547, 461, 9764, 541, 111)
// findPrime(4789, 434, 755, 987, 4512, 86743, 1275, 7481973, 37563, 456)


function isFriendlyNumbers(number1, number2) {
    let i = 1
    let number1DivisorsSum = 0
    let number2DivisorsSum = 0

    while (i < number1) {
        if (number1 % i == 0)
            number1DivisorsSum += i
        i++
    }

    i = 1

    while (i < number2) {
        if (number2 % i == 0)
            number2DivisorsSum += i
        i++
    }

    if (number1DivisorsSum == number2 && number2DivisorsSum == number1)
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
    else
        console.log(number1 + " ve " + number2 + " arkadaş sayılar değildir !")

}

isFriendlyNumbers(220, 284)
// isFriendlyNumbers(17296, 18416)
// isFriendlyNumbers(1184, 1210)
// isFriendlyNumbers(15, 20)
// isFriendlyNumbers(100, 80)
// isFriendlyNumbers(759, 22)


function getPerfectNumbersUpTo1000() {
    let perfectNumbers = []

    for (let index = 1; index <= 1000; index++) {
        const number = index
        let divisorsSum = 0
        let i = 1

        while (i <= number) {
            if (number % i == 0)
                divisorsSum += i
            i++
        }

        if (divisorsSum == number * 2)
            perfectNumbers.push(number)

    }

    console.log(perfectNumbers)
}

getPerfectNumbersUpTo1000()

function getPrimeNumbersUpTo1000() {
    let primeNumbers = []

    for (let index = 2; index <= 1000; index++) {
        const number = index
        let i = 2
        let isPrime = true

        while (i < number) {
            if (number % i == 0)
                isPrime = false
            i++
        }

        if (isPrime)
            primeNumbers.push(number)

    }

    console.log(primeNumbers)

}

getPrimeNumbersUpTo1000()

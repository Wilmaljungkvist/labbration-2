    let seed = 35647
    let multiplier = 2627984
    let increment = 474857
    let modulus = 73
    let currentSeed = seed


    export function linearCongruentialGenerator (min, max) {
        let newMax = max - min
        currentSeed = (multiplier * currentSeed + increment) % modulus
        return currentSeed
    }
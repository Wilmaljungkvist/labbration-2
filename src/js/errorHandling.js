export function handleMinMax (min, max) {
    if (max < min) {
        throw new Error('Minimum must be the same or smaller than maximum.')
    }
    return true
}

export function handleArray (arr) {
    if(arr.length === 0) {
        throw new Error('Array can not be empty.')
    } else if (!Array.isArray(arr)) {
        throw new Error('Must be an array.')
    }

    return true
}
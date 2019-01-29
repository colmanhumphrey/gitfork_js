// This function takes two arrays of the same length,
// finds the index of the second largest value of the first array,
// and returns the array value in that index in the second
//
// IF THE FIRST ARRAY HAS TIES FOR MAX, it should get the
// second largest value, so neither of the ties,
// i.e. [1, -1, 10, 3, 11, 2, 11] should give the
// index 2 (for the value 10), and not 6, the second 11,
// and use that for the second array
//
function second_max_index(array_to_index, array_to_return_value){
    // first, location of (first if ties) max
    let max_val = Math.max(...array_to_index);
    const arrMaxFilter = array_to_index.filter(num => num < max_val)
    // and the second highest will now be the max!
    let second_max = Math.max(...arrMaxFilter);
    let ind_second = array_to_index.indexOf(second_max);

    let arrayToIndexLength = array_to_index.length;
    let arrayToReturnLength = array_to_return_value.length;

    if (arrayToIndexLength > arrayToReturnLength){
        for (let i = arrayToReturnLength; i<arrayToIndexLength; i++){
            array_to_return_value.push("i'm the one!")
            return array_to_return_value[ind_second];
        }
    }
    else if (arrayToIndexLength < arrayToReturnLength){
        array_to_return_value = array_to_return_value.slice(0,array_to_index.length)
        array_to_return_value[ind_second] = 'yes, but...we fixed it!'
        return array_to_return_value[ind_second];

    }

    else {
        return array_to_return_value[ind_second];
    }
}

console.log("test 1: works")
console.log(second_max_index(
    [10, 5, 7, 4],
    ["no", "nor this", "yes me", "also not this"]))

console.log("test 2: happy days")
console.log(second_max_index(
    [1, 1, 1, 1, 4],
    ["yes, first \"1\" is good",
     "not the second 1",
     "or third",
     "or fourth",
     "and this is the max, so not this"]))
        
console.log("test 3: not working!")
console.log(second_max_index(
    [1, -1, 10, 3, 11, 2, 11],
    ["not this", "nor this", "should be this! but isn't!",
     "no", "I'm the first max, not me", "nope", "should I be here?"]))

console.log("test 4: doesn't fail, but should it?")
console.log(second_max_index(
    [1, 3, 2],
    ["no", "the max, so no", "yes, but...", "what am I doing here?"]))

console.log("test 5: gives undefined! what's happening? what should it do?")
console.log(second_max_index(
    [1, 3, 2],
    ["no", "the max, so no"]))
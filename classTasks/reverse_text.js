export { reverse_text }
function reverse_text(input) {
    let reverse_array = input.split(" ")
    let array = []
    for (let i = 0; i < reverse_array.length; i++) {
        for (let j = reverse_array[i].length - 1; j >= 0; j--) {
            array += reverse_array[i][j];
        }
        array += " "
    }
    return array
}
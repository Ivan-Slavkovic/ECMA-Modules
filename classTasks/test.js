export { text }
function text(input) {
    let novi = input.split("")
    let broj = {}
    for (let i = 0; i < novi.length; i++) {
        const letter = novi[i]
        if (!broj[letter]) {
            broj[letter] = 1
        }
        else {
            broj[letter] += 1
        }
    }
    return broj
}
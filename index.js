function findMatching(drivers, string){
    let matches = drivers.filter(element => element.toLowerCase() == string.toLowerCase())
    return matches
}

function fuzzyMatch(drivers, string){
    let matches = drivers.filter(element => element.charAt(0) === string.charAt(0))
    return matches
}

function matchName(drivers, string){
    let matches = drivers.filter(element => element.name === string)
    return matches
}

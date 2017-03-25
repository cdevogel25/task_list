export function updateComplete(list, done) {
    list.forEach((item) => {
        if(item.complete) {
            done.push(list.splice(list.indexOf(item), 1))
        }
    })
    return done
}

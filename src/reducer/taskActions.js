export function updateComplete(list, done) {
    if(done) {
        list.forEach((item) => {
            if(item.complete) {
                done.push(item)
                list.splice(list.indexOf(item), 1)
            }
        })
    }
    return done
}

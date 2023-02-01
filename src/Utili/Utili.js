export const checkbox = () => {
    let check = localStorage.getItem("User");

    if (check) {
        return true
    } else {
        return false
    }
}
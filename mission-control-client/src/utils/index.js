export function checkType(state, type, i = 0) {
    // stores the names of properties from state in a string array
    const properties = Object.keys(state);

    if (i < properties.length) {
        // if incorrect type, end checking and return false
        if (typeof(state[properties[i]]) !== type) {
            return false;
        }
        // if correct, continue
        if (typeof(state[properties[i]]) === type) {
            i += 1;
            return checkType(state, type, i);
        }
    }

    if (i === properties.length) {
        // if the last is incorrect, end checking
        if (typeof(state[properties[i]]) !== type) {
            return false;
        }
        // if the last is correct, they're good to go
        if (typeof(state[properties[i]]) === type) {
            return true;
        }
    }
}
        

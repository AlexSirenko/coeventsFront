export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('userAndToken');
        if (serializedState == null) {
            return {
                userAndToken: ''
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('userAndToken', serializedState);
    } catch (err) {
        //ignore write errors.
    }
}
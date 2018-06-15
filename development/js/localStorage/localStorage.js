export const loadState = () => {
    try{
        const reduxState = localStorage.getItem('reduxState');
        if(reduxState == null){
            return undefined;
        }

        return JSON.parse(reduxState);
    } catch(err) {
        return undefined;
    }
}
export const saveState = (reduxState) => {

    try {
        const state = JSON.stringify(reduxState);
        localStorage.setItem('reduxState', state)
    } catch (err) {

    }

}

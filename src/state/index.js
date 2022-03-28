import { createGlobalState } from 'react-hooks-global-state';

let {setGlobalState, useGlobalState } = createGlobalState({
    stopanimation: false, 
    sideprofile:false
});

export {useGlobalState, setGlobalState}

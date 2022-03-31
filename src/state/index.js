import { createGlobalState } from 'react-hooks-global-state';

let {setGlobalState, useGlobalState } = createGlobalState({
    stopanimation: false, 
    sideprofile:false,
    rightprofile:false,
});

export {useGlobalState, setGlobalState}

import { createGlobalState } from 'react-hooks-global-state';

let {setGlobalState, useGlobalState } = createGlobalState({
    stopanimation: false
});

export {useGlobalState, setGlobalState}

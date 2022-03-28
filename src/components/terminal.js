import React from 'react';
import Terminal from "terminal-in-react";
import { setGlobalState, useGlobalState } from '../state/index'

function Terminall() {
   useGlobalState("stopanimation", 'sideprofile');
    return (
      <div>
        <Terminal
          hideTopBar
          style={{ height: "350px", overflow: "hidden" }}
          commands={{
            stop: () => {
              function stop(){
               setGlobalState("stopanimation", true)
               setGlobalState("sideprofile", false)
              
            }
            stop()
            },
            resume: () => {
              function resume(){
               setGlobalState("stopanimation", false)
               setGlobalState("sideprofile", false)
              
            }
            resume()
            },
            left: () => {
              function left(){
               setGlobalState("sideprofile", true)
                
              
            }
            left()
            },
           
          }}
          descriptions={{
            stop:'stops the animation on my head!',
            resume: 'resumes the animation',
            left: 'gives you a nice left-side profile'
          }}
          msg='Welcome! type "help" and try out some of the commands. '
        />
      </div>
    );
  }

export default Terminall
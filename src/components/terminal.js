import React from 'react';
import Terminal from "terminal-in-react";
import { setGlobalState, useGlobalState } from '../state/index'

function Terminall() {
   useGlobalState("stopanimation", 'sideprofile', 'rightprofile');
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
               setGlobalState("rightprofile", false)
              
            }
            resume()
            },
            left: () => {
              function left(){
               setGlobalState("sideprofile", true)
               setGlobalState("rightprofile", false)
                
              
            }
            left()
            },
            right: () => {
              function right(){
               setGlobalState("rightprofile", true)
               setGlobalState("sideprofile", false)
               setGlobalState("stopanimation", false)
               
                
              
            }
            right()
          },
           
          }}
          descriptions={{
            stop:'stops the animation of my head!',
            resume: 'resumes the animation',
            left: 'gives you a nice left-side profile'
          }}
          msg='Welcome! type "help" and try out some of the commands. '
        />
      </div>
    );
  }

export default Terminall
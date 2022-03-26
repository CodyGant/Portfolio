import React from 'react'
import Terminal from 'terminal-in-react';
import { default as Model } from "../Myfacebig";



function terminal() {
  
  return (
    <div>
      <Terminal hideTopBar style={{ height: "150px",   overflow: 'hidden'}}
  commands={{
    'Stop': (args, runCommand) => { 
     
    
    }
  }}
/>
    </div>
  )
}

export default terminal
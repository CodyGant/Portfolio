import React from 'react';

import Terminal from "terminal-in-react";

class terminal extends React.Component {

  render() 
  
  {
    return (
      <div>
        <Terminal
          hideTopBar
          style={{ height: "150px", overflow: "hidden" }}
          commands={{
            stop: (args, runCommand) => {
            
              console.log("hi")
            },
          }}
        />
      </div>
    );
  }
}
export default terminal
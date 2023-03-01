import React from 'react'

function functionclick() {
    function clickme(){
        alert('function click working');
    }
  return (
    <div>
        <button onClick={clickme}>click me</button>
    </div>
  )
}

export default functionclick
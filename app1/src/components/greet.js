import React from 'react'

// const greet = () => {
//   return (
//     <div>hello Harish...</div>
//   )
// }
const Greet =(props) =>{
return( <div>
    <h1>Hello  {props.name} Your Last name is {props.lastname}</h1>
{props.children}</div>)
}
  


export default Greet
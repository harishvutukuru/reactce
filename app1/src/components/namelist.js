import React from 'react'

function namelist() {
    const nameList=[ 
        {
id:101,
Name:'Harish',
Job:'Dot Net Developer'

        },
    {id:101,
        Name:'Harish',
        Job:'Dot Net Developer'},
{
    id:101, 
    Name:'Harish',
    Job:'Dot Net Developer'
},
 {id:101,
    Name:'Harish',
    Job:'Dot Net Developer'},
    {id:101,
        Name:'Harish',
        Job:'Dot Net Developer'}]



    const listItems = nameList.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <div>
        {listItems}
    </div>
  )
}

export default namelist
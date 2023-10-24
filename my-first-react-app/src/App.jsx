import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({ firstName: 'Mason',lastName: 'Yates', age:0 });
  // BAD - Don't do this!
  //const handleIncreaseAge = () =>{
     // mutating the current state object
     //person.age = person.age + 1;
     //setPerson(person);
  //}

  // GOOD - Do this!
  const handleIncreaseAge = () =>{
     // copy the existing person object into a new object 
     // while updating the age property
     const newPerson = { ...person, age: person.age + 1 };
     setPerson(newPerson);
  }
  
  const setFirst = (e) =>{
    //copy existing object
    const newPerson = {...person, firstName: e}
    setPerson(newPerson);
  }

  function setLast(e){
    //copy the object add new value and pass to the state to update
    const newPerson = {...person, lastName: e}
    setPerson(newPerson);
  }
  return (
     <>
        <h1>{person.firstName} {person.lastName}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
        <input type='text' className='firstName' onChange={(event) => setFirst(event.target.value)}></input>
        <input type='text' className='lastName' onChange={(event) => setLast(event.target.value)}></input>
     </>
  )
}

export default Person;
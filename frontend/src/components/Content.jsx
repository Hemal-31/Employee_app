import { useEffect, useState } from 'react'
import '../css/Content.css'

function Content() {

  const [users, setUsers] = useState([])

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [id, setId] = useState("")
  const [deleteId, setDelete] = useState("")
  const [idFilter, setIdFilter] = useState("all")

  const[updateId,setUpdateId] = useState("")
  const[updateName , setUpdateName] = useState("");
  const[updateAge, setUpdateAge] = useState(0);


  useEffect(()=>{
    fetch("http://localhost:5000/employee")
    .then((res)=>res.json())
    .then((data)=>{
      setUsers(data)
    });
  },[])
  const added = () => {

    fetch("http://localhost:5000/employee", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            id: Number(id),
            name: name,
            age: Number(age)
        })
    })
    .then((res) => res.json())
    .then((data) => {

        console.log(data);

        setUsers([...users,
            {
                id: Number(id),
                name: name,
                age: Number(age)
            }
        ]);

    });

};

 const deleted = () => {

    fetch(`http://localhost:5000/employee/${deleteId}`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .then((data) => {

        console.log(data);

        setUsers((users) => {
            return users.filter(
                (user) => user.id !== Number(deleteId)
            );
        });

    });

};

const update = () => {

    fetch(`http://localhost:5000/employee/${updateId}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: updateName,
            age: Number(updateAge)
        })
    })
    .then((res) => res.json())
    .then((data) => {

        console.log(data);

        setUsers((users) => {
            return users.map((user) => {

                if (user.id === Number(updateId)) {
                    return {
                        ...user,
                        name: updateName,
                        age: Number(updateAge)
                    };
                }

                return user;
            });
        });

    });

};
const clearAll = ()=>{
  setUsers([])
}

const filteredUsers = users.filter((employee) => {
  if (idFilter === "even") return Number(employee.id) % 2 === 0
  if (idFilter === "odd") return Number(employee.id) % 2 !== 0

  return true
})

  return (
    <section className='employee-page'>

    
      <h1>User Details</h1>
<table className='table'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>ID</th>
    </tr>
  </thead>

  <tbody>
    {filteredUsers.map((x) => {
      return (
        <tr key={x.id}>
          <td>{x.name}</td>
          <td>{x.age}</td>
          <td>{x.id}</td>
        </tr>
      )
    })}
  </tbody>
</table>
<div className='filter-group'>
  <label htmlFor='employee-filter'><h1>Filter employees:</h1></label>
    <select
      id='employee-filter'
      className='filter-select'
      value={idFilter}
      onChange={(e) => setIdFilter(e.target.value)}
    >
      <option value='all'>Show all employees</option>
      <option value='even'>Show only even ID employees</option>
      <option value='odd'>Show only odd ID employees</option>
    </select>
</div>

        <h1>Add an employee</h1>
        <div className='form-group'>
        <div className='form-row'>
          <div className='form-field'>
            <label htmlFor='name'>Enter name:</label>
            <input
              id='name'
              type='text'
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='form-field'>
            <label htmlFor='age'>Enter age:</label>
            <input
              id='age'
              type='number'
              placeholder='Enter your age'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className='form-field'>
            <label htmlFor='id'>Enter ID:</label>
            <input
              id='id'
              type='number'
              placeholder='Enter your ID'
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={() => added({
            name: name,
            Age: age,
            Id: id
          })}
          className='button form-action-button'
        >
          Add Employee
        </button>
       
        <div className='Delete'>
          <h1>To delete user details</h1>
          <div className='delete-controls'>
            <div className='form-field'>
              <label htmlFor='delete-id'>Enter the ID to delete:</label>
              <input
                id='delete-id'
                type='number'
                placeholder='Enter your ID'
                onChange={(e) => setDelete(e.target.value)}
              />
            </div>

            <button onClick={deleted} className='button'>
              Delete Employee
            </button>
          </div>

        </div>
         <div className='update'>
          <h1>To update user details</h1>
          <div className='form-row'>
            <div className='form-field'>
              <label htmlFor='update-id'>Enter ID to update:</label>
              <input
                id='update-id'
                type='number'
                placeholder='Enter your ID'
                onChange={(e) => setUpdateId(e.target.value)}
              />
            </div>
            <div className='form-field'>
              <label htmlFor='update-name'>New name:</label>
              <input
                id='update-name'
                type='text'
                placeholder='Enter your name'
                onChange={(e) => setUpdateName(e.target.value)}
              />
            </div>
            <div className='form-field'>
              <label htmlFor='update-age'>New age:</label>
              <input
                id='update-age'
                type='number'
                placeholder='Enter your age'
                onChange={(e) => setUpdateAge(e.target.value)}
              />
            </div>
          </div>

          <button onClick={update} className='button form-action-button'>
            Update Details
          </button>

        </div>
        <div className='clear'>
          <h1>To remove datas</h1>
          <button onClick={clearAll} className='button form-action-button'>Click me</button>
        </div>
         </div>

    </section>
  )
}

export default Content

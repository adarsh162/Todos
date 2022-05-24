import React, { useState } from 'react'

const Addtodos = (props) => {
    const [title,setTitle]=useState("");//kind of array whose name is title and it's empty
    const [desc,setDesc]=useState("");//kind of array whose name is desc

    const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc){
          alert("Title or Description cannot be blank");
      }
      else{
      props.addtodos(title,desc);
      setTitle("");
      setDesc("");
      }
      
    }
    return (
        <div className='container my-3' >
            <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="title" aria-describedby="emailHelp" />
                    
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
            </div>
            
            <button type="submit" className="btn btn-sm btn-success">Add todo</button>
        </form>
        </div>
    )
}

export default Addtodos

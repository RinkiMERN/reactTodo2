import React, { useState } from 'react'

const TodoForm = () => {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)

    let storeInputList = (e) => {
        setInputList(e.target.value)
    }

    let storeItems = () => {
  
     if(!inputList)
     {
        alert('pls fill data')
     }
     else if(inputList && !toggleSubmit){
        setItems(
            items.map((elem,index)=>{
                if(index === isEditItem)
                return [ ...elem, inputList]
                return elem;
                
            }
            
            )
            
        )
        setToggleSubmit(true)
        setInputList("")
        setIsEditItem(null)
     }
     else{
        setItems((prevState) => { return [...prevState, inputList] })
        setInputList("")
        console.log(items);
     }

    }

    let deleteStoredItem = (index)=>{
        let updatedList = items.filter((item, i) => { return i !== index });
        setItems(updatedList);
    }

    let editIem = (index) =>
    {
        let newEditItem = items.find((elem , i)=>{
            return i === index
        })
        setToggleSubmit(false)
        setInputList(newEditItem)
        setIsEditItem(index)
     }

    

    return (
        <div className='bg-black w-100  d-flex flex-row justify-content-center align-items-center p-3' style={{ height: '100vh' }}>

            <div className='bg-white w-50 h-80 d-flex flex-column justify-content-start align-items-start gap-3 p-4 rounded'>

                <h1 className='w-100 p-3 text-center ' style={{ backgroundColor: "#8A2BE2", color: "white" }}>TODO APP</h1>

                <div className='d-flex flex-row gap-3 justify-content-start align-items-center w-100'>
                    <input class="form-control" type="text" placeholder="ADD ITEM"
                    value={inputList}
                    onChange={storeInputList} />
                   
                       {
                        toggleSubmit?  <button type="button" class="btn btn-primary " onClick={storeItems}>+</button>: <button type="button" class="btn btn-success " onClick={storeItems}>update</button>
                       }
                        
                </div>

                <div className='d-flex flex-column justify-content-start align-items-start gap-3 w-100'>
                        {items.map((item , index) => {
                            return (
                                <div className='d-flex flex-row gap-3 justify-content-between align-items-center w-100 p-2 text-capitalize font-weight-bold border border-info rounded' style={{ fontWeight:"bolder" }} >

                                    <span key={index}>{item}</span>
                                    <div className='d-flex flex-row gap-2 justify-content-between align-items-center'>

                                    <button type="button" class="btn btn-danger " onClick={()=> deleteStoredItem(index)} >Delete</button>

                                    <button type="button" class="btn btn-warning " onClick={()=> editIem(index)} >edit</button>

                                  
                                    </div>
                                </div>
                            )
                        }
                        )}
                    
                </div>
            </div>
        </div>
    )
}

export default TodoForm

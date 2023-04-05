import React, { useState } from 'react'

const TodoLIst = () => {
  const [activity , setActivity] = useState("");
  const [listData , setlistData] = useState([]);
  function addActivity(){
    // setlistData([...listData , activity]);
    // console.log(listData);
    setlistData((listData)=>{
      const updatedList = [...listData , activity];
      console.log(updatedList)
      setActivity('');
      return updatedList
    })
  }
  function removeActivity(i){
     const updatedListData = listData.filter((elements , id)=>{
         return i!==id;
     })
     setlistData(updatedListData)
  }
  function removeAll(){
    setlistData([]);
  }
  return (
   <>
    <div className='container'>
      <div className='header'>Todo List</div>
      <input type='text' placeholder='Add activity' value={activity} onChange={(e)=>{
        setActivity(e.target.value)
      }} />
      <button onClick={addActivity} className='add-butt' >Add</button>
      <p className='List-heading'>Todays Task</p>
      {listData!=[] && listData.map((data, i)=>{
        return(
          <>
            <p key={i}>
              <div className='listData'>{data}</div>
              <div className='btn-position'><button onClick={()=>{
                removeActivity(i);
              }}>remove(-)</button></div>
            </p>
          </>
        )
      })}
      {listData.length>= 1 && <button onClick={removeAll}>Remove all</button>}
      
    </div>
   </>
  )
}

export default TodoLIst

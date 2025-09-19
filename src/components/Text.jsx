import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable';

function Text() {
    const nodeRef=useRef(null);
    const [editMode,setEditMode]=useState(false);
    const [txt,setTxt]=useState("Double Click To Edit!");
    

  return (
    <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef}> 
            {
              editMode
              ?
              <input value={txt} 
                  onDoubleClick={()=>{
                    setEditMode(false);
                  }}
                  onChange={(e)=>{
                    setTxt(e.target.value);
                    }} />
              :
              <h1 onDoubleClick={()=>{
                setEditMode(true);
              }}>{txt}</h1>
            }
            </div>
    </Draggable>
  )
}

export default Text
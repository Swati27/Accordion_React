import React, { useState } from 'react'

function Accordion({items}) {

    const [allowMultiple, SetAllowMultiple] = useState(false);
    const [activeIndexes, SetActiveIndexes] = useState([]);
    //const [isActive, setIsActive] = useState(false);

    const onCheckboxChange = () => {
        SetAllowMultiple(!allowMultiple);
    }

    const onTitleClick = (index) => {
        let newArr;
            if(activeIndexes.includes(index))
        {
            
            newArr =activeIndexes.filter((activeIndex)=> activeIndex!== index);
        }
        else
        {
            newArr = [...activeIndexes, index]
        }
        SetActiveIndexes(newArr);
    
    }

    const renderItems = () => {
        
    return (
        <div>
            {items.map((item,index)=>{
                return (
                <div>
                <div onClick={() => onTitleClick(index)}> {item.title} </div>
                <div style= {{display: activeIndexes.includes(index)? 'block' : 'none'}}> {item.content} </div> 
                </div>
                )
            })
            }
        </div>
        )
    }

  return (
    <div>
        <label>
            <input type='checkbox' checked = {allowMultiple} onChange={onCheckboxChange}></input>
            Allow multiple
        </label>
            {renderItems()}
    </div>
  )
}

export default Accordion;

// We will have activeIndexes as an arra state  but we will have a field called isActtive for these indexes on basis of which we render
// I am hiding/ displaying on basis of which index is clicked
// when for collapse I had to pop I used filter function => activeIndexes.filter((activeIndex)=> activeIndex!== index);
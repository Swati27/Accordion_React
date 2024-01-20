import React, { useState } from 'react'

function Accordion({items}) {

    const [allowMultiple, setAllowMultiple] = useState(false);
    const [activeIndexes, setActiveIndexes] = useState([]);

    const onCheckboxChange = () => {
        setAllowMultiple(!allowMultiple);
        setActiveIndexes([]);
    }

    const onTitleClick = (index) => {
      if (allowMultiple) 
      {
        let newArr;
        if(activeIndexes.includes(index))
    {
        
        newArr =activeIndexes.filter((activeIndex)=> activeIndex!== index);
    }
    else
    {
        newArr = [...activeIndexes, index]
    }
        setActiveIndexes(newArr);
      }
      else
      {
        // If only one allowed, collapse the current item and expand the clicked item
        setActiveIndexes((prevIndex)=> prevIndex.includes(index)? [] : [index]
        )
      }
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
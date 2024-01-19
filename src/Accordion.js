import React, { useState } from "react";

const Accordion = ({items}) =>
{
    const [activeIndex, setActiveIndex] = useState([]);

    const handleTitle = (index,items) => {
        items.isExpand =  items.isExpand? false: true;
        const newArr = [...activeIndex, index]
        setActiveIndex(newArr);
    }
    return (
    <div>
      {
        items.map((items,index)=> {
            return (
                <div>
                    <div key = {index} onClick={()=> handleTitle(index,items)}> {items.isExpand ? `-${items?.title}` : `✚${items?.title}`}</div>
                        <div key = {index} style = {{display: items.isExpand && activeIndex.includes(index)? 'block' : 'none' }}> {items?.content}</div>     
                </div>
            )
        })
      }
    </div>
   
    );

}

export default Accordion;
import AccordionItems from './AccordionItems';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';

const itemsList = [];

function Accordion() {
  useEffect(() => require('bootstrap/dist/js/bootstrap.bundle'),[]);

  // Note: items use state creates entire accordion list, counter allows <AccordionItems> to have an index
  const [items,setItems] = useState(itemsList);
  const [counter,setCounter] = useState(1);

  const countUp = () => {
      setCounter(counter+1)
  };

  // Note: we call countUp in this function because when an item is added through the assigned button we will assign the counter to that item and then increment to make the next item unique
  const addItems = () => {
    setItems([
      ...items,
      {
        tab:`Item ${counter}`,
        content:`This ${counter} content was added from useState`,
        count:`${counter}`
      },
    ])
    setCounter(counter+1)
  };
  
  return (
    <div>
      <NavBar></NavBar>

      <button className='btn btn-primary' onClick={addItems}>Add Accordion Layer</button>

      <div className='accordion' id='accordionExample'>
        {items.map(i => (<AccordionItems num={i.count} tab={i.tab} content={i.content}/>))}
      </div>

    </div>
  );
}

export default Accordion;

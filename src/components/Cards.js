import NavBar from "./NavBar";
import CardsItems from "./CardsItems";
import {useState} from 'react'

const itemsList = [];

const Cards = () => {

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
        header:`Card #${counter}`,
        text:`This is the content added for card #${counter} from useState`,
        count:`${counter}`
      },
    ])
    countUp()
  };

    return(
        <>
        <NavBar/>
        <button className='btn btn-primary' onClick={addItems}>Add Card</button>
        <div className="row">
            {items.map(i => (<CardsItems text={i.text} header={i.header} bsc='col' />))}
        </div>
        </>
    )

}

export default Cards;
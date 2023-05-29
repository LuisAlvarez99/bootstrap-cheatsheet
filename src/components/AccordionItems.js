const AccordionItems = (props) => {
    return(
        <>
            <div className='accordion-item'>
            <div className='accordion-header'>
                <button className='accordion-button' data-bs-toggle="collapse" data-bs-target={'#collapse'+ props.num} aria-expanded="true" aria-controls={'collapse'+props.num}>{props.tab}</button>
            </div>
            <div id={'collapse' + props.num} className='accordion-collapse collapse' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                <p>{props.content}{props.key}</p>
                </div>
            </div>
            </div>
        </>
    )
};

export default AccordionItems;
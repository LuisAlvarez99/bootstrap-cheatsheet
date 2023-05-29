import Nav from './Nav'
const tabs = [
    {
        link:'/',
        name:'Home'
    },
    {
        link:'/accordion',
        name:'Accordion'
    },
    {
        link:'/cards',
        name:'Cards'
    },
]
const NavBar = () => {

    return(
        <div className='nav nav-pills'>
            {tabs.map( t => <Nav link={t.link} name={t.name}></Nav> )}
        </div>
    )
};

export default NavBar;
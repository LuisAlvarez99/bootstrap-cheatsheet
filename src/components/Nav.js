const Nav = (props) => {
    return(
            <p className="nav-item"><a className="nav-link" href={props.link}>{props.name}</a></p>
    )
};

export default Nav;
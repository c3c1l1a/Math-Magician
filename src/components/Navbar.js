import { NavLink } from "react-router-dom";

const Navbar = ( ) => {
	const links = [{
		id: 1,
		path: '/home',
		text: 'Home'		
	}, {
		id: 2,
		path: '/calculator',
		text: 'Calculator'	
	}, {
		id: 3,
		path: '/quote',
		text: 'Quote'	
	}


	];
	return (
	  <nav className="navBar">
	    <ul>
	      {links.map(link => {
	        return (
	          <li key={link.id}>
	            <NavLink to={link.path}>{link.text}</NavLink>
	          </li>
	        )
	      })}
	    </ul>
	  </nav>
	);
}
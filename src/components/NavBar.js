import React from 'react';


const NavBar = ({searchKeyword,searchchange}) => {
		return (
        <header className="bg-black-70 navBar w-100 ph3 pv3 ph4-m ph5-l">
  <nav className="f6 fw6 ttu tracked">
    <a className="link dim white dib mr3" href="#" title="Home">Home</a>
    <a className="link dim white dib mr3" href="#" title="About">About</a>
    <a className="link dim white dib mr3" href="#" title="Store">Store</a>
    <a className="link dim white dib" href="#" title="Contact">Contact</a>
    <input type="search" placeholder="search.." onChange={searchchange}/>
  </nav>
</header>
    )
}
export default NavBar
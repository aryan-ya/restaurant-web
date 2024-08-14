import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <div className="logo">ZEESHU</div>
    <div className={show ? "navLinks showmenu":  "navLinks"}></div>
    </nav>
  )
}

export default Navbar
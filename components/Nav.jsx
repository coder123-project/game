import { Link, Outlet } from 'react-router-dom'
import { StyledNav } from './styles/Nav.styled';
import chess from '../assets/chess-solid.svg';


function Nav() {
  return (
    <>
        <StyledNav>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                        <div className='ms-5'>
                            <img className='chessImg' src={chess} alt="chess" />
                            <span>Top Games in Each Genre & Latest News</span>
                        </div>
                        
                        <ul className="navbar-nav me-5">
                            <li className="nav-item">
                                <Link className='navbar-links' to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navbar-links' to='/about'>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </StyledNav>
    </>
  )
}

export default Nav
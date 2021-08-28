import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
      <div
        className='App'
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${
            props.mode === 'light' ? 'light' : 'black'
          }`}
        >
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>
              {props.title}
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link active' aria-current='page' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/about'>
                    About
                  </Link>
                </li>
              </ul>
              {/* <form className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-primary' type='submit'>
                  Search
                </button>
              </form> */}
              <button
              
                style={{
                  color:
                     props.mode === 'light' ? 'black' : 'white' , borderRadius: "10px",
                  backgroundColor: props.mode === 'light' ? 'white' : 'black',
                  margin:"1px 7px"
                  }}
                onClick={props.clr}
              >
                red mode
              </button>
              <div
                className={`form-check form-switch text-${
                  props.mode === 'light' ? '#042743' : 'light'
                }`}
              >
                <input
                  className='form-check-input '
                  type='checkbox'
                  onClick={props.toggle}
                  id='flexSwitchCheckDefault'
                />
                <label
                  className='form-check-label'
                  htmlFor='flexSwitchCheckDefault'
                >
                  Light Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}

Navbar.prototypes = {
    title: PropTypes.string,
    About:PropTypes.string}


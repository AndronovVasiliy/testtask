import React from 'react'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Dropdown style={{marginLeft: '15px'}}>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ margin: 0 }}>
                    <Dropdown.Item as='button'>
                        <NavLink to='/gallery'>Галерея</NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item as='button'>
                        <NavLink to='/aboutme'>Обо мне</NavLink>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </>
    )
}

export default Header
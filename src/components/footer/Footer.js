import React from 'react';
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import './footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <div><label>FILTRAR POR</label></div>
            <DropdownButton
                drop={'up'}
                title={` Filtro `}
                id={`dropdown-button-drop-up`}
            >
                <Dropdown.Item><i className='fas fa-circle' style={{ color: 'green' }}></i>Aceras y calzadas</Dropdown.Item>
                <Dropdown.Item><i className='fas fa-circle' style={{ color: '#FFAA00' }}></i>Alumbrado</Dropdown.Item>
                <Dropdown.Item><i className='fas fa-circle' style={{ color: '#AA5DDB' }}></i>Mobiliario urbano</Dropdown.Item>
                <Dropdown.Item><i className='fas fa-circle' style={{ color: '#C74444' }}></i>Señales y semáforos</Dropdown.Item>
                <Dropdown.Item><i className='fas fa-circle' style={{ color: '#B28B67' }}></i>Parques y jardines</Dropdown.Item>
                <Dropdown.Item><i className='fas fa-circle' style={{ color: '#FFCCB6' }}></i>Alcantarillado</Dropdown.Item>
                <Dropdown.Item><i className='fas fa-circle' style={{ color: '#3277D8' }}></i>Limpieza</Dropdown.Item>
                <Dropdown.Item><i className='fas fa-circle' style={{ color: '#6E747F' }}></i>Seguridad</Dropdown.Item>

            </DropdownButton>
        </div>

    )


}


export default Footer;
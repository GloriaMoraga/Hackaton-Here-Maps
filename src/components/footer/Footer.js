import React from 'react';
import { DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap';
import './footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <div className="nombre-filtrado"><label>FILTRAR POR</label></div>
        <div className="btn-up">   
            <ButtonToolbar>
                {['up'].map(direction => (
                    <DropdownButton
                        size="m"
                        drop={direction}
                        variant="secondary"
                        title={`LUGARES REPORTADOS`}
                        id={`dropdown-button-drop-up`}
                        key={direction}
                    >
                        <Dropdown.Item eventKey="1"><i className='fas fa-circle' style={{ color: 'green' }}></i>Aceras y calzadas</Dropdown.Item>
                        <Dropdown.Item eventKey="2"><i className='fas fa-circle' style={{ color: '#FFAA00' }}></i>Alumbrado</Dropdown.Item>
                        <Dropdown.Item eventKey="3"><i className='fas fa-circle' style={{ color: '#AA5DDB' }}></i>Mobiliario urbano</Dropdown.Item>
                        <Dropdown.Item eventKey="4"><i className='fas fa-circle' style={{ color: '#C74444' }}></i>Señales y semáforos</Dropdown.Item>
                        <Dropdown.Item eventKey="5"><i className='fas fa-circle' style={{ color: '#B28B67' }}></i>Parques y jardines</Dropdown.Item>
                        <Dropdown.Item eventKey="6"><i className='fas fa-circle' style={{ color: '#FFCCB6' }}></i>Alcantarillado</Dropdown.Item>
                        <Dropdown.Item eventKey="7"><i className='fas fa-circle' style={{ color: '#3277D8' }}></i>Limpieza</Dropdown.Item>
                        <Dropdown.Item eventKey="8"><i className='fas fa-circle' style={{ color: '#6E747F' }}></i>Seguridad</Dropdown.Item>

                    </DropdownButton>
                ))}
            </ButtonToolbar>
            </div> 
        </div>

    )


}


export default Footer;
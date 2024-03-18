import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import { MdOutlineSportsSoccer } from "react-icons/md";

const VerticalMenu = () => {
  return (
    <div className="menu">
      <div className='text-center py-4'>
        <h6 className='logo'>streamhub</h6>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="">
            <MdOutlineSportsSoccer /> &nbsp;Esportes
          </a>
        </li>
        {/* Outros itens do menu */}
      </ul>
      <div className="text-center py-4">
        <Button variant="outline-dark">Adicionar conteúdo</Button>
      </div>
    </div>
  );
};

export default VerticalMenu;

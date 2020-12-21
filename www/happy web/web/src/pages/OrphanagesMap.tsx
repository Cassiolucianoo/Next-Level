import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import{FiPlus}from'react-icons/fi';

function OrphanagesMap(){
    return (
        <div id = "page-map">
            <aside>
                <header>
                    <img src = {mapMarkerImg} alt ="Happy" />
                        <h2>Escolha um orfanato no mapa</h2>
                        <p>Muitas crianças estão esperando a sua visita :)</p>

                </header>
                <footer>
                    <strong>São paulo</strong>
                    <span>Sp</span>
                </footer>
            </aside>
            <div></div> 
            <Link to="/app" className="create-orphanage">

            </Link>
        </div>
    );

}

export default OrphanagesMap;
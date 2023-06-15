import React from 'react';
import { Link, useLocation,useParams } from 'react-router-dom';

const Param = () => {
    const { id } = useParams();
    const location = useLocation();
    return (
  <>
  {/*  uma verificação, se o link clickado for corresponde a url sera renderizado aquele conteudo presente na rota*/}
  {location.pathname === '/param/1' && ( <Link to="/param/1">
      <h1>Segunda</h1>
      <p>Valor: {id}</p>
    </Link>)}
   {location.pathname === '/param/2' && (  <Link to="/param/2">
      <h1>Terça</h1>
      <p>Valor: {id}</p>
    </Link>)}
  
  </>
  
);
}
export default Param;

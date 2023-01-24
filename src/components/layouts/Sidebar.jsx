import React from 'react';
import { useNavigate } from "react-router-dom";


export const Sidebar = () => {

    const navigate = useNavigate();

    const search =  (e) => {
        e.preventDefault();

        navigate("/search/" + e.target.search_field.value);
    }

  return (
    <aside className="lateral">
        <div className="search">
            <h3 className="title">Search article</h3>
            <form onSubmit={search}>
                <input type="text" id="search_field" />
                <button id="search">Search</button>
            </form>
        </div>

        {/* <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            <form>
                <input type="text" id="title" placeholder="Titulo" />
                <textarea id="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div> */}
    </aside>
  )
}

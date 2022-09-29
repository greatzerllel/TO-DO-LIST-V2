import React from 'react';
export function Formulario(props) {

 const {tarea, handleSubmit, handleChange} = props

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Introduce la tarea" 
                onChange={handleChange}
                value={tarea}/>

            <input type="submit"
            className="boton"
            value="AGREGAR"
           onClick={handleSubmit} />
        </form>
    )
}
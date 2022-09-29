import { useState } from "react"

export function Tarea(props) {
    const { tarea, onActualizarTarea } = props

    const [editando, setEditando] = useState(true)

    function ModoEdicionActivado() {
        const [valor, setValor] = useState(tarea.tareaValue)

        function handleChange(e) {
            const text = e.target.value
            setValor(text)
        }
        function handleClick(e) {
            e.preventDefault()
            onActualizarTarea(
                {
                    id: tarea.id,
                    tarea: valor,
                    completado: false
                }
            )
            setEditando(false)
        }

        return (
            <>
                <input
                    type="text"
                    onChange={handleChange}
                    value={valor} />
                <button className="boton" onClick={handleClick}>
                    GUARDAR
                </button>
                <button className="boton botonBorrar">
                    BORRAR
                </button>
            </>
        )
    }

    function ModoEdicionDesactivado() {
        return (
            <>
                <span>{tarea.tareaValue}</span>

                <button className="boton botonEditar">
                    ACTUALIZAR
                </button>
                <button className="boton botonBorrar">
                    BORRAR
                </button>
            </>
        )
    }

    return (

        <>
            <div className="contenedorTarea" id={tarea.id}>
                {
                    editando ? <ModoEdicionActivado /> : <ModoEdicionDesactivado />
                }

            </div>
        </>
    )
}


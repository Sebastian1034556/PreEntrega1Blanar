import { useContext } from "react"

export function MainComponent(){
    const [nombre,setNombre] = useState('')
    
    const handleChange = (event) =>{
        setNombre(event.target.value)
    }
    return (
        <form action="">
            <h3>Formulario</h3>
            <label >Escribe tu nombre</label>
            <input type="text"  onChange={handleChange} />
            {nombre ? <p>{nombre}</p> : <p>No olvides escribir tu nombre</p>}
        </form>
        
    )
}
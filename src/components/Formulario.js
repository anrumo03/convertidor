import React, {useEffect, useState} from "react";
import FormularioService from "../services/FormularioService";

function Formulario() {

    const [texto, setTexto] = useState("");

    const [hexTexto, setHexa] = useState("");

    const [baseTexto, setBase] = useState("");

    function cambiar(e) {
        setTexto(e.target.value);
    }

    useEffect(() => {

        let hexa = "";

        for(let i = 0; i < texto.length; i++){
            hexa += FormularioService.convertirHexa(texto.charAt(i)) + " ";
        }
        setHexa(hexa);
        setBase(FormularioService.convertirBase(texto));

    }, [texto]);

    return(

        <div>
            <h2>Convertidor</h2>
            <h3>Escriba el texto</h3>
            <input type="text" onChange={cambiar}/>
            <h3>Conversión hexadecimal:</h3>
            <p>{hexTexto}</p>
            <h3>Conversión base 64:</h3>
            <p>{baseTexto}</p>
        </div>
    );
}

export default Formulario;
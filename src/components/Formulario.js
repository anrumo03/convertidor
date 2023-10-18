import React, {useEffect, useState} from "react";
import FormularioService from "../services/FormularioService";
import '../styles/Formulario.css';

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
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <span className="navbar-brand display-4 mb-4 text">Convertidor</span>
                </div>
            </nav>
            <h3 className="texto1 mt-4 mb-4">Escriba el texto</h3>
            <input type="text" onChange={cambiar} className="entrada1" />
            <h3 className="texto2 mt-4 mb-4">Conversión hexadecimal:</h3>
            <p className="salida1">{hexTexto}</p>

            <h3 className="texto3 mt-4 mb-4">Conversión base 64:</h3>
            <p className="salida2">{baseTexto}</p>

        </div>
    );
}

export default Formulario;
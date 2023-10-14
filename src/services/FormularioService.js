import React from "react";

class FormularioService {

    convertirHexa(letra){
        return letra.charCodeAt(0).toString(16);
    }

    convertirBase(letra){
        return btoa(letra);
    }
}

export default new FormularioService();
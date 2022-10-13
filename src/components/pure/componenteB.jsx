import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

function ComponenteB({ contacto }) {
    // const [variable, setVariable] = useState(valorInicial);
    const [estado, setestado] = useState(contacto.conectado);

    const cambiarEstado = () => {
        contacto.setConectado(!contacto.conectado);
        setestado(contacto.conectado);
    };

    return (
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h3>Apellido: {contacto.apellido}</h3>
            <h3> Contacto {estado ? "En Linea" : "No Disponible"}</h3>
            <button onClick={cambiarEstado}>Cambiar Estado</button>
        </div>
    );
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contact),
};

export default ComponenteB;

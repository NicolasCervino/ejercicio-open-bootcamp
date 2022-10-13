import React from "react";
import { Contact } from "../../models/contact.class";
import ComponenteB from "../pure/componenteB";

function ComponenteA() {
    const contacto1 = new Contact("Juan", "Perez", "1234@gmail.com", false);
    return <ComponenteB contacto={contacto1}></ComponenteB>;
}

export default ComponenteA;

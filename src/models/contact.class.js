export class Contact {
    nombre = "";
    apellido = "";
    email = "";
    conectado = "";

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
    // Permite cambiar el estado de un contacto
    setConectado(booleano) {
        this.conectado = booleano;
    }
}

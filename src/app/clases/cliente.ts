export class Cliente {

    public correo: string;
    public password: string;
    public tipo: string;

    constructor(correo: string, password: string, tipo: string) {

        this.correo = correo;
        this.password = password;
        this.tipo = tipo;
    } 
}

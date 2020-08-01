namespace general{
    
    export enum eSexo{
        Femenino,
        Masculino
    }
    
    export class Cliente extends Persona{
        public edad: number;
        public sexo: string;//eSexo;

        constructor(id:number,nombre:string,apellido:string,edad:number,sexo:string){
            super(id,nombre,apellido);
            this.edad = edad;
            this.sexo = sexo;
        }

    }
}
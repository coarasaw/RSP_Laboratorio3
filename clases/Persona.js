var general;
(function (general) {
    var Persona = /** @class */ (function () {
        function Persona(id, nombre, apellido) {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
        }
        return Persona;
    }());
    general.Persona = Persona;
})(general || (general = {}));

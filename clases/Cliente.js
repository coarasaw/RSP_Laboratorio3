var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var general;
(function (general) {
    var eSexo;
    (function (eSexo) {
        eSexo[eSexo["Femenino"] = 0] = "Femenino";
        eSexo[eSexo["Masculino"] = 1] = "Masculino";
    })(eSexo = general.eSexo || (general.eSexo = {}));
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente(id, nombre, apellido, edad, sexo) {
            var _this = _super.call(this, id, nombre, apellido) || this;
            _this.edad = edad;
            _this.sexo = sexo;
            return _this;
        }
        return Cliente;
    }(general.Persona));
    general.Cliente = Cliente;
})(general || (general = {}));

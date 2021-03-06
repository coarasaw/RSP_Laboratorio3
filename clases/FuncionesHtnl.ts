namespace general{
    window.addEventListener("load", function () {
        //Vehiculo
        document.getElementById("btnAbrirVehiculo").addEventListener("click", general.abrirCliente);
        document.getElementById("btnGuardarVehiculo").addEventListener("click",general.GuardarCliente);
        document.getElementById("btnCerrarVehiculo").addEventListener("click", general.cerrarCliente);
        document.getElementById("LimpiarVehiculo").addEventListener("click", general.limpiarCliente);

        //Oculta campos
        document.getElementById("idCheck").addEventListener("change", camposMostrados);
        document.getElementById("maracaCheck").addEventListener("change", camposMostrados);
        document.getElementById("modeloCheck").addEventListener("change", camposMostrados);
        document.getElementById("precioCheck").addEventListener("change", camposMostrados);
        
        // Para filtrar datos
        document.getElementById("btnBusar").addEventListener("click",general.teclaPromedio);
        //document.getElementById("filter").addEventListener("keyup",general.filtrar);
        
    });


    var ListaClientes: Array<Cliente> = new Array<Cliente>();

    //Vehiculo
    export function abrirCliente() {
        
        //boton buscar
        var btnBusar = document.getElementById("btnBusar");
        btnBusar.hidden = true;  
        
        //boton Vehiculo
        var btnAbrirVehiculo = document.getElementById("btnAbrirVehiculo");
        btnAbrirVehiculo.hidden = true;
        
        var TablaContenedor = document.getElementById("TablaContenedor");
        TablaContenedor.hidden = true;
        
        var contAgregarVehiculo = document.getElementById("contAgregarVehiculo");
        contAgregarVehiculo.hidden = false;

    }
    export function cerrarCliente() {
        
        //boton buscar
        var btnBusar = document.getElementById("btnBusar");
        btnBusar.hidden = false; 
        
        //boton Vehiculo
        var btnAbrirVehiculo = document.getElementById("btnAbrirVehiculo");
        var contAgregarVehiculo = document.getElementById("contAgregarVehiculo");
        var TablaContenedor = document.getElementById("TablaContenedor");

        var elementoID = <HTMLInputElement>document.getElementById("idFormulario");
        var elementoNombre = <HTMLInputElement>document.getElementById("nombreFormulario");
        var elementApellido = <HTMLInputElement>document.getElementById("apellidoFormulario");
        var elementoEdad = <HTMLInputElement>document.getElementById("edadFormulario");
        //var elementoSexo = <HTMLInputElement>document.getElementById("SexoFormulario");
    
        elementoID.value = "";
        elementoNombre.value = "";
        elementApellido.value = "";
        elementoEdad.value = "";
        //elementoSexo.value = "";
    
        btnAbrirVehiculo.hidden = false;
        contAgregarVehiculo.hidden = true;
        TablaContenedor.hidden = false;
    }
    
    export function limpiarCliente() {
        var elementoID = <HTMLInputElement>document.getElementById("idFormulario");
        var elementoNombre = <HTMLInputElement>document.getElementById("nombreFormulario");
        var elementApellido = <HTMLInputElement>document.getElementById("apellidoFormulario");
        var elementoEdad = <HTMLInputElement>document.getElementById("edadFormulario");
        //var elementoSexo = <HTMLInputElement>document.getElementById("SexoFormulario");
    
        elementoID.value = "";
        elementoNombre.value = "";
        elementApellido.value = "";
        elementoEdad.value = "";
        
    }

    export function GuardarCliente(){
        //var elementoID = <HTMLInputElement>document.getElementById("idFormulario");
        var elementoNombre = <HTMLInputElement>document.getElementById("nombreFormulario");
        var elementApellido = <HTMLInputElement>document.getElementById("apellidoFormulario");
        var elementoEdad = <HTMLInputElement>document.getElementById("edadFormulario");
        var elementoSexo = <HTMLInputElement>document.getElementById("SexoFormulario");
        
        var id: number; 
        var Mayor = ListaClientes.reduce(function(idMayor,user){
            if(user.id>idMayor){
              return user.id;
            }else{
              return idMayor;
            }
        }, 0);
        console.log(Mayor); 
        id = Mayor + 1; 

        var nombre: string = elementoNombre.value;
        var apellido: string = elementApellido.value;
        var edad: number = parseInt(elementoEdad.value);
        var sexo: string = elementoSexo.value;

        var miPersona:Cliente = new Cliente(id,nombre,apellido,edad,sexo);
    
        //Validación de Datos
        if(nombre == "" || nombre.length < 2){
            document.getElementById("nombreFormulario").className="error";
            alert("Nombre obligatorio / minimo 3 caracteres");
            return ;
        }
        else{
            if (apellido == "" || apellido.length < 2) {
                
                document.getElementById("apellidoFormulario").className="error";
                alert("Apellido es obligatorio / minimo 3 caracteres");
                return ;               
            }
            else{
                ListaClientes.push(miPersona);

                document.getElementById("nombreFormulario").className="sinError";
                document.getElementById("apellidoFormulario").className="sinError";

                var tbody = document.getElementById("cuerpo");
                //Creo la fila
                var tr = document.createElement("tr");

                //Creamos las colunmnas

                var td0 = document.createElement("td");
                td0.setAttribute("name","idTabla");
                var nodotext0 = document.createTextNode(miPersona.id.toString());
                td0.appendChild(nodotext0);
                tr.appendChild(td0);

                var td1 = document.createElement("td");
                td1.setAttribute("name","nombreCheck");
                var nodotext1 = document.createTextNode(miPersona.nombre);
                td1.appendChild(nodotext1);
                tr.appendChild(td1);

                var td2 = document.createElement("td");
                td2.setAttribute("name","edadCheck");
                var nodotext2 = document.createTextNode(miPersona.apellido);
                td2.appendChild(nodotext2);
                tr.appendChild(td2);

                var td3 = document.createElement("td");
                td3.setAttribute("name","apellidoCheck");
                var nodotext3 = document.createTextNode(miPersona.edad.toString()); 
                console.log(nodotext3);
                td3.appendChild(nodotext3);
                tr.appendChild(td3);

                var td4 = document.createElement("td");
                td4.setAttribute("name","sexoCheck");
                var nodotext4 = document.createTextNode(miPersona.sexo); 
                td4.appendChild(nodotext4);
                tr.appendChild(td4);

                var td5 = document.createElement("td");
                var button = document.createElement("button");
                button.addEventListener("click",borrar);
                button.textContent = "Borrar";
                var nodotext5 = button; 
                td5.appendChild(nodotext5);
                tr.appendChild(td5);

                tbody.appendChild(tr); 
                limpiarCliente();
            } 
        }
        //Fin Validación de Datos
    }

    //Extras

    function borrar(e){
        // var tr = e.target.parentNode.parentNode;
        // var item = ListaClientes.find(x=>x.id == tr.childNodes[0].textContent);
        // var indice = ListaClientes.indexOf(item);
        // ListaClientes.splice(indice,1);
        // tr.remove();
    }

    export function camposMostrados() {
        var id = <HTMLInputElement>document.getElementById("idCheck");
        var nombre = <HTMLInputElement>document.getElementById("nombreCheck");
        var apellido = <HTMLInputElement>document.getElementById("apellidoCheck");
        var edad = <HTMLInputElement>document.getElementById("edadCheck");
        var sexo = <HTMLInputElement>document.getElementById("sexoCheck");

        if (id.checked){
            var tablaId = document.getElementsByName("idTabla");
            tablaId.forEach(x => { x.hidden = false; })
        } else {
            var tablaId = document.getElementsByName("idTabla");
            tablaId.forEach(x => { x.hidden = true; })        
        }

        if (nombre.checked) {
            var tablaNombre = document.getElementsByName("nombreTabla");
            tablaNombre.forEach(x => { x.hidden = false; })
        } else {
            var tablaNombre = document.getElementsByName("nombreTabla");
            tablaNombre.forEach(x => { x.hidden = true; })
        }

        if (apellido.checked) {
            var tablaApellido = document.getElementsByName("apellidoTabla");
            tablaApellido.forEach(x => { x.hidden = false; })
        } else {
            var tablaApellido = document.getElementsByName("apellidoTabla");
            tablaApellido.forEach(x => { x.hidden = true; })
        }
        
        if (edad.checked) {
            var tablaEdad = document.getElementsByName("edadTabla");
            tablaEdad.forEach(x => { x.hidden = false; })
        } else {
            var tablaEdad = document.getElementsByName("edadTabla");
            tablaEdad.forEach(x => { x.hidden = true; })
        }

        if (sexo.checked) {
            var tablaSexo = document.getElementsByName("sexoTabla");
            tablaSexo.forEach(x => { x.hidden = false; })
        } else {
            var tablaSexo = document.getElementsByName("sexoTabla");
            tablaSexo.forEach(x => { x.hidden = true; })
        }
    }

    export function teclaPromedio(){
        var ListaEdad: Array<number> = ListaClientes.map(x => x.edad);
        var promedio = ListaEdad.reduce(function (total, numero) {
            return total + numero;
        },0);
        alert(promedio/ListaClientes.length);

    }


    /* function borrarTabla(){
        let tcuerpo = document.getElementById("cuerpo");
        tcuerpo.innerHTML = "";
    } */

    /* function rearmarTabla(filterVehiculo: Array<Vehiculo>){
        filterVehiculo.forEach(x => {
            agregarItemTabla(x.id.toString(),x.getMarca(),x.getModelo(),x.getPrecio().toString());
        });
    } */

    /* function agregarItemTabla(id:string,marca:string,modelo:string,precio:string){

                var tbody = document.getElementById("cuerpo");
                //Creo la fila
                var tr = document.createElement("tr");

                //Creamos las colunmnas
                var td0 = document.createElement("td");
                td0.setAttribute("name","idTabla");
                var nodotext0 = document.createTextNode(id);
                td0.appendChild(nodotext0);
                tr.appendChild(td0);

                var td1 = document.createElement("td");
                td1.setAttribute("name","marcaCheck");
                var nodotext1 = document.createTextNode(marca);
                td1.appendChild(nodotext1);
                tr.appendChild(td1);

                var td2 = document.createElement("td");
                td2.setAttribute("name","modeloCheck");
                var nodotext2 = document.createTextNode(modelo);
                td2.appendChild(nodotext2);
                tr.appendChild(td2);

                var td3 = document.createElement("td");
                td3.setAttribute("name","precioCheck");
                var nodotext3 = document.createTextNode(precio); 
                console.log(nodotext3);
                td3.appendChild(nodotext3);
                tr.appendChild(td3);

                var td4 = document.createElement("td");
                var nodotext4 = document.createTextNode("Atributo"); 
                td4.appendChild(nodotext4);
                tr.appendChild(td4);

                var td5 = document.createElement("td");
                var button = document.createElement("button");
                button.addEventListener("click",borrar);
                button.textContent = "Borrar";
                var nodotext5 = button; 
                td5.appendChild(nodotext5);
                tr.appendChild(td5);

                tbody.appendChild(tr); 
    } */

}

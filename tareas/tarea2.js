const misMascotas = {
    mascotas: ['perros','gatos','canarios','pez','serpiente'],
    eliminarMascota: function(name){
        const index = this.mascotas.indexOf(name);
        if (index > -1){
            this.mascotas.splice(index, 1);
        }
        return this.mascotas;             
    },
    eliminarUltimaMascota: function(){
        this.mascotas.pop();
        return this.mascotas;
    },
    agregarMascota: function(nuevaMascota){
        this.mascotas = [... this.mascotas, nuevaMascota];
        return this.mascotas;
    },
    contadorMascotas: function(){
        const regex = new RegExp("os$", 'g' )        
        const matched = this.mascotas.filter(mascota => mascota.match(regex));
        const result = `En el arreglo hay ${matched.length} mascotas que terminan con 'os'`;
        return result;
    },
}

const trabajador = {
        nombre: 'Jhon Smith',
        cargo: 'QA',
        empresa: {
            ubicación: {
                comuna: 'Santiago',
                puesto: 'nº 24',
            },
            datos: {
                nombre: 'ACME',
            },
            clientes: ['Facebook', 'Google'],
        },
        gustos: ['comer', 'ver televisión', 'dormir'],
        hijos: null,
}

const informacionPersona = function({
    nombre, 
    empresa: {
        datos: {
            nombre: empresaNombre
        },
    }, 
    cargo, 
    gustos, 
    hijos,}){
    
    const revisarGustos = function(){
        return gustos ? `le gusta (${gustos[0]}) y ${gustos.length - 1} más` : '(no tiene gustos)'
    };
    const revisarHijos = function(){
        return hijos ? `tiene ${hijos.length} hijo(s)` : 'no tiene hijos';
    };
    return `El trabajador (${nombre}) trabaja en (${empresaNombre}) con cargo (${cargo}) y ${revisarGustos()}, (${revisarHijos()})`;
}

const informacionTrabajador = function({
    nombre, 
    empresa: {
        ubicación: {
            comuna,
            puesto,
        },
        clientes,
    }, 
    cargo, 
    gustos, 
    hijos,}){
    const revisarClientes = function(){
        const thisClientes = clientes.map(function(cliente){
            return `(${cliente})`;
        })
        return thisClientes.slice(0, thisClientes.length - 1).join(", ") + " y " + thisClientes[thisClientes.length - 1];
    };        
  
    return `El trabajador (${nombre}) va a su trabajo en (${comuna}), es (${cargo}), en el puesto (${puesto}), trabaja con ${revisarClientes()}`;
}


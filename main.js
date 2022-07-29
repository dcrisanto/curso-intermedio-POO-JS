/*palabra reservada static se puede acceder a los atributos y métodos en un prototipo sin necesidad de instanciarlos */
class Prueba {
    static name = 'Dorelly';
    static speak() {
        console.log(`Mi nombre es: ${this.name}`);
    }
}

console.log(`Accediendo a la propiedad name: ${Prueba.name}`);
console.log('Accediendo al método speak:');
console.log(Prueba.speak());

const student1 = {
    name: 'Dorelly',
    email: 'dorelly.crisanto@gmail.com',
    age: 33
}

/*Llamando al método estático keys, getOwnPropertyNames del prototipo Object enviando cómo argumento a nuestro objeto nos devolverá un array con los keys de dicho objeto */
console.log(Object.keys(student1));
console.log(Object.getOwnPropertyNames(student1));
/*entries nos devolverá un array de array donde cada array contiene el key y el valor del object */
console.log(Object.entries(student1));
/*devolverá un objeto con las propiedades de nuestro objeto, y cada propiedad tendrá como valor un objeto. Además en el valor devuelve los atriutos que contiene y así nos sirve para poder modificar las propiedas para así limitar el acceso, cómo sería usando polimorfismo*/
console.log(Object.getOwnPropertyDescriptors(student1));

const studentPlatzi1 = {
    name: 'Dorelly',
    age: 33,
    email: 'dorelly.crisanto@gmail.com',
    approvedCourses: ['Curso 1'],
    addCourses(newCourses) {
        console.log(this);
        console.log(this.approvedCourses);
        this.approvedCourses.push(newCourses);
    }
}

console.log(Object.keys(studentPlatzi1));
console.log(Object.getOwnPropertyNames(studentPlatzi1));
console.log(Object.entries(studentPlatzi1));
console.log(Object.getOwnPropertyDescriptors(studentPlatzi1));

/*Método estático del super prototipo Object para crear nuevas propiedades en nuestro objeto, recibe 3 parámetros: objeto, newAtributo, objeto de atributos del newAtributo*/
Object.defineProperty(studentPlatzi1, "editorText", {
    value: 'word',
    configurable: true,
    enumerable: true,
    writable: true
});

Object.defineProperty(studentPlatzi1, "prueba2", {
    value: 'valor_prueba2',
    configurable: true,
    enumerable: false,
    writable: false
});

Object.defineProperty(studentPlatzi1, "editor", {
    value: 'Visual Studio Code',
    configurable: true,
    enumerable: true,
    writable: false
});

Object.defineProperty(studentPlatzi1, "navigator", {
    value: 'Chrome',
    configurable: true,
    enumerable: false,
    writable: true
});

Object.defineProperty(studentPlatzi1, "terminal", {
    value: 'bash',
    configurable: false,
    enumerable: true,
    writable: true
});

console.log(studentPlatzi1);
console.log(Object.getOwnPropertyDescriptors(studentPlatzi1));

/*Eliminar una propiedad del objecto siempre y cuando la propiedad configurable no sea false*/

const deleteProperty = (object, attrib) => {
    delete object[attrib];
};

deleteProperty(studentPlatzi1, 'prueba2');
console.log(studentPlatzi1);

/*Métodos seal y freeze del super prototipo Object */
//Object.seal(studentPlatzi1); /* coloca el atributo configurable en false para todos */
Object.freeze(studentPlatzi1); /* coloca el atributo write y configurable en false para todos */
console.log(studentPlatzi1);

/*Memoria en JS:
    al copiar un objeto de otro y le reasignas un valor cambia para ambos objetos ya que hacen referencia al pointer que se encuentra en el stack del navegador. El valor del objeto se guarda en Head del navegador. 
*/

const object1 = {
    name: 'Dorelly',
    firstname: 'Crisanto Silupú',
    age: 33,
    courses: {
        web: 'Desarrollo Web',
        js: 'JavaScript'
    }
};

const object2 = {};

/* copiando las propiedades del objeto 1 al objecto 2 
   mientras dentro del object a copiar no tenga otro objecto si es válido, ya que al copiar un atributo objeto hacia otro objeto hace referencia al mismo espacio en memoria
*/

const copy = (object1, object2) => {
    for(const attrib in object1){
        object2[attrib] = object1[attrib];
    }
};

copy(object1, object2);

/*Copiando propiedades de un obje a otro con métodos del super prototipo Object*/
/* el método assign tambien no es válido si hay un object dentro del objecto a copiar */
const object3 = Object.assign({}, object1)
const object4 = Object.create(object1);



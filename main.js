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


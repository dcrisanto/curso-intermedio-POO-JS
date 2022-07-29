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


/*JSON.parse and JSON.stringify */
const objectJSON = {
    name: 'Dorelly',
    firstname: 'Crisanto Silupú',
    age: 33,
    courses: {
        web: 'Desarrollo Web',
        js: 'JavaScript'
    },

    editAttrib(attrib, value) {
        this[attrib] = value;
    }
};

objectJSON.editAttrib('name', 'Rosario');
objectJSON.courses.web = 'webbbbbb';

/*convirtiendo en string un objeto */

const string_ = JSON.stringify(objectJSON);

console.log(string_);

const convertObjectString = object => {
    return JSON.stringify(object);
};

const objectString = convertObjectString(objectJSON);

console.log(objectString);

/*convirtiendo un string en un objeto */

const object_ = JSON.parse(string_);

console.log(object_);

const convertStringObject = string => {
    return JSON.parse(string);
}

const stringObject = convertStringObject(objectString);

console.log(stringObject);

/* Recursividad */
let number = 0;
const numberMax = 5;

/*
while(number <= numberMax) {
    console.log(number);
    number++;
}*/

const result = (number, numberMax) => {
    console.log(number);
    if(number < numberMax){
        number++;
        return result(number, numberMax);
    } else {
        return number;
    }
}

result(number, numberMax);

const numbers = [1,2,45,6,65,34,2345,665,3,6,2];
let index = 0;

/*ciclos*/
const result1 = (index, array) => {
    for(index; index < numbers.length; index++) {
        let element = array[index]
        console.log({index, element});
    }
}

result1(index, numbers);

const fruits = ['manzana', 'plátano', 'naranja', 'mandarina'];

/*recursividad */

const result2 = array => {
    let fruit = array[index];
    if(index < array.length) {
        console.log({index, fruit})
        index++;
        return result2(array);
    } else {
        console.log({index});
        return fruits;
    }
}

result2(fruits);

let students = ['Roxana', 'Dorelly', 'Mary'];
let newIndex = 0;

const result3 = (newIndex, array) => {
    let element = array[newIndex];
    if(array.length != 0){
        console.log({newIndex, element});
        array.shift();
        return result3(newIndex, array);
    } else {
        console.log('---')
    }
}

result3(newIndex, students);
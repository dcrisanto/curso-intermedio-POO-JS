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

/*Deep copy */

const isObject = (subject) => {
    return typeof(subject) == 'object';
};

const isArray = (subject) => {
    return Array.isArray(subject);
};

const deepCopy = (subject) => {
    let copySubject;
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
    if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else {
                copySubject[key] = subject[key];
            }
        }
    }

    console.log(copySubject);
    return copySubject;

}

deepCopy(objectJSON);

const studentBasic = {
    name: undefined,
    firstname: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialNetworks: {
        twitter: undefined,
        facebook: undefined,
        instagran: undefined
    }
}

const studentBasic1 = deepCopy(studentBasic);

Object.defineProperty(studentBasic1, "name", {
    value: 'Dorelly Crisanto',
    configurable: false
});

/*método del super prototipo Object para validar si todos los atributos cuenta con el valor false de la propiedad configurable */
const isPropertyProtectedDelete = Object.isSealed(studentBasic1);
console.log(isPropertyProtectedDelete);

/*método del super prototipo Object para validar si todos los atributos cuenta con el valor false de la propiedad configurable y writable*/
const isPropertyProtectedWriting = Object.isFrozen(studentBasic1);
console.log(isPropertyProtectedWriting);

/*Factory pattern y RORO */
const requiredParam = (param) => {
    throw new Error(`El ${param} es obligatorio`);
};

const createLearningPath = ({
    name = requiredParam('name'),
    courses = []
} = {}) => {

    const private = {
        _name: name,
        _courses: courses
    };

    const public = {

        get name() {
            return private._name;
        },

        set name(newName) {
            if(newName.length != 0){
                return private._name = newName;
            } else {
                console.log('El nombre de la ruta de aprendizaje debe tener al menos un carácter');
            }
        },

        get courses() {
            return private._courses;
        },

     };

    return public;

};

const webDevelopmentSchool = createLearningPath({
    name: 'Escuela de Desarrollo Web',
    courses: ['Curso1', 'Curso2'],
});

const javaScriptSchool = createLearningPath({
    name: 'Escuela de JavaScript',
    courses: ['js1', 'js2']
});

/*dándole valores por defecto a las propiedades que se reciben y al mismo parámetro ojecto un ojecto vacío para que así no muestre error cuando se invoque a la función sin el parámetro object */
const createStudents = ({
    name = requiredParam('name'),
    firstname = '',
    age,
    email = requiredParam('email'),
    approvedCourses = [],
    learningPaths = [],
    twitter = '',
    facebook = '',
    instagran = '',
} = {}) => {

    /*Propiedades que no se puedan cambiar directamente desde nuestros objetos*/
    const private = {
        _name: name,
        _learningPaths: learningPaths,
    };
    /*propiedades y m+etodos públicos */
    const public = {
        firstname,
        age,
        email,
        approvedCourses,
        socialNetworks: {
            twitter,
            facebook,
            instagran
        },

        /*Getters y setters*/
        /* Al usar get y set ya no tienen las propiedades value y writable en la propiedad name, debido a que sólo es un atajo para entrar con validaciones a nuestra propiedad name */

        get name() {
            return private._name;
        },

        set name(newName) {
            if (newName.length != 0) {
                return private._name = newName;
            } else {
                console.warn('Tu nombre necesita tener al menos un carácter');
            }
        },

        get learningPaths() {
            return private._learningPaths;
        },
        /*Este set será para agregar un nuevo learningPath desde la función createLearningPath
        set learningPaths(newLearningPath) {
            if(newLearningPath != 0) {
                const new_learningPath = createLearningPath({
                    name: newLearningPath,
                });
                return private._learningPaths.push(new_learningPath);
            } else {
                console.warn('El curso debe tener al menos un carácter');
            }
        } */

        /* Este set será para enviar un nuevo learningPath desde los argumentos enviados*/

        set learningPaths(newLearningPaths) {
            if(isArray(newLearningPaths)){
                console.warn('Los learningPaths deben ser un objeto');
                return;
            }

            if(!isObject(newLearningPaths)){
                console.warn('Los learningPaths deben ser un objeto');
                return;
            }

            if(!newLearningPaths.name) {
                console.warn('Cada learningPath debe tener un nombre');
                return;
            }

            if(!newLearningPaths.courses){
                console.warn('Cada learningPath debe tener la propiedad cursos');
                return;
            }

            if(!isArray(newLearningPaths.courses)){
                console.warn('La propiedad cursos debe ser un array');
                return;
            }

            if(!newLearningPaths.courses.length > 0) {
                console.warn('El array de courses debe tener elementos');
                return;
            }
            
            private._learningPaths.push(newLearningPaths);
        }

        /*
        readName() {
            return private._name;
        },

        changeName(newName) {
            private._name = newName;
        },
        */

    };

    /*
    Object.defineProperty(public, "readName", {
        configurable: false,
        writable: false
    });
    */

    return public;
};

const student_1 = createStudents({
    name: 'Dorelly',
    firstname: 'Crisanto Silupú',
    age: 33,
    email: 'dorelly.crisanto@gmail.com',
    approvedCourses: ['Curso1', 'Curso2'],
    learningPaths: [webDevelopmentSchool, javaScriptSchool],
    facebook: 'dorecharo15@hotmail.com'
});

const student_2 = createStudents({name: 'dore', email: 'c@..'});

/* Instancias of JS con instancias y prototipos */

function LearningPath ({
    name = requiredParam('name'),
    courses = []
}) {
    this.name = name;
    this.courses = courses;
};

function Student({
    name = requiredParam('name'),
    firstname,
    age,
    email = requiredParam('email'),
    approvedCourses = [],
    learningPaths = [],
    facebook,
    instagran,
    twitter
} = {}) {

    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.email = email;
    this.approvedCourses = approvedCourses;
    this.socialNetworks = {
        facebook,
        instagran,
        twitter
    };

    if(isArray(learningPaths)){
        this.learningPaths = [];
        for(let learningPath of learningPaths){
            if(learningPath instanceof LearningPath){
                this.learningPaths.push(learningPath);
            }
        }
    } else {
        console.warn('LearningPaths debe ser un array');
        return;
    }

};

const frontendAngular = new LearningPath({
    name: 'Frontend con Angular',
});

const studentInstance = new Student({ 
    name: 'Dorelly',
    email: 'dorelly.crisanto@gmail.com',
    learningPaths: [frontendAngular, {name: 'learningImpostor'}]
});

console.log(studentInstance instanceof Student);


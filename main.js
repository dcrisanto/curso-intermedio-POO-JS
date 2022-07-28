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

const student = {
    name: 'Dorelly',
    email: 'dorelly.crisanto@gmail.com',
    age: 33
}

/*Llamando al método estático keys, getOwnPropertyNames del prototipo Object enviando cómo argumento a nuestro objeto nos devolverá un array con los keys de dicho objeto */
console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));
/*entries nos devolverá un array de array donde cada array contiene el key y el valor del object */
console.log(Object.entries(student));
/*devolverá un objeto con las propiedades de nuestro objeto, y cada propiedad tendrá como valor un objeto. Además en el valor devuelve los atriutos que contiene y así nos sirve para poder modificar las propiedas para así limitar el acceso, cómo sería usando polimorfismo*/
console.log(Object.getOwnPropertyDescriptors(student));




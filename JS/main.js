/*//Objeto
const persona = { nombre: 'Juan', edad: 25, ciudad: 'Madrid'};

//Destructuracion
const {nombre, edad, ciudad} = persona;


//Uso de las variables extraidas
console.log(nombre);
console.log(edad);
console.log(ciudad);*/


/*const Personas = { Nombre: 'Juan', edad: 25, ciudad: 'Madrid', pais: 'España'};

//Rest en la destructuracion para recoger el resto de propiedades en un objeto

const {Nombre, ...resto} = Personas;
console.log(resto);
console.log(nombre);*/

/*const persona ={nombre: 'Juan', edad: 25, ciudad: 'Madrid'};

//Destructuracion  en argumentos de funciones
function saludar({nombre, edad, ciudad}){
    console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}.`);
}
saludar(persona);*/

const persona = {nombre: 'Juan', edad: 25, direccion: {ciudad: 'Madrid', codigoPostal: '28001'}};


//Destructuracion anidada
const{ nombre, edad, direccion:{ciudad,codigoPostal}} = persona;
console.log(nombre, edad, ciudad, codigoPostal);

//1Ejercicio
const Calulo = ({ a , b , c }) => ((a*b)+c);

let object_1 ={ a: 3, b: 4, c: 6};

//2 ejercicio

const getHighArchivers =(students) =>{
    return students
        .filter(({calificacion})=> calificacion>70)
        .map(({nombre})=> nombre);
};

const studentsArray=[
    {nombre: 'alice', calificacion: 80},
    {nombre: 'bob', calificacion: 65},
    {nombre: 'charlie', calificacion: 90}
];

const HighArchivers= getHighArchivers(studentsArray);
console.log(HighArchivers);

//3 Ejercicio

const processUser = ({nombre, edad =35})=>{
    return {nombre, edad};
};

const userObject1 = { nombre: 'John', edad: 30};
const result1 = processUser(userObject1);
console.log(result1);

const userObject2 = { nombre: 'Alice'};
const result2 = processUser(userObject2);
console.log(result2);



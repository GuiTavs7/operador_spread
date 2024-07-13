let pessoas = ["Guilherme", "Lucas", "Miguel"];

console.log(...pessoas);

// 1) USO COMUM - CONCATENAR ARRAYS

let pessoas1 = ["Roberto", "Ricardo", "Raphael"];
let pessoas2 = ["Pedro", "João", "Paulo"];

// 1.1) ANTES - MÉTODO concat( )

pessoas1 = pessoas1.concat(pessoas2);

console.log(pessoas1);

// 1.2) USANDO OPERADOR SPREAD (...)

pessoasSpread = [...pessoas, ...pessoas2];

console.log(pessoasSpread);

// 2) OUTRO USO - CLONAR OBJETOS

const pessoa3 = {nome: "Miriellen", idade: 21};
const pessoa4 = {nome: "Laura", idade: 1};

const objetoClonado = {...pessoa3};

console.log(pessoa3);
console.log(objetoClonado);

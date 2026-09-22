let nome = "Ias";
let idade = 11;

console.log("O nome do usúario é: " + nome);
console.log("A idade é: " + idade);

const pUsername = document.getElementById("username"); //pega um elemt pelo o id
pUsername.textContent = "O nome do usúario é: " + nome; 


const pIdade = document.getElementById("idade");
pIdade.textContent = "A idade é: " + idade;

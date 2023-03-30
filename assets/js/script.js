import ValidarCpfs from "./validar-cpf.js";

const inputCpf = document.getElementById('cpf');
const validarCpf = new ValidarCpfs(inputCpf).iniciar();
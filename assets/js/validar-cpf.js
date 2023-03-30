export default class ValidarCpfs {
    constructor(elementCpf) {
        this.elementCpf = elementCpf;
    }

    limpar(cpf) {
        return cpf.replace(/\D/g, '');
    }

    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }

    validar(cpf) {
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
        return matchCpf && matchCpf[0] === cpf;
    }

    validarNaMudanca(cpfElement) {
        if(this.validar(cpfElement.value)) {
            cpfElement.value = this.formatar(cpfElement.value);
            cpfElement.classList.add('valido');
            cpfElement.classList.remove('erro');
            cpfElement.nextElementSibling.classList.remove('show')
        } else {
            cpfElement.classList.add('erro');
            cpfElement.nextElementSibling.classList.add('show');
            cpfElement.classList.remove('valido');
        }
    }

    addEventInput() {
        this.elementCpf.addEventListener('change', () => {
            this.validarNaMudanca(this.elementCpf);
        });
    }

    addInformacaoDeErro() {
        const erroElement = document.createElement('span');
        erroElement.classList.add('erro-text');
        erroElement.innerText = 'CPF Inválido!';
        this.elementCpf.parentElement.insertBefore(erroElement, this.elementCpf.nextElementSibling);
    }

    iniciar() {
        this.addEventInput();
        this.addInformacaoDeErro();
        return this;
    }
}
function addPessoa (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const filial = document.getElementById('filial').value;
    const cidade = document.getElementById('cidade').value;
    const cargo = document.getElementById('cargo').value;
    const admissao = document.getElementById('admissao').value;
    const salario = document.getElementById('salario').value;
    
    const divPessoas = document.getElementById('divPessoas');
    if (divPessoas) {
        const parag = document.createElement('p');
        parag.innerHTML = `
            <strong> Nome: </strong>
            <em>${nome}</em>
            <strong> Sobrenome: </strong>
            <em>${sobrenome}</em>
            <strong> Filial: </strong>
            <em>${filial}</em>
            <strong> Cidade: </strong>
            <em>${cidade}</em>
            <strong> Cargo: </strong>
            <em>${cargo}</em>
            <strong> Admissão: </strong>
            <em>${admissao}</em>
            <strong> Salário: </strong>
            <em>${salario}</em
            `;
        const removerPessoa = document.createElement('span');
        removerPessoa.innerText = 'Remover';
        removerPessoa.setAttribute = ('class', 'remover-item');
        removerPessoa.onclick = (ev) => parag.remove();
        parag.appendChild(removerPessoa);

        divPessoas.appendChild(parag);
    }
}
const submeter = document.getElementById('botao-submeter');
submeter.onclick = addPessoa;
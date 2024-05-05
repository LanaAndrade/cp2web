import React, { useState, useEffect } from 'react';
import '../css/produto.css'

function Produto() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch('dados.json');
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            const jsonData = await response.json(); // Converte a resposta para JSON
            const produtos = jsonData.produto; // Acessa a chave "produto" do JSON
            setDatabase(produtos); // Define os produtos na variável de estado
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }

    function createData() {
        const newProduct = {};

        newProduct.nome = prompt("Digite o nome do produto:");
        if (!newProduct.nome) {
            return; // Se o usuário cancelar ou deixar em branco, não cria o produto
        }

        newProduct.qtd = parseInt(prompt("Digite a quantidade do produto:"), 10);
        if (isNaN(newProduct.qtd) || newProduct.qtd <= 0) {
            alert("Quantidade inválida!");
            return; // Se o usuário digitar uma quantidade inválida, não cria o produto
        }

        newProduct.valor = parseFloat(prompt("Digite o preço do produto:"));
        if (isNaN(newProduct.valor) || newProduct.valor <= 0) {
            alert("Preço inválido!");
            return; // Se o usuário digitar um preço inválido, não cria o produto
        }

        newProduct.id = database.length + 1; // Atribui um novo ID ao produto

        setDatabase([...database, newProduct]);
    }

    function readData() {
        return database.map(item => (
            <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.qtd}</td>
                <td>{item.valor}</td>
                <td>
                    <button className="edit" onClick={() => updateData(item.id)}>Editar</button>
                    <button className="delete" onClick={() => deleteData(item.id)}>Excluir</button>
                </td>
            </tr>
        ));
    }

    function updateData(id) {
        const index = database.findIndex(item => item.id === id);
        if (index !== -1) {
            const newProduct = {};

            newProduct.nome = prompt("Digite o novo nome do produto:");
            if (!newProduct.nome) {
                return; // Se o usuário cancelar ou deixar em branco, não atualiza o produto
            }

            newProduct.qtd = parseInt(prompt("Digite a nova quantidade do produto:"), 10);
            if (isNaN(newProduct.qtd) || newProduct.qtd <= 0) {
                alert("Quantidade inválida!");
                return; // Se o usuário digitar uma quantidade inválida, não atualiza o produto
            }

            newProduct.valor = parseFloat(prompt("Digite o novo preço do produto:"));
            if (isNaN(newProduct.valor) || newProduct.valor <= 0) {
                alert("Preço inválido!");
                return; // Se o usuário digitar um preço inválido, não atualiza o produto
            }

            const updatedDatabase = [...database];
            updatedDatabase[index] = { ...database[index], ...newProduct }; // Atualiza os atributos do produto
            setDatabase(updatedDatabase);
        }
    }

    function deleteData(id) {
        const updatedDatabase = database.filter(item => item.id !== id);
        setDatabase(updatedDatabase);
    }

    return (
        <div>
            <h1>Tabela de Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {readData()}
                </tbody>
            </table>
            <button onClick={createData}>Cadastrar Produto</button>
        </div>
    );
}

export default Produto;

import React, { useState, useEffect } from 'react';

function Produto() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch('dados.json'); // Substitua 'dados.json' pelo caminho do seu arquivo JSON externo
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            const data = await response.json(); // Converte a resposta para JSON
            setDatabase(data);
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }

    function createData() {
        const newProduct = {};

        newProduct.product = prompt("Digite o nome do produto:");
        if (!newProduct.product) {
            return; // Se o usuário cancelar ou deixar em branco, não cria o produto
        }

        newProduct.quantity = parseInt(prompt("Digite a quantidade do produto:"), 10);
        if (isNaN(newProduct.quantity) || newProduct.quantity <= 0) {
            alert("Quantidade inválida!");
            return; // Se o usuário digitar uma quantidade inválida, não cria o produto
        }

        newProduct.price = parseFloat(prompt("Digite o preço do produto:"));
        if (isNaN(newProduct.price) || newProduct.price <= 0) {
            alert("Preço inválido!");
            return; // Se o usuário digitar um preço inválido, não cria o produto
        }

        newProduct.id = database.length + 1; // Atribui um novo ID ao produto

        setDatabase([...database, newProduct]);
    }

    function readData() {
        return database.map(item => (
            <tr key={item.id}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
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

            newProduct.product = prompt("Digite o novo nome do produto:");
            if (!newProduct.product) {
                return; // Se o usuário cancelar ou deixar em branco, não atualiza o produto
            }

            newProduct.quantity = parseInt(prompt("Digite a nova quantidade do produto:"), 10);
            if (isNaN(newProduct.quantity) || newProduct.quantity <= 0) {
                alert("Quantidade inválida!");
                return; // Se o usuário digitar uma quantidade inválida, não atualiza o produto
            }

            newProduct.price = parseFloat(prompt("Digite o novo preço do produto:"));
            if (isNaN(newProduct.price) || newProduct.price <= 0) {
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
            <h1>CRUD em JSON</h1>
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
            <button onClick={createData}>Adicionar Dados</button>
        </div>
    );
}

export default Produto;

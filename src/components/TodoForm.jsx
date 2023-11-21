import { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("") //UseState inicial com uma string vazia
    const [category, setCategory] = useState("")

    // Ela vai cuidar do submit do formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validação para não ter dados nulos
        if(!value || !category) return;
        // Adicionar ToDo 
        addTodo(value, category);
        //Limpar campos após isso.
        setValue("")
        setCategory("")
    };

    return <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}> 
            <input 
            type="text" 
            placeholder="Digite a tarefa" 
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}> 
                <option value="">Selecione uma categoria</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Geral">Geral</option>
                <option value="Cozinha">Cozinha</option>
                <option value="Ideias">Ideias</option>
                <option value="Outros">Outros</option>


            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>;
}

export default TodoForm
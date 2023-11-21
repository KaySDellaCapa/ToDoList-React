# To Do List criada com React

Algumas boas horas foram gastas nesse projeto, mas no final eu chuto dizer que valeu a pena. Apesar de trabalhar como dev front e back-end, eu geralmente costumo gostar mais de back-end e a parte de automação - mas foi trabalhoso e prazeroso moldar esse código e aprofundar mais meu conhecimento no react. A ideia da interface simples não foi por preguiça, mas pensado para ser algo mais clean para o usuario, onde ele simplismente anota suas tarefas ou ideias e fica por isso. O projeto não se propoem a ser mais e considero isso uma boa coisa. Alguns dos problemas enfrentados foram as funcionalidades não darem resposta e, consequentemente, o servidor não dar resposta ou sumir algumas coisas antes implementedas. Mas com pesquisa e dedicação, foram superadas.
--------------------------------------
# Funcionalidades:

* O site apresenta uma serie de categorias para anotar sua tarefa, como "Trabalho", "Ideias", "Pessoal" entre outros, o que deixa um pouco mais de liberdade para o usuario anotar o que tem em sua cabeça.
* Possui dois botões, um de Descrecente e um de Ascendente, que altera a ordem alfabética das tarefas.
* Possui a lista de Completadas, Incompletas e Todas, para filtrar as tarefas.
* Após a tarefa sem completada, e o usuario apertar o botão verde, o nome da tarefa fica com um risco, como num caderno, dizendo que, ei, "você completou"; trazendo a sensação de que está riscando num caderno.
* Apesar de parecer algo que deveria existir em todas To Do List, originalmente, ao recarregar o site ou o código, as tarefas não ficavam salvas e isso é um crime. Então, implementei uma função dentro do código onde não se armazena numa nuvem, mas localmente - assim, cada usuario poderá usar separamente sem interferir nas tarefas de outros.
-------------------------------------
React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

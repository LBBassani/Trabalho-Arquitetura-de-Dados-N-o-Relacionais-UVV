/* 
 * 
 */
/* 1. Criar o banco de dados "universidade". */
use universidade;

/* 2. Criar a collection "alunos": */
db.createCollection("alunos");

/* 3. Cadastrar alunos: inserir o primeiro dado com insertOne e os demais dados com insertMany. */
db.alunos.insertOne({
    nome: "Lorena Bassani",
    matricula: "202204704",
    email: "lorena@uvv.br",
    curso: "Analise e desenvolvimento de sistemas",
    cep: 29092270,
    disciplinas: [ 
        {nome: "disciplina 1", nota1: 8, nota2: 10, mediaFinal: 9, nome_do_professor: "Professor 1"} , 
        {nome: "disciplina 2", nota1: 7, nota2: 10, mediaFinal: 8.5, nome_do_professor: "Professor 2"} , 
        {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} 
    ]
})

db.alunos.insertMany([
    {
        nome: "Aluno 1",
        matricula: "202401001",
        email: "aluno1@uvv.br",
        curso: "Curso 1",
        cep: 29100001,
        disciplinas: [ 
            {nome: "disciplina 1", nota1: 8, nota2: 10, mediaFinal: 9, nome_do_professor: "Professor 1"} , 
            {nome: "disciplina 2", nota1: 7, nota2: 10, mediaFinal: 8.5, nome_do_professor: "Professor 2"} , 
            {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} 
        ]
    },
       {
        nome: "Aluno 2",
        matricula: "202401002",
        email: "aluno2@uvv.br",
        curso: "Curso 1",
        cep: 29100201,
        disciplinas: [ 
            {nome: "disciplina 2", nota1: 6, nota2: 9, mediaFinal: 7.5, nome_do_professor: "Professor 2"} , 
            {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} , 
            {nome: "disciplina 4", nota1: 6, nota2: 8, mediaFinal: 7, nome_do_professor: "Professor 1"}
        ]
    },{
        nome: "Aluno 3",
        matricula: "202402003",
        email: "aluno3@uvv.br",
        curso: "Curso 2",
        cep: 29100051,
        disciplinas: [ 
            {nome: "disciplina 1", nota1: 8, nota2: 10, mediaFinal: 9, nome_do_professor: "Professor 1"} , 
            {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} , 
            {nome: "disciplina 4", nota1: 6, nota2: 8, mediaFinal: 7, nome_do_professor: "Professor 1"}
        ]
    },{
        nome: "Aluno 4",
        matricula: "202401004",
        email: "aluno4@uvv.br",
        curso: "Curso 1",
        cep: 29100041,
        disciplinas: [ 
            {nome: "disciplina 1", nota1: 8, nota2: 10, mediaFinal: 9, nome_do_professor: "Professor 1"} , 
            {nome: "disciplina 2", nota1: 7, nota2: 10, mediaFinal: 8.5, nome_do_professor: "Professor 2"} , 
            {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} 
        ]
    },{
        nome: "Aluno 5",
        matricula: "202403005",
        email: "aluno5@uvv.br",
        curso: "Curso 3",
        cep: 29103001,
        disciplinas: [  
            {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} 
        ]
    },{
        nome: "Aluno 6",
        matricula: "202402006",
        email: "aluno6@uvv.br",
        curso: "Curso 2",
        cep: 29100354,
        disciplinas: [ 
            {nome: "disciplina 1", nota1: 8, nota2: 10, mediaFinal: 9, nome_do_professor: "Professor 1"} , 
            {nome: "disciplina 2", nota1: 7, nota2: 10, mediaFinal: 8.5, nome_do_professor: "Professor 2"} , 
            {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} , 
        ]
    },{
        nome: "Aluno 7",
        matricula: "202403007",
        email: "aluno7@uvv.br",
        curso: "Curso 3",
        cep: 29107801,
        disciplinas: [ 
            {nome: "disciplina 1", nota1: 8, nota2: 10, mediaFinal: 9, nome_do_professor: "Professor 1"} , 
            {nome: "disciplina 2", nota1: 7, nota2: 10, mediaFinal: 8.5, nome_do_professor: "Professor 2"} , 
            {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} , 
        ]
    },{
        nome: "Aluno 8",
        matricula: "202402008",
        email: "aluno8@uvv.br",
        curso: "Curso 2",
        cep: 29106941,
        disciplinas: [ 
            {nome: "disciplina 1", nota1: 8, nota2: 10, mediaFinal: 9, nome_do_professor: "Professor 1"} , 
            {nome: "disciplina 2", nota1: 7, nota2: 10, mediaFinal: 8.5, nome_do_professor: "Professor 2"} , 
            {nome: "disciplina 3", nota1: 9, nota2: 9, mediaFinal: 9, nome_do_professor: "Professor 3"} , 
        ]
    },
]);

/* 4. Criar a collection "professores": */
db.createCollection("professores");

/* 5. Cadastrar professores: inserir o primeiro dado com insertOne e os demais dados com insertMany. */
db.professores.insertOne({
    nome: "JEAN-REMI Bourguet",
    matricula: "2024001",
    formacao: "Doutor",
    carga_horaria: 35,
    disciplinas: [
        "Arquitetura de Dados Não Relacionais",
        "Programação Orientada a Objetos",
        "Programação Funcional"
    ]
});
db.professores.insertMany([
    {
        nome: "Professor 2",
        matricula: "2024002",
        formacao: "Mestre",
        carga_horaria: 30,
        disciplinas: [
            "Arquitetura de Dados Não Relacionais"
        ]
    },
    {
        nome: "Professor 3",
        matricula: "2024003",
        formacao: "Doutor",
        carga_horaria: 44,
        disciplinas: [
            "Programação Orientada a Objetos",
            "Programação Funcional"
        ]
    },
    {
        nome: "Professor 4",
        matricula: "2024004",
        formacao: "Bacharel",
        carga_horaria: 20,
        disciplinas: [
            "Programação Funcional"
        ]
    },
    {
        nome: "Professor 5",
        matricula: "2024005",
        formacao: "Mestre",
        carga_horaria: 35,
        disciplinas: [
            "Arquitetura de Dados Não Relacionais",
            "Programação Orientada a Objetos",
            "Programação Funcional"
        ]
    },
    {
        nome: "Professor 6",
        matricula: "2024006",
        formacao: "Bacharel",
        carga_horaria: 30,
        disciplinas: [
            "Arquitetura de Dados Não Relacionais",
            "Programação Orientada a Objetos",
            "Programação Funcional"
        ]
    },
    {
        nome: "Professor 7",
        matricula: "2024007",
        formacao: "Doutor",
        carga_horaria: 40,
        disciplinas: [
            "Arquitetura de Dados Não Relacionais",
            "Programação Orientada a Objetos",
            "Programação Funcional"
        ]
    },
]);

/* 6. Pesquisar na collection de professores, aqueles cuja carga horária é maior que 30 e menor que 40. */
db.professores.find({
	$and: [
		{
			"carga_horaria": {
				$gt: NumberInt(30)
			}
		}, {
			"carga_horaria": {
				$lt: NumberInt(40)
			}
		}
	]
});

/* 7. Atualizar a formação de um professor específico. */
db.professores.findAndModify({query:{matricula:"2024005"}, update:{$set:{formacao: "Doutor"}}, new: true});

/* 8. Remover todos os alunos de Vila Velha (com cep entre 29100001 e 29129999). */
db.alunos.deleteMany({ "cep" : { $gte : NumberInt(29100001), $lte : NumberInt(29129999) } });

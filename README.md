# Compilado estudos de um Servidor NODE - Express

<div>
<img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="logo express" width="200" height="auto">
<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="logo postgres" width="200" height="auto">
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="logo nginx" width="300" height="auto">

### instruções básica

- Após clonar a este repositório, para instalar as dependências necessárias, dentro da pasta servidor01 rodar no terminal o comando: npm install
- Para o acesso do endPoint /carros é necessário que seja escolhido um modelo de carro, sendo que o número do modelo deve está entre 1 e 3 (ex: /carros/1). Pode se utilizar o HTTPie por meio do comando: http http://localhost:3000/carros/1  I
- Para o acesso das rotas "/" e "/postLocal" é necessário que seja instanciado um container redis
- Para o acesso do endPoint /carros basta rodar o arquivo index.js dentro da pasta servidor01 e abrir a rota http://localhost:3000/carros/{numero}. O numero deve ser digitado sem colchetes e deve ser de 1 a 3.
- Para rodar os containers do redis e do postgres pode se utilizar o comando "npm run service:up", que está automatizado no package.json
- Após rodar os containers utilizar o postgresql-client para linux para criar tabela de cadastroPessoas com o seguinte comando SQL: CREATE TABLE cadastroPessoas (
  i_idpessoa_cadastroPessoas SERIAL PRIMARY KEY,
  s_nome_cadastroPessoas VARCHAR(50) NOT NULL,
  i_idade_cadastroPessoas INT NOT NULL
);
 - Caso o comando acima não seja criado não é possível fazer um post nos endPoints /postPostgres e /consultaPostgres  
 - Para fazer um post em /postPostgres pode -se utilizar a ferramenta HTTPIE, por meio do comando: http POST http://localhost:3000/postpostgres Content-Type:application/json <<< '{"nome":"Ramon", "idade":31}' (o HTTPie pode ser instalado por meio do comando sudo apt install httpie) 
 - Para testar codigo de cookies rodar no terminal:node cookie.js e jogar no navegar endpoint: http://localhost:3000/setUserName?username=Seunome

### Tecnologias abordadas:

- Node + Express
- Postgres + redis
- testes feitos com Jest
- docker

### Docker

-Comandos:
docker images -> Este comando lista todas as imagens Docker armazenadas localmente no seu sistema.

Docker build -t nome:versão . -> comando de criação do container a partir do Dockerfile passando parâmetros de no me e versão

docker ps -a ->Este comando lista todos os contêineres, independentemente de estarem em execução ou parados.

docker run [opções] [imagem] [comando] [argumentos] ->criar e iniciar um contêiner a partir de uma imagem.

docker stop [nomeContainer] -> para o container

docker rm [nomeContainer] -> exclui o container

docker rmi [nomeImage] -> remove a imagem docker colocada como parâmetro

Para acessar o terminal bash de um dos containers docker exec -it <idcontainner> <bash/sh>

para editar arquivos dentro do container é possível utilzar o vi

Para rodar um container especifico a partir de uma imagem docker run -d --name api nome_da_imagem

para encontrar o ip do container: docker inspect <nome_do_contêiner> 

numero de conexões abertas contra o postgres: SELECT count(\*)::int FROM pg_stat_activity where datname = 'postgres'; (deve ser o nome da database)


### Postgres

- O redis de preferência deve ser instalado dentro de um container docker. Exemplo de comando:docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=local_password postgres:16.1-alpine3.19 (necessário revisar este comando e o endpoint consultaPostgres)
- Comando para conectar o postgresql-client ao banco de dados postgres:psql --host=localhost --username=postgres --port=5432 (após este comando o banco deve solicitar a senha de acesso que é:local_password)

### Redis

- instalação redis no WSL2 do windows: https://developer.redis.com/create/windows/
- o redis de preferência deve ser instalado dentro de um container docker. Exemplo de comando: docker run -d -p 6379:6379 redis:7.2.4-alpine (a versão é o parâmetro mais variável neste comando)
- Comandos:
  set chave valor
  get chave (resposta = valor)

#### Node-Redis

- O redis-redis por padrão se conecta à porta 6379, de forma que é conveniente subir o container com o redis escutando na porta 6379, caso se deseje subir o redis-server em outra porta deve-se colocar esta opção de configuração dentro do construtor objeto createCliente()

### Jest

- Comandos:
  jest -> executa todos os testes implementados
  jest --watch -> executa o inspecionamento em todos os arquivos alterados sempre que algum arquivo é salvo
  jest --watchAll -> executa o inspecionamento em todos os arquivos sempre que algum arquivo é salvo

### Curl

- Para fazer uma operação de post no endPoint /postRedis pelo Comand prompt ou linux utilizando o curl utilizar: curl -X POST "http://localhost:3000" -H "accept: application/json" -d "{\"nome\": \"Ramon\"}. Estas barras invertidas são necessárias no comand prompt do windows.
- Para fazer uma operação de post no endPoint /postRedis pelo powersheel utilizar: Invoke-WebRequest -Uri "http://localhost:3000/postRedis" -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"nome": "Ramon"}'. Obs: por padrão o powershell executa o Invoke-WebRequest no lugar do curl, pois no powershell curl é alias do Ivoke-WebRequest

### Telnet

- Caso deseje fazer uma conexão via telnet usar comando: telnet localhost 3000. Este comando abrirá uma conexão tcp/ip. Com a conexão aberta, pode-se digitar o head e o body do protocolo HTTP como nos exemplos abaixo: 

// para o endPoint consultaRedis 

GET /consultaRedis HTTP/1.1
Host: localhost:3000
User-Agent: (nome do User-Agent)
Accept: */*

// para o endPoint postRedis

POST /postRedis HTTP/1.1
User-Agent: (nome do User-Agent)
Content-Type: application/json
Accept: */*
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 18

{"nome":"Carlos"}
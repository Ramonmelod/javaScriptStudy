# Compilado estudos de um Servidor NODE

### instruções básica

- Para o acesso das rotas "/" e "/postLocal" é necessário que seja instanciado um container redis
- Para o acesso do endPoint /carros basta rodar o arquivo index.js dentro da pasta servidor01 e abrir a rota http://localhost:3000/carros/{numero}. O numero deve ser digitado sem colchetes e deve ser de 1 a 3.

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

### Postgres

- O redis de preferência deve ser instalado dentro de um container docker. Exemplo de comando:docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=local_password postgres:16.1-alpine3.19 (necessário revisar este comando e o endpoint consultaPostgres)

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
- Para fazer uma operação de post no endPoint /postRedis pelo powersheel utilizar: Invoke-WebRequest -Uri "http://localhost:3000/postRedis" -Method Post -Headers @{"accept"="application/json"} -Body '{"nome": "Ramon"}'. Obs: por padrão o powershell executa o Invoke-WebRequest no lugar do curl, pois no powershell curl é alias do Ivoke-WebRequest

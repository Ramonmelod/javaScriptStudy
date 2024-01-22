# Compilado estudos de um Servidor NODE

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

### Redis

- instalação redis no WSL2 do windows: https://developer.redis.com/create/windows/
- Comandos:
  set chave valor
  get chave (resposta = valor)

### Jest

- Comandos:
  jest -> executa todos os testes implementados
  jest --watch -> executa o inspecionamento em todos os arquivos alterados sempre que algum arquivo é salvo
  jest --watchAll -> executa o inspecionamento em todos os arquivos sempre que algum arquivo é salvo

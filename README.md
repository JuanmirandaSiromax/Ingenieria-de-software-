# Integrantes
- Diego Escobar
- Alberto Lizana 
- Juan Miranda
- Wladimir Rojas

# Curso
- Ingeniería de Software 003A
- Patricio Oliva

# Tecnologías
### Backend
- Java 17 azul zulu
- Springboot 3.3.3
- Mysql
- Docker / Compose

### Frontend
- Javascript
- React 18.3.1
- Axios 1.7.7
---

# Instrucciones Generales
## Pre-requisitos
- Tener instalado java 17 [Aquí](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- Tener instalado NODE [Aquí](https://nodejs.org/en)
- Instalar docker desktop [Aquí](https://www.docker.com/products/docker-desktop/)
- Editor de código preferido ej: vscode

### Backend
Ir a la raíz del proyecto java 
```bash
cd backend/java/test
```
ejecutar los siguientes comandos de docker
```bash
./mvnw clean package "esto limpiará compilaciones anteriores y creará una nueva en la carpeta target"
docker-compose down -v  "esto detiene los contenedores y elimina redes personalizadas"
docker volume prune -f "elimina todos los volúmenes de datos"
docker-compose up --build "limpia y realiza un comienzo limpio"
```
El último comando intentará ejecutar la aplicación java.
Si tienes instalado mysql anteriormente, posiblemente falle porque el puerto ya está en uso(puerto 3306), para ello:
> Windows + r

- escribe ```services.msc```
- busca el servicio de mysql y detenlo
- repite los comandos anteriores de docker

### Frontend
Con node instalado, en la raíz del proyecto
```bash
cd frontend/hoteltest
```
ejecuta los siguientes comandos:
```bash
npm i "esto instalará todas las dependencias necesarias para ejecutar"
npm run start "esto levantará el proyecto y abrirá tu explorador por defecto con el componente de inicio que está en App.js"
```

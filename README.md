# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Preparar este proyecto para correr en Local
1. En la aplicación SqlServer Configuration Manager de la base de datos de SQLSERVER se debe habilitar TCP/IP en network configuration y finalmente en las propiedades del protocolo TCP/IP en la pestaña de "IP Adresses" en el bloque final llamado "IPAII" se debe validar que TCP Dynamic Ports esté vacío y TCP Port tenga el puerto 1433.
2. En el archivo .env.local ajustar los bloques de "Conexion a la BD de Transforma" y "Conexion a la BD de Seguridad de Trasnforma".
3. Correr el comando "npm install". (Si sale un error de permisos, corre en la consola esta linea "Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned"), con esto daras permisos al usuario actual para ejecutar el proyecto.

# Correr este proyecto en Local
1. Para correr el proyecto usar el comando "npm run local"
2. Para validar que el back si subió, en una ventana de navegador digita http://localhost:8000 y si todo subió bien, debería aparecer algo como... "Cannot GET /"

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
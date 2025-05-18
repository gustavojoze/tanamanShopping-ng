<h1 align="left">🌼 Tanaman</h1>
<br>
<h2 align="left">📋 Descrição do projeto:</h2>
Um e-ccomerce para comprar plantas, flores de todos os tipos. O usuário pode se cadastrar, fazer seu login, adicionar produtos ao carrinho e finalizar o pedido. Também pode alterar sua senha, caso o usuário a esqueça. 
<br><br>

<h2>🛠️ Tecnologias:</h2>

| Área | Tecnologia |
| --- | --- |
| Frontend | <img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"/> <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/> <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/> |
| Backend | <img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"/> <img alt="Spring" src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"/> |
| Banco de dados | <img alt="Visual Studio Code" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"/> |
| Ferramentas | <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/> <img alt="Figma" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"/> |

<br><br>
<h2 align="left">🎥 Video do projeto:</h2>


https://github.com/user-attachments/assets/a711e97e-7bd7-4b9d-ba5b-12b0ed732c4d



<br><br>
<h2 align="left"> ⚙️ Funcionalidades</h2>

* Cadastro de usuário com validação de campos.

* Login com verificação de credenciais.

* Listagem de produtos com imagens, preços e descrição.

* Visualização detalhada de um produto.

* Adição e remoção de produtos no carrinho.

* Simulação de compra com finalização condicionada (apenas usuários logados)

* Redefinição de senha, caso o usuário a esqueça 

* Layout responsivo para dispositivos móveis.

* Integração frontend Angular com backend Spring Boot.
 
* Persistência de dados com MySQL.

**⚠️ O usuário só pode Finalizar a compra, somente se estiver logado**

<br><br>
<h2 align="left">▶️ Como rodar o projeto localmente?</h2>

<h3 align="left">💿 Pré-requisitos:</h3>

✅ Node.js instalado

✅ Angular CLI version 18.2.4 instalado globalmente 

✅ Java JDK 17+

✅ MySQL instalado e em execução (serviço MySQL80 no Windows)

<h3 align="left">⭕ Como inicializar o projeto:</h3>

Faça um git clone do repositório: 
<br>
```git clone https://github.com/gustavojoze/tanamanShopping-ng.git```

Execute o arquivo LojaApplication.java. O arquivo esta dentro de backend, você pode ver mais na seção: "📁 Estrutura de Pastas do Projeto"

Acesse a pasta frontend, abra o CMD e execute o seguinte 
código:
<br>
```ng serve```

Acesse a aplicação no navegador:
http://localhost:4200/
<br> <br>

<details>
  <summary>📁 Estrutura de Pastas do Projeto</summary>

```
tanamanShopping-ng/
├── .angular/
│ └── cache/
│ └── 18.2.7/
│ └── project/
│ └── vite/
├── backend/
│ └── loja/
│ ├── pom.xml
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/
│ │ │ │ └── com/fatec/loja/
│ │ │ │ ├── Controller/
│ │ │ │ ├── Model/
│ │ │ │ ├── Repository/
│ │ │ │ └── LojaApplication.java
│ │ │ └── resources/
│ │ │ └── application.properties
│ │ └── test/
│ │ └── LojaApplicationTests.java
├── frontend/
│ ├── angular.json
│ ├── package.json
│ ├── src/
│ │ ├── app/
│ │ │ ├── cesta/
│ │ │ ├── cliente/
│ │ │ ├── vitrine/
│ │ │ ├── service/
│ │ │ ├── model/
│ │ │ ├── login/
│ │ │ └── header/
│ │ └── assets/
│ └── styles.css
└── README.md

```

</details>
<br><br>


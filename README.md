<h1 align="center">
New Product
</h1>

<h4 align="center">
  A simple back end to create new products and store in the Sqlite3 Database.
</h4>

![GitHub top language](https://img.shields.io/github/languages/top/vop1234/NewProduct)  ![GitHub language count](https://img.shields.io/github/languages/count/vop1234/NewProduct)

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">License</a>
</p>

<br>

## :rocket: Tecnologias

This project was developed with the following technologies:
### [](https://github.com/vop1234/NewProduct) Dependencies
- ["cors": "^2.8.5"](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
- ["express": "^4.17.1"](https://expressjs.com/)
- ["knex": "^0.20.13"](http://knexjs.org/)
- ["sqlite3": "^4.1.1"](https://www.sqlite.org/index.html)
 

## :computer:   Project
The back end was developed with the following routes:

-> '/ products' with the "get" method to list the registered products, with the answer in JSON.
-> '/ products' with the "post" method to store a new product in the database.
-> '/ products /: id' with the "get" method to list a specific product by passing its ID as a parameter.
-> '/ products /: id' with the "put" method to change data for a specific product.
-> '/ products /: id' with the "delete" method to delete a specific product from the database.

## 🤔   How to contribute
- Fork this repository;
- Create a branch with your feature: `git checkout -b <i>minha-feature</i>`;
- Commit your changes: `git commit -m 'feat: Minha nova feature'`;
- Push to your branch: `git push origin minha-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## :memo: License

This project is under the MIT license.




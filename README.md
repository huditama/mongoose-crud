# mongoose-crud
Book Routes
====

|Route    |HTTP  |Body  | Description |
|:--------: |:----:|:----:|:----:|
|`/books`|GET   | `none`|Get all books|
|`/books/?search=[title/author]`|GET   | `none`|Get books based on title OR author|
|`/books/?title=[title]`|GET   | `none`|Get books based on title|
|`/books/?author=[author]`|GET   | `none`|Get books based on author|
|`/books/:bookId`|GET   |`none`|Get one book |
|`/books`|POST   |`isbn:String` (**REQUIRED**), `title:String` (**REQUIRED**), `author:String` (**REQUIRED**), `category:String` (**REQUIRED**), `stock:Number` (**REQUIRED**)|Create a new book|
|`/books/:bookId`|PUT   |`isbn:String` (**REQUIRED**), `title:String` (**REQUIRED**), `author:String` (**REQUIRED**), `category:String` (**REQUIRED**), `stock:Number` (**REQUIRED**)|Update (PUT) book details|
|`/books/:bookId`|PATCH    |`title:String` (**REQUIRED**)|Update (PATCH) book title|
|`/books/:bookId`|DELETE     |`none`|Delete a book|

Member Routes
====

|Route    |HTTP  |Body  | Description |
|:--------: |:----:|:----:|:----:|
|`/members`|GET   | `none`|Get all members|
|`/members/:memberId`|GET   |`none`|Get one member |
|`/members`|POST   |`name:String` (**REQUIRED**), `address:String` (**REQUIRED**), `zipcode:String` (**REQUIRED**), `email:String` (**REQUIRED**), `phone:Number` (**REQUIRED**)|Create a new member|
|`/members/:memberId`|PUT   |`name:String` (**REQUIRED**), `address:String` (**REQUIRED**), `zipcode:String` (**REQUIRED**), `email:String` (**REQUIRED**), `phone:Number` (**REQUIRED**)|Update (PUT) member details|
|`/members/:memberId`|PATCH    |`address:String` (**REQUIRED**)|Update (PATCH) member title|
|`/members/:memberId`|DELETE     |`none`|Delete a member|

Transaction Routes
====

|Route    |HTTP  |Body  | Description |
|:--------: |:----:|:----:|:----:|
|`/transactions`|GET   | `none`|Get all transactions|
|`/transactions/?bookId=[bookId]`|GET   | `none`|Get transactions based on Book ID|
|`/transactions/:transactionId`|GET   |`none`|Get one transaction |
|`/transactions`|POST   |`name:String` (**REQUIRED**), `address:String` (**REQUIRED**), `zipcode:String` (**REQUIRED**), `email:String` (**REQUIRED**), `phone:Number` (**REQUIRED**)|Create a new transaction|
|`/transactions/:transactionId`|PUT   |`name:String` (**REQUIRED**), `address:String` (**REQUIRED**), `zipcode:String` (**REQUIRED**), `email:String` (**REQUIRED**), `phone:Number` (**REQUIRED**)|Update (PUT) transaction details|
|`/transactions/:transactionId`|PATCH    |`address:String` (**REQUIRED**)|Update (PATCH) transaction title|
|`/transactions/:transactionId`|DELETE     |`none`|Delete a transaction|

Usage
===
```javascript
$ npm install
$ node app.js
```
Access application via http://localhost:3000/
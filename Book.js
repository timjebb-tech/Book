function Book(title, author, pages, read) {

    if (!new.target) {
        throw Error("Fuck off, you have to use new for this");
    };

    this.name = this.name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "already read" : "not read yet"}`;
    }

    return this;
}

function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
  };
}


Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
};



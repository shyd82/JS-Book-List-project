// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}



// UI Constructor
function UI(){

}

// Add Book To List 
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
// Create the tr element
    const row = document.createElement('tr');

    // console.log(row);

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href= "#" class= "delete" >X</a> </td>`;
    
    list.appendChild(row);

};


// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};




// Event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values:
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;


    console.log(title,author,isbn);





    // 以下两步的instantiating是源于最上面的两步：

    // Instantiating the book object
    const book = new Book(title, author, isbn);

    // Instantiating the UI:
    const ui = new UI;





    // 接下来，we are going to add the book object down  here and the UI object is going to take care of that

    // 也就是说当summit提交后，事件触发，需要将上一步的book放在最下面的table里，这个过程由UI来完成



    // Add book to list:
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields()




    
    e.preventDefault();
})



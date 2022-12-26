document.addEventListener('DOMContentLoaded', () =>{
  fetchBooks()
})

function fetchBooks(){
return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
  
}

function renderBooks(book){
const main = document.querySelector('main')
 book.forEach(books => {
  const h2 = document.createElement('h2')
  h2.innerHTML = books.name
  main.appendChild(h2)
  
});
}


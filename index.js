async function getBooks(){
    try{
       const response = await fetch("https://upadhayay.github.io/db.json");
       const data = await response.json();

       const booksDiv = document.getElementById("books");

       for(let book of data.books){
        //creating a book element and adding the books from the fetch command to the element
        const newBookDiv = document.createElement("books");
        newBookDiv.textContent = `${book.title} - ${book.year} -> ${book.published}`;

        //creating the img element and setting it to paper.jpg
        const img = document.createElement("img");
        img.src = "paper.jpg";
        img.alt = "paper";
        img.classList.add("paper.jpg");

        //adds the book to the variable, allowing to to then be used and affected by style.css
        booksDiv.appendChild(newBookDiv);
        newBookDiv.appendChild(img);

        newBookDiv.classList.add("book");
       }
    }
    catch{
        console.error("Error fetching books data: ", error);
    }
}
getBooks();
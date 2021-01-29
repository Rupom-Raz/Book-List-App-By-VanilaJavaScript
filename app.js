// dom selection
// event listener
// basic validation
// creating element
// append ui

// Selection ID from html

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let btn = document.querySelector("#btn");
let bookList = document.querySelector("#book-list");

btn.addEventListener("click", (event) => {
  event.preventDefault();
 
  

  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Please Provide Every Input Data");
  } else {
    let newRow = document.createElement("tr");
    //Creating new data for final result
    let newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle)

    let newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor)


    let newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear)
    bookList.append(newRow)
  }
});

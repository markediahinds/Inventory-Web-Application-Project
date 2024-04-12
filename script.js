// function changeColor()
//     {
//     alert("bla")
//    document.getElementById("text1").style("backgroundColor":"red"); 
//     }

// Coach Joshua:
// in form, there is a Submit
// Hub spot to call other functions
// function to create bookList, with all info
// append to bookList
// function create book / createElements: li, img, info, icon
// to remove trash, remove div/to delete parent, or put EL on trash
// put each task into a function
// in form, grab values of all the inputs // it lives elsewhere, loophole to bypass scope is to give permission to each function, give it a param
    


const input = document.querySelectorAll("input");
const bookList = document.querySelector("ul");
const form = document.querySelector("form");


form.addEventListener('submit', (e) => {
    e.preventDefault();

        const [title, author, url, price, stock] = e.target;
        const bookObj = {title: title.value, author: author.value, url: url.value, price: price.value, stock: stock.value};

        createBook(bookObj);
    
        // console.log(form, 'success')

        form.reset();
})


function createBook (bookObj) {
    const {title, author, url, price, stock} = bookObj
    
    const book = document.createElement('li');
    const img = document.createElement('img');
    const bookInfo = document.createElement('div');
   
    const randomUrl = document.createElement("input");
    randomUrl.setAttribute("type", "url");

    const trash = document.createElement('i');
    trash.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
    
    const newTitle = document.createElement('p');
    const newAuthor = document.createElement('p');
    const inventory = document.createElement('p');
    const newPrice = document.createElement('p');

    book.setAttribute("class", "book");
    img.setAttribute("class", "image");
    bookInfo.setAttribute("class", "bookInfo");
    trash.classList.add("fa-regular", "fa-trash-can", "trash");
    newTitle.setAttribute("class", "bookInfo__title");
    newAuthor.setAttribute("class", "bookInfo__author");
    inventory.setAttribute("class", "bookInfo__inventory");
    newPrice.setAttribute("class", "bookInfo__price");
    // trash.setAttribute("class" [_______])

    newTitle.innerText = title;
    newAuthor.innerText = author;
    img.src = url;
    inventory.innerText = stock;
    newPrice.innerText = price;

    book.append(img, bookInfo, trash);
    bookInfo.append(newTitle, newAuthor, inventory, newPrice);

    // addBook(book) // package as a parameter
    bookList.append(book);
}

// function addBook (book) {
//     const addBookBtn = document.querySelector("button");
     
//     addBookBtn.addEventListener('click', (e) => {
    
//         bookList.append(book);
//     })
// }

// For adding an event listener to the trash icons that appear when th page is first loaded
const trashIcon = document.querySelectorAll(".trash");

trashIcon.forEach(trash => {
    trash.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
})

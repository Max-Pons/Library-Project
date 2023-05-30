/* Modals Section, 
*First we declare these three variables that allow us 
to open and close our modals.
The first one selects any button that uses the 'data modal target'
The second one selects the 'overlay' so that users can close the modal
by clicking outside of it.
The third one selects the submit button in the form modal so that it also
closes automatically once you submit the form and create a book.

*Then we create the functions to open and close the modals, they simply 
add or take away the declared class in CSS to make the modal and
the overlay 'active'.

*Afterwards, we have the event listeners, the fist one iterates 
on each value of the 'openModalButtons' variables to apply the 
same event listener that creates a new 'modal' variable and calls
the 'openModal()' function, passing 'modal' variable as its arg.

*Lastly, we have the closeModals and submitButton event listeners
that declare their own variables to select the current active 
modal and pass it as the closeModal() function argument to have 
it closed */ 


const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModals = document.querySelector('#overlay');
const submitButton = document.querySelector('#submit');



function openModal(modal) {
  if (modal === null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal === null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModals.addEventListener('click', () => {

  const formModal = document.querySelector('.new-book-window.active')
    closeModal(formModal)

  const infoModal = document.querySelector('.info-window.active')
    closeModal(infoModal)

  const modal = document.querySelectorAll('.deleteButton')
  modal.forEach(div => {
    closeModal(div)
      
  })
  
})


submitButton.addEventListener('click', (event) => { 
  event.preventDefault();

  const formModal = document.querySelector('.new-book-window.active')  
    closeModal(formModal)
  
})

//

let myLibrary = [];
function Book(title, author, pages, cover, check) {
  this.title = title
  this.author = author
  this.pages = pages
  this.cover = cover
  this.check = check
}

function userInput(title, author, pages, cover, check) {
  const inputBook = new Book(title, author, pages, cover, check)
  myLibrary.push(inputBook)      
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title)
  }
}



function createBookDiv(title, author, pages, cover, check) {
  const booksGrid = document.querySelector('#books');
  const addBookDiv = document.querySelector('#add-book-div'); // This selects the button in the grid                                        
                                                              // so that the new book gets inserted before.     
    
    if (title.trim() === '' || author.trim() === '' || pages <= 0) {
    window.alert('Please provide valid inputs for title, author, and pages.');
    return; 
    }
    else if (!/^\d+$/.test(pages)) {
      window.alert('Please provide a valid number for the pages input, i.e. `496`');
      return
    }                                                          

    let bookDiv = document.createElement('div');  
    let bookCoverCard = document.createElement('div');
    let infoDiv = document.createElement('div');
    let infoTitle = document.createElement('div');
    let infoText = document.createElement('div');
    let deleteBook = document.createElement('div');
    
    let headingTitle = document.createElement('h3') 
    let textOne = document.createElement('p')
    let coverPicture = document.createElement('img')
    coverPicture.alt = 'Book Cover';
    let readCheck = document.createElement('button') 
    let removeBookButton = document.createElement('button')

    bookDiv.classList.add('book')                                                               
    bookCoverCard.classList.add('book-cover-card')
    infoDiv.classList.add('book-info-card')
    infoText.classList.add('infoText')
    readCheck.classList.add('check-switch-button')
    deleteBook.classList.add('deleteButton')
    removeBookButton.classList.add('removeBookButton')
    deleteBook.id = 'close-icon'

    headingTitle.innerHTML = `"${title}"`;                
    textOne.innerHTML = `${author} <br> ${pages} pages`;
    coverPicture.src = cover;

      booksGrid.insertBefore(bookDiv, addBookDiv)
      bookDiv.appendChild(infoDiv)
      bookDiv.appendChild(bookCoverCard)
      bookDiv.appendChild(deleteBook)
      infoDiv.appendChild(infoTitle)
      infoDiv.appendChild(infoText)
      infoTitle.appendChild(headingTitle)
      infoText.appendChild(textOne)
      infoText.appendChild(readCheck)
      bookCoverCard.appendChild(coverPicture)
      deleteBook.appendChild(removeBookButton)
      const checkMark = '\u2714';
      

      if (check === true) {
        readCheck.innerHTML = `Read ${checkMark}`;
        readCheck.style.backgroundColor = '#FFE57D';
        readCheck.style.color = '#3D3D3D'
      } 
      else {
        readCheck.innerHTML = 'Not read';
        readCheck.style.backgroundColor = '#222222';
        readCheck.style.color = '#FFE57D'
      }  

      for (let i = 0; i < myLibrary.length; i++) {
        (function(button) {
          button.addEventListener('click', () => {
            if (button.innerHTML === `Read \u2714`) {
              button.innerHTML = 'Not read';
              button.style.backgroundColor = '#222222';
              button.style.color = '#FFE57D';
            } else {
              button.innerHTML = 'Read \u2714';
              button.style.backgroundColor = '#FFE57D';
              button.style.color = '#3D3D3D';
            }
          });
        })(readCheck);
        removeBookButton.addEventListener('click', () => {
          const modal = document.querySelectorAll('.deleteButton')
          bookDiv.remove();
         
            modal.forEach(div => {
              closeModal(div)
            })
 
        })
        console.log(readButton)
      }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  let bookTitle = document.getElementById('book-title').value;
  let bookAuthor = document.getElementById('book-author').value;
  let bookPages = document.getElementById('book-pages').value;
  let bookCheck = document.getElementById('book-check').checked;

  let bookCover = document.getElementById('new-book-cover');
  let coverSrc = bookCover.files[0];

  if (!bookCover.files[0]) {
    coverSrc = './default.png'
    userInput(bookTitle, bookAuthor, bookPages, coverSrc, bookCheck)
    createBookDiv(bookTitle, bookAuthor, bookPages, coverSrc, bookCheck)
    }      
    else {
  let reader = new FileReader();
  reader.onload = function(event) {
    let imageUrl = event.target.result;
    userInput(bookTitle, bookAuthor, bookPages, imageUrl, bookCheck)
    createBookDiv(bookTitle, bookAuthor, bookPages, imageUrl, bookCheck)
  };
  reader.readAsDataURL(coverSrc);
}

})

  submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  const formReset = document.querySelector('.new-book-window form')  
  formReset.reset()
}) 

const openModalBook = document.querySelector('.edit-icon')
const openModalBookTwo = document.querySelector('.edit-button')
openModalBook.addEventListener('click', () => {
    const modal = document.querySelectorAll('.deleteButton')
    modal.forEach(div => {
      openModal(div)
      
    })
  })
openModalBookTwo.addEventListener('click', () => {
    const modal = document.querySelectorAll('.deleteButton')
    modal.forEach(div => {
      openModal(div)
      
    })
})



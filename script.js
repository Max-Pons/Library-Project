const infoIcon = document.querySelector('#infoIcon');
const addBook = document.querySelector('#add-book-event')
const addBookTwo = document.querySelector('#add-book-event-two')
const addBookThree = document.querySelector('#add-book-event-three')

infoIcon.addEventListener('click', () => {
  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;
  const popupWidth = screenWidth * 0.3;
  const popupHeight = screenHeight * 0.7 ;
  const left = (screenWidth - popupWidth) / 2;
  const top = (screenHeight - popupHeight) / 2;
  
  window.open('info.html', 'Info', `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);
});

addBook.addEventListener('click', () => { 
  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;
  const popupWidth = screenWidth * 0.3;
  const popupHeight = screenHeight * 0.7 ;
  const left = (screenWidth - popupWidth) / 2;
  const top = (screenHeight - popupHeight) / 2;
  
  window.open('newBook.html', 'Popup', `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);

})

addBookTwo.addEventListener('click', () => { 
  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;
  const popupWidth = screenWidth * 0.3;
  const popupHeight = screenHeight * 0.7 ;
  const left = (screenWidth - popupWidth) / 2;
  const top = (screenHeight - popupHeight) / 2;
  
  window.open('newBook.html', 'Popup', `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);

})

addBookThree.addEventListener('click', () => { 
  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;
  const popupWidth = screenWidth * 0.3;
  const popupHeight = screenHeight * 0.7 ;
  const left = (screenWidth - popupWidth) / 2;
  const top = (screenHeight - popupHeight) / 2;
  
  window.open('newBook.html', 'Popup', `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);

})

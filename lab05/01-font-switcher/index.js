const makeBigger = () => {
   document.querySelector('h1').style.fontSize = 'larger';
   document.querySelector('.content').style.fontSize = 'larger';
};

const makeSmaller = () => {
   document.querySelector('h1').style.fontSize = 'smaller';
   document.querySelector('.content').style.fontSize = 'smaller';
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

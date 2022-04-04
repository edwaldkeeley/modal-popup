'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const bntsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// console.log(bntsOpenModal);

for (let i = 0; i < bntsOpenModal.length; i++)
  bntsOpenModal[i].addEventListener('click', 
    openModal);
    // modal.classList.remove('hidden');
    // overlay.classList.remove('hidden');

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    closeModal();
  }
})

// tidak boleh DRY, jadi di deklarasikan dulu diatas
//---------------------before refactoring---------------
// btnCloseModal.addEventListener('click', function() {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// })

// overlay.addEventListener('click', function() {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// })
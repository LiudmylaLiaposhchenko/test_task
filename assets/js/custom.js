let formElm = document.querySelector('.comment-form');
const inputElm = document.querySelector('.comment-input');
const newComment = document.querySelector('.comments');

formElm.addEventListener('submit', (e) => {
  e.preventDefault();
  formElm.remove();
  newComment.innerHTML += `
      <div class="profile">
        <img src="./assets/img/11.jpg">
      </div>
      <div class="comment-content">
        <p class="name">Anonymous</p>
        <p>${inputElm.value}</p>
      </div>
  `;
});

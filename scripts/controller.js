document.querySelector('.menu-btn').addEventListener("click", (event) => {
    event.target.classList.toggle('active');
    document.querySelector('.menu-list').classList.toggle('active');
})
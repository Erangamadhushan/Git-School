import {data} from './content.js';
window.addEventListener("DOMContentLoaded", () => {
    renderMainDirection(data);
});

function renderMainDirection(contents) {
    const mainDirectionContainer = document.querySelector('.mainDirection');
    let mainDirectionContainerContent = " ";
    contents.map((content) => {
        mainDirectionContainerContent += `
            <div class="card bg-dark-50">
                <div class="card-body">
                    <h2 class="card-title text-white">${content.category}</h2>
                    <p class="card-text py-5 text-white">${content.title}</p>
                    <a href="" class="btn btn-outline-alice mb-3">Read More</a>
                </div>
            </div>
        `;
    });
    mainDirectionContainer.innerHTML = mainDirectionContainerContent;
}
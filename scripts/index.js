import {data} from './content.js';
window.addEventListener("DOMContentLoaded", () => {
    renderLoadConfirmation();
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

async function renderLoadConfirmation() {
    const { value: accept } = await Swal.fire({
        title: "Terms and conditions",
        backgroundColor:'#222',
        input: "checkbox",
        inputValue: 1,
        inputPlaceholder: `
          I agree with the terms and conditions
        `,
        confirmButtonText: `
          Continue&nbsp;<i class="fa fa-arrow-right"></i>
        `,
        inputValidator: (result) => {
          return !result && "You need to agree with T&C";
        }
      });
      if (accept) {
        Swal.fire("You agreed with T&C :)");
      }
}
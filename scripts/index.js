import {data} from './content.js';
window.addEventListener("DOMContentLoaded", () => {
    //renderLoadConfirmation();
    renderMainDirection(data);
});

function renderMainDirection(contents) {
    const mainDirectionContainer = document.querySelector('.mainDirection');
    let mainDirectionContainerContent = " ";
    contents.map((content) => {
        mainDirectionContainerContent += `
            <div class="w-[90%] min-h-[220px] mx-auto pb-5 pt-2 rounded-lg duration-300 bg-gray-700 transit relative hover:scale-[1.025]">
                <div class="py-2">
                    <h2 class="text-center text-2xl text-white py-5">${content.category}</h2>
                    <p class="text-center text-md text-white py-5">${content.title}</p>
                    <a href="#" class="ml-5 border p-3 hover:bg-white hover:text-gray-700 rounded-xl  text-white absolute">Read More</a>
                </div>
            </div>
        `;
    });
    mainDirectionContainer.innerHTML = mainDirectionContainerContent;
}

// async function renderLoadConfirmation() {
//     const { value: accept } = await Swal.fire({
//         title: "Terms and conditions",
//         // backgroundColor:'#222',
//         input: "checkbox",
//         inputValue: 1,
//         inputPlaceholder: `
//           I agree with the terms and conditions
//         `,
//         confirmButtonText: `
//           Continue&nbsp;<i class="fa fa-arrow-right"></i>
//         `,
//         inputValidator: (result) => {
//           return !result && "You need to agree with T&C";
//         }
//       });
//       if (accept) {
//         Swal.fire("You agreed with T&C :)");
//       }
// }
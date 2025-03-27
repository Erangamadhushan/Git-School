import {data} from './content.js';
import {learnReasons, ourContent} from './indexContent.js';
window.addEventListener("DOMContentLoaded", () => {
    //renderLoadConfirmation();
    renderMainDirection(data);
    renderIntroductionDetails();
    renderSubcontents();
});

function renderMainDirection(contents) {
    const mainDirectionContainer = document.querySelector('.mainDirection');
    let mainDirectionContainerContent = ``;
    contents.map((content) => {
        mainDirectionContainerContent += `
            <div class="w-[90%] max-w-[400px] min-h-[250px] mx-auto p-5 my-5 pb-5 pt-2 rounded-lg duration-300 bg-gray-700 transition-300 relative hover:scale-[1.025]">
                <div class="py-2">
                    <h2 class="text-center text-2xl text-white py-5">${content.category}</h2>
                    <p class="text-center text-md text-white py-5">${content.title}</p>
                    <a href="${content.link}" class="ml-5 border p-3 hover:bg-white hover:text-gray-700 rounded-xl  text-white absolute">Read More</a>
                </div>
            </div>
        `;
    });
    mainDirectionContainer.innerHTML = mainDirectionContainerContent;
}

function renderIntroductionDetails() {
    const introductionContainer = document.querySelector('.introduction');
    let introductionContent = `
        <div class="max-w-[1200px] mx-auto">
            <h2 class="text-center text-[1.25em] py-3 text-white">Are you a beginner developer looking to enhance your skills and collaborate more effectively with others? Our page is designed to guide you through the basics of Git and GitHub, two essential tools in the world of software development.</h2>
        </div>
    `;
    introductionContainer.innerHTML = introductionContent;
}


function renderSubcontents() {
    const subcontentsContainer = document.querySelector('.subContents');
    let subContentsContent = `
        <div class="max-w-[1200px] mx-auto p-3">
            <h2 class="text-[1.5em] md:text-[2.5em] py-3 font-semibold text-white">Why Learn Git and GitHub?</h2>
            <div class="flex flex-wrap jusitfy-center items-center gap-x-5">`;
                
    learnReasons.map((reason) => {
        subContentsContent += `
            <div class="w-[90%] max-w-[360px] min-h-[220px] mx-auto p-5 my-5 pb-5 pt-2 rounded-lg duration-300 bg-gray-700 transition-300 relative hover:scale-[1.025] hover:bg-white group ">
                <p class="text-[1.25em] text-white font-semibold text-center group-hover:text-gray-700">${reason.title} </p>
                <p class="py-4 text-white group-hover:text-gray-700">${reason.content}</p>
            </div>
        `;
    });
    subContentsContent += `
            </div>
        </div>
    `;
        
        subContentsContent += `
            <div class="max-w-[1200px] mx-auto p-3">
                <div>
                    <h2 class="text-[1.5em] md:text-[2.5em] py-3 font-semibold text-center text-white" >What You'll Learn Here</h2>
                </div>
                <div class="flex flex-wrap justify-center items-center gap-x-5">
        `;
        ourContent.map((content) => {
            subContentsContent += `
                <div class="w-[90%] max-w-[360px] min-h-[220px] mx-auto p-5 my-5 pb-5 pt-2 rounded-lg duration-300 bg-gray-700 transition-300 relative hover:scale-[1.025] hover:bg-white group ">
                    <p class="text-[1.25em] text-white font-semibold text-center  group-hover:text-gray-700">${content.title} </p>
                    <p class="py-4 text-white group-hover:text-gray-700">${content.content}</p>
                </div>
            `;
        })
        subContentsContent += `
                </div>
            </div>
        `;

    subcontentsContainer.innerHTML = subContentsContent;
}


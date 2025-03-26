import {data} from './content.js';
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
            <h2 class="text-[1.5em] py-3 font-semibold text-white">Why Learn Git and GitHub?</h2>
            <div class="py-3">
                <p class="text-[1.25em] text-white font-semibold">1. Version Control </p>
                <p class="py-4 text-white">Git allows you to track changes in your codebase, ensuring that you can revert back to previous versions if needed. This is crucial for maintaining a clean and manageable code history.</p>
            </div>
            <div class="py-3">
                <p class="text-[1.25em] text-white font-semibold">2. Collaboration </p>
                <p class="py-4 text-white">GitHub provides a platform where developers can share, collaborate, and contribute to projects. It's a hub for open-source projects and a great place to build your professional portfolio.</p>
            </div>
            <div class="py-3">
                <p class="text-[1.25em] text-white font-semibold">3. Career Advancement </p>
                <p class="py-4 text-white">Understanding Git and GitHub is a must-have skill for any aspiring developer. It demonstrates your ability to work collaboratively and manage complex projects efficiently.</p>
            </div>
        </div>
        <div class="max-w-[1200px] mx-auto p-3">
            <div>
                <h2 class="text-[1.5em] py-3 font-semibold text-white" >What You'll Learn Here</h2>
            </div>
            <div>
                <p class="text-white text-[1.25em] py-3">Our content is tailored to help you grasp the fundamentals of Git and GitHub. You'll discover:</p>
            </div>
            <div class="py-3">
                <p class="text-[1.25em] text-white font-semibold">1. Basic Git Commands </p>
                <p class="py-4 text-white">Learn how to initialize a repository, commit changes, and manage branches.</p>
            </div>
            <div class="py-3">
                <p class="text-[1.25em] text-white font-semibold">2. GitHub Essentials </p>
                <p class="py-4 text-white">Understanding Git and GitHub is a must-have skill for any aspiring developer. It demonstrates your ability to work collaboratively and manage complex projects efficiently.</p>
            </div>
            <div class="py-3">
                <p class="text-[1.25em] text-white font-semibold">3. Best Practices </p>
                <p class="py-4 text-white">Get tips on how to use Git and GitHub effectively in real-world projects.</p>
            </div>
        </div>
    `;

    subcontentsContainer.innerHTML = subContentsContent;
}


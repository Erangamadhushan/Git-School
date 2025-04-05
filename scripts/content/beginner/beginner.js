document.addEventListener("DOMContentLoaded", () => {
    renderNavbarContent();
    const root = document.querySelector('#root');
    let mainContent = `<h1 class=" py-5 text-[2em] md:text-[3em] text-center text-white">A Complete Guide to Git and GitHub</h1>`;

    mainContent += `
        <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
            <div class="py-4">
                <h1 class="py-4 text-[2.75em] text-white font-bold">Get Started Today!</h1>
                <p class="text-white text-[1em] md:text-[1.5em]"> Whether you're just starting out or looking to refresh your skills, our page is here to support you every step of the way. Dive into our tutorials and start building your Git and GitHub expertise today!</p>
                <p class="md:text-[1.75em] text-white py-5">Let's get started!, <span class="fond-bold">Good Luck All !<span></p>
            </div>
            <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">Setting Up Git and GitHub</h2>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Install Git: Download and install from <a href="https://git-scm.com/downloads" target="_blank" class="text-blue-700 hover:underline">git-scm.com</a></p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git config --global user.name "Your Name" <br/> git config --global user.email "your.email@example.com"</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. Create a GitHub account: Go to <a href="https://github.com" class="text-blue-700 hover:underline" target="_blank">github.com </a>
                <p class="text-[1em] text-white md:text-[2em] py-3">Basic Commands</p>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Initialize a Repository</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git init</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. Clone a Repository:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git clone https://github.com/username/repository.git</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">3. Check Status</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git status</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">4. Add Files to Staging Area:</p>
                <p class="text-[1em]  py-3 text-white">Add Specific File(s)</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git add filename # Add specific file</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em]  py-3 text-white">Add all files</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git add .  # Add all files</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-white ml-3 py-2 text-[1.2em]">OR</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git add --all # Add all files</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-white ml-3 py-2 text-[1.2em]">OR</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git add -A # Add all files</code> 
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">5. Commit Changes</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git commit -m "Commit message"</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">6. Connect to Remote Repository</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git remote add origin https://github.com/username/repository.git</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">7. Push to GitHub:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git push -u origin main <br/> git push # First time</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">8. Pull from GitHub:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">git pull</code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>

                <p class="text-[1.4em] md:text-[1.8em] py-3 text-white">Basic Workflow :</p>
                <ul>
                    <li class="text-white py-2">Make changes to your files</li>
                    <li class="text-white py-2">Stage changes with <span class="bg-gray-900 p-2 rounded-lg">git add</span></li>
                    <li class="text-white py-2">Commit changes with <span class="bg-gray-900 p-2 rounded-lg">git commit</span></li>
                    <li class="text-white py-2">Push to GitHub with <span class="bg-gray-900 p-2 rounded-lg">git push<span></li>
                </ul>
                <hr/>
                
            </div>
        </div>
        <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
            <h2 class="text-white py-3 md:text-[2em]">Good Progress...!!</h2>
            <a href="./intermediate.html" class="bg-white p-3 rounded-lg w-[150px] text-[1.25em] text-center hover:bg-green-400 hover:text-white">Next ${`>`}</a>
        </div>
        <div>
            <h2 class=" text-center py-3 text-white">This comprehensive guide covers essential Git and GitHub operations at all skill levels, providing you with the knowledge to effectively manage your version control and collaboration workflows from basic to advanced techniques.</h2>
        </div>
        <div class="bg-gray-900 text-white py-2">
            <p class="text-center">© 2021 Git School. All rights reserved.</p>
            <h2 class="py-1 text-white text-center">Powered by EM956 Community. </h2>
        </div>
    `;

    root.innerHTML = mainContent;

    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the code block associated with this button
            const codeBlock = button.previousElementSibling;
            const codeText = codeBlock.textContent.trim();
            
            // Copy to clipboard
            navigator.clipboard.writeText(codeText)
                .then(() => {
                    // Visual feedback
                    button.textContent = 'Copied!';
                    button.classList.add('copied');
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    button.textContent = 'Error!';
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                });
        });
    });
    function renderNavbarContent() {
        const menuList = document.querySelector('.menu-list');
        let menuContent = `
            <ul class="grid w-[100%]">
                <li class="w-[90%] mx-auto group hover:bg-gray-900 hover:text-white text-center my-1 py-3"><a href="./index.html" class="p-1 text-center w-[100%] text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white">Home Page</a></li>
                <li class="w-[90%] mx-auto group hover:bg-gray-900 hover:text-white text-center my-1 py-3"><a href="./beginner.html" class="p-1 text-center w-[100%] text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white">Beginner Level</a></li>
                <li class="w-[90%] mx-auto group hover:bg-gray-900 hover:text-white text-center my-3 py-3"><a href="./intermediate.html" class="p-1 text-center w-[100%] text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white">Intermediate Level</a></li>
                <li class="w-[90%] mx-auto group hover:bg-gray-900 hover:text-white text-center my-3 py-3"><a href="./expert.html" class="p-1 text-center w-[100%] text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white">Expert Level</a></li>
            </ul>
            <div class="flex">
                <p class="text-gray-900 ml-3 text-lg fond-bold text-center">Contribute To :</p>
                <a href="https://github.com/Erangamadhushan/Git-School" target="_blank"><img src="./assets/icons/github.png"/></a>
            </div>
        `;

        menuList.innerHTML = menuContent;
    }
});
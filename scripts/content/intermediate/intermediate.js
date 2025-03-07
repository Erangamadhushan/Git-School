document.addEventListener("DOMContentLoaded", () => {
    renderNavbarContent();
    const root = document.querySelector('#root');
    let mainContent = `<h1 class=" py-5 text-[2em] md:text-[3em] text-center text-white">A Complete Guide to Git and GitHub</h1>`;

    mainContent += `
    <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
        <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">Branching and Merging</h2>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Create and Switch to a Branch:</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Rebasing rewrites commit history by moving a branch to a new base commit. Use it to create a cleaner linear history before merging:</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git branch <branch-name>git branch feature-branch       # Create branch <br/> git checkout feature-branch     # Switch to branch <br/> git checkout -b feature-branch  # Create and switch (combined)</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. List Branches:</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Cherry-picking applies specific commits from one branch to another, ideal for pulling individual fixes:</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5"> git branch        # Local branches<br/> git branch -a     # All branches including remote
                </code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">3. Merge Branches:</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Reflog tracks reference changes, enabling recovery of seemingly lost commits or branches:</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git checkout main     # Switch to target branch <br/>git merge feature-branch  # Merge feature branch into main
                    
                </code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">4. Delete Branches:</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Bisect performs binary search through commit history to find which commit introduced a bug:</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git branch -d feature-branch    # Local branch<br/>
                git push origin --delete feature-branch  # Remote branch </code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
    </div>
    `;

    mainContent += `
    <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
        <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">Branching and Merging</h2>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Create and Switch to a Branch:</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Rebasing rewrites commit history by moving a branch to a new base commit. Use it to create a cleaner linear history before merging:</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git branch <branch-name>git branch feature-branch       # Create branch <br/> git checkout feature-branch     # Switch to branch <br/> git checkout -b feature-branch  # Create and switch (combined)</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. List Branches:</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Cherry-picking applies specific commits from one branch to another, ideal for pulling individual fixes:</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5"> git branch        # Local branches<br/> git branch -a     # All branches including remote
                </code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">3. Merge Branches:</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Reflog tracks reference changes, enabling recovery of seemingly lost commits or branches:</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git checkout main     # Switch to target branch <br/>git merge feature-branch  # Merge feature branch into main
                    
                </code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">4. Delete Branches:</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Bisect performs binary search through commit history to find which commit introduced a bug:</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git branch -d feature-branch    # Local branch<br/>
                git push origin --delete feature-branch  # Remote branch </code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
    </div>
    `;

     root.innerHTML = mainContent;

    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the code block associated with this button
            const codeBlock = button.previousElementSibling;
            const codeText = codeBlock.textContent;
            
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
                <li class="w-[90%] mx-auto group hover:bg-gray-900 hover:text-white text-center my-1 py-3"><a href="./beginner.html" class="p-1 text-center w-[100%] text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white">Beginner Level</a></li>
                <li class="w-[90%] mx-auto group hover:bg-gray-900 hover:text-white text-center my-3 py-3"><a href="./intermediate.html" class="p-1 text-center w-[100%] text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white">Intermediate Level</a></li>
                <li class="w-[90%] mx-auto group hover:bg-gray-900 hover:text-white text-center my-3 py-3"><a href="./expert.html" class="p-1 text-center w-[100%] text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white">Expert Level</a></li>
            </ul>
            <div class="flex">
                <p class="text-gray-900 ml-3 text-lg fond-bold">Contribute To :</p>
                <a href="https://github.com/Erangamadhushan/Git-School" target="_blank"><img src="./assets/icons/github.png"/></a>
            </div>
        `;

        menuList.innerHTML = menuContent;
    }
});
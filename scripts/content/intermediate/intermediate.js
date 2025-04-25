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

        <h2 class="text-[1.4em] md:text-[2.25em] py-3 text-white">Working with Remotes</h2>
        <p class="text-white text-lg">Remote repositories allow collaboration with other developers and provide backup of your code.</p>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. List Remotes</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">This shows all remote repositories and their URLs. Most repositories have an "origin" remote pointing to GitHub.</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git remote -v</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. Fetch Updates</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">Fetching downloads changes from the remote but doesn't merge them—useful to see what's changed before integrating.</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git fetch origin</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <div class="py-4">
            <p class="text-[1em] md:text-[1.5em] py-3 text-white">3. Working with Specific Remotes</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">These commands are essential when working with forks or multiple remotes.</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git pull upstream main #Pull from a different remote</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <br/>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git push origin feature-branch #Push to specific branch</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        <h2 class="text-[1.4em] md:text-[2.25em] py-3 text-white">History and Comparison</h2>
        <p class="text-white text-lg">Examining history helps understand how the codebase evolved and who made specific changes.</p>
        <div class="py-4">
            <p class="text-[1.25em] md:text-[1.5em] py-3 text-white">View Commit History</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">The "--graph" option visualizes branch and merge history, while "--oneline" provides a condensed view</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git log </code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git log --oneline  # Shortened version</code><br>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git log --graph  # Visual representation</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git log --author="Author Name"  # Filter by author</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git log --since="2 weeks ago"  # Filter by date</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git log --stat  # Show file changes</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git log -p  # Show diffs</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git log --follow [file-name]  # Track file renames</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>

            <p class="text-[1.25em] md:text-[5em] py-3 text-white">Compare Changes</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">These commands help review changes before committing and understand differences between versions.</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git diff #Shows unstaged changes</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git diff --cached #Shows staged changes</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git diff HEAD #Shows all changes</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git diff <commit1> <commit2> #Compare two commits</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git diff <branch1> <branch2> #Compare two branches</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git diff [commit] -- [file] #Compare specific file</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>

        <h2 class="text-[1.4em] md:text-[2.25em] py-3 text-white">Stashing Changes</h2>
        <p class="text-white text-lg">Stashing temporarily shelves changes, allowing you to switch tasks without committing incomplete work.</p>
        <div class="py-4">
            <p class="text-[1.25em] md:text-[5em] py-3 text-white">Stash Changes</p>
            <p class="text-[1em] text-white md:text-[1.5em] py-3">This stores your current changes and reverts your working directory to match HEAD.</p>
            <div class="flex flex-col">
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash </code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">You can also add a message to your stash for better identification:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash save "message"</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To stash untracked files, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash -u</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To stash ignored files, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash -a</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To view your stashes, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash list</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To view the changes in a specific stash, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash show stash@{0}</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To view the changes in a specific stash in detail, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash show -p stash@{0}</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To apply the changes from a specific stash, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash apply stash@{0}</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To apply the changes from the latest stash, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash apply</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To apply the changes and remove the stash, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash pop</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To apply the changes and remove the stash, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash drop stash@{0}</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">To clear all stashes, use:</p>
                <code class="w-full rounded-lg text-white bg-gray-900 p-5">git stash clear</code>
                <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
            </div>
        </div>
        
    </div>
    `;
    mainContent += `
    
    <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
        <h2 class="text-white py-3 md:text-[2em]">Good Progress...!!</h2>
        <a href="./expert.html" class="bg-white p-3 rounded-lg w-[150px] text-[1.25em] text-center hover:bg-green-400 hover:text-white">Next ${`>`}</a>
    </div>
    <div>
        <h2 class=" text-center py-3 text-white">This comprehensive guide covers essential Git and GitHub operations at all skill levels, providing you with the knowledge to effectively manage your version control and collaboration workflows from basic to advanced techniques.</h2>
    </div>
    <div class="bg-gray-900 text-white py-2">
        <p class="text-center">© 2025 Git School. All rights reserved.</p>
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
                <p class="text-gray-900 ml-3 text-lg fond-bold">Contribute To :</p>
                <a href="https://github.com/Erangamadhushan/Git-School" target="_blank"><img src="./assets/icons/github.png"/></a>
            </div>
        `;

        menuList.innerHTML = menuContent;
    }
});
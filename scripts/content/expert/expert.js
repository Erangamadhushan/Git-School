
document.addEventListener("DOMContentLoaded", () => {
    renderNavbarContent();
    const root = document.querySelector('#root');
    
    let mainContent = `<h1 class=" py-5 text-[2em] md:text-[3em] text-center text-white">A Complete Guide to Git and GitHub</h1>`
    mainContent += `
        <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
            <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">Advanced Workflow Management</h2>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Rebasing</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Rebasing rewrites commit history by moving a branch to a new base commit. Use it to create a cleaner linear history before merging:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git checkout feature-branch<br/>
                        git rebase master # Rebase feature branch onto main<br/>
                        git rebase -i HEAD~3        # Interactive rebase for last 3 commits
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. Cherry-picking Commits</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Cherry-picking applies specific commits from one branch to another, ideal for pulling individual fixes:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git cherry-pick commit-hash
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">3. Reflog for Recovery</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Reflog tracks reference changes, enabling recovery of seemingly lost commits or branches:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git reflog<br/>
                        git checkout HEAD@{n}       # Go to specific reflog entry
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">4. Bisect for Bug Finding</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Bisect performs binary search through commit history to find which commit introduced a bug:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git bisect start<br/>
                        git bisect bad              # Current commit is bad<br/>
                        git bisect good commit-hash # Known good commit<br/>
                        # Git helps find the problematic commit<br/>
                        git bisect reset            # When done
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
        </div>
    `;

    mainContent += `
        <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
            <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">Advanced History Rewriting</h2>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Amend Recent Commit</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Fix the most recent commit by adding changes or editing the message:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git commit --amend<br/>
                        git commit --amend --no-edit  # No message change
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. Reset Commits</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Remove commits while keeping or discarding changes:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git reset --soft HEAD~1      # Undo last commit, keep changes staged<br/>
                        git reset HEAD~1             # Undo last commit, unstage changes<br/>
                        git reset --hard HEAD~1      # Discard last commit and changes
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">3. Filter Branch (for repository cleanup):</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Rewrite history to remove unwanted files or sensitive data:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git filter-branch --tree-filter 'rm -f passwords.txt' HEAD
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">4. Clean Working Directory</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Remove untracked files from your working directory:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git clean -n                # Dry run<br/>
                        git clean -df               # Delete untracked files and directories
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
        </div>
    `;

    mainContent += `
        <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
            <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">Advanced GitHub Collaboration</h2>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Pull Requests with Options:</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Fix the most recent commit by adding changes or editing the message:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git request-pull v1.0 https://github.com/username/repo.git main
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. Configure Multiple Remotes:</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Remove commits while keeping or discarding changes:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git remote add upstream https://github.com/original-owner/original-repo.git
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">3. Git Submodules</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Rewrite history to remove unwanted files or sensitive data:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git submodule add https://github.com/username/repo.git path/to/submodule<br/>
                        git submodule update --init --recursive
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">4. Git Hooks:</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Remove untracked files from your working directory:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        # Create executable files in .git/hooks/
                        # e.g., pre-commit, post-commit, etc.
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
        </div>
    `;

    mainContent += `
        <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
            <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">Git Automation and Customization</h2>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Git Aliases:</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Fix the most recent commit by adding changes or editing the message:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git config --global alias.co checkout<br/>
                        git config --global alias.br branch<br/>
                        git config --global alias.unstage 'reset HEAD --'
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. Custom Merge and Diff Tools</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Remove commits while keeping or discarding changes:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git config --global merge.tool vimdiff<br/>
                        git config --global diff.tool vimdiff
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">3. Git Attributes:</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Rewrite history to remove unwanted files or sensitive data:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        # In .gitattributes file:<br/>
                        *.txt diff=text<br/>
                        *.jpg diff=exif
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">4. Shallow Clones and Sparse Checkouts</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Remove untracked files from your working directory:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        git clone --depth=1 https://github.com/user/repo.git<br/>

                        # For sparse checkout:<br/>
                        git sparse-checkout init<br/>
                        git sparse-checkout set "path/to/include"
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
        </div>
    `;

    mainContent += `
        <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
            <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">GitHub Actions and CI/CD</h2>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">1. Create Workflow Files</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Fix the most recent commit by adding changes or editing the message:</p>
                <div class="flex flex-col">
                    <p class="text-white ml-2">ymal</p>
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        # .github/workflows/main.yml<br/>
                        name: CI<br/>
                        on: [push, pull_request]<br/>
                        jobs:<br/>
                        build:<br/>
                            runs-on: ubuntu-latest<br/>
                            steps:<br/>
                            - uses: actions/checkout@v2<br/>
                            - name: Run tests<br/>
                                run: |<br/>
                                npm install<br/>
                                npm test<br/>

                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[1em] md:text-[1.5em] py-3 text-white">2. GitHub CLI for Advanced Operations</p>
                <p class="text-[1em] text-white md:text-[1.5em] py-3">Remove commits while keeping or discarding changes:</p>
                <div class="flex flex-col">
                    <code class="w-full rounded-lg text-white bg-gray-900 p-5">
                        gh pr create --title "Feature" --body "Description"<br/>
                        gh issue create --title "Bug" --body "Description"<br/>
                        gh workflow run workflow.yml
                    </code>
                    <button type="button" class="copy-btn rounded-md m-3 p-2 w-[100px] bg-white text-gray-500">Copy</button>
                </div>
            </div>
            
        </div>
        <div class="flex flex-col w-[95%] mx-auto max-w-[1200px]">
            <h2 class="text-white py-3 md:text-[2em]">Good Progress...!!</h2>
            <div class="flex py-3 gap-5">
                <a href="./intermediate.html" class="bg-white p-3 rounded-lg w-[150px] text-[1.25em] text-center hover:bg-green-400 hover:text-white">Prev ${`<`}</a>
                <a href="./summary.html" class="bg-white p-3 rounded-lg w-[150px] text-[1.25em] text-center hover:bg-green-400 hover:text-white">Next ${`>`}</a>
            </div>
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
})
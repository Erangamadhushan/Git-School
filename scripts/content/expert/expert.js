
document.addEventListener("DOMContentLoaded", () => {
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
            <h2 class="text-[1.4em] md:text-[2em] py-3 text-white">Advanced Workflow Management</h2>
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
})
> [!TIP]
> # What is Git :-
- Git is a version control system
- Git helps you keep track of code changes
- Git is used to collabrate on code.
- Git and Github are different things


> [!TIP]
> # Why Git :-
- Over 70% of developers use Git !
- Developers can work together from anywhere in the world.
- Developers can see the full history of the project
- Developers can revert to earlier versions of the project if needed.
- Developers can see who made what changes and when.
- Developers can see the changes made in the code.

> [!TIP]
> # Features of Git :-
- When a file is changed added or deleted, it is considered modified
- Your select the modified files you want to Stage
- The Staged files are Committed, which prompts Git to store a permenent snapshot of the files
- Git allows you to see the full history of every commit
- You can revert back to any previous commit
- Git does not store a separate copy of every file in every commit, but keeps track of changes made in each commit !

> ======================================================================================

> [!TIP]
> # What is Github :-
- Git is not the same as GitHub.
- GitHub makes tools that use Git
- GitHub is the largest host of source code in the world, and has been owned by Microsoft since 2018.

> [!CAUTION]
> # Configuring git for the first time :-

```
$ git config --global user.name "<Enter Your first Name here >"
```

```
$ git config --globa user.email "<Enter Your Email here>"
```

> [!CAUTION]
> # General Git Features :-

> [!NOTE]
> ## Initializing Git :-
```
$ git init
```
- Git now knows that is should watch the folder you initated it on. Git creates a hidden folder to keep track of changes.

> [!NOTE]
> ## Staging files/Adding files to Git repo :-

Staged files are that are ready to be committed to the repository your are working on.<br/>
When your first add files to an empty repository, they are all untracked. To get Git to track them, you need to stage  them, or add them to the staging environment.

```
$ git add <filename with extension>
```

> [!TIP]
> ### Stagin all files in a folder :-
```
$ git add --all
```
### OR
```
$ git add -A
```


# Save changes temporarily
git stash

# List stashes
git stash list

# Apply stashed changes
git stash apply

# Apply and remove stashed changes
git stash pop

# Remove stash
git stash drop

================================================================================
# Show changes between commits
git diff

# Show changes in staged files
git diff --staged

# Show changes in a file
git diff filename.txt


=================================================================================

# Discard changes in working directory
git restore filename.txt
git checkout -- filename.txt  # Older syntax

# Unstage files
git restore --staged filename.txt
git reset HEAD filename.txt  # Older syntax

# Amend the last commit
git commit --amend

# Reset to a previous commit
git reset commit-hash        # Soft reset (keeps changes)
git reset --hard commit-hash # Hard reset (discards changes)
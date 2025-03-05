# Git and GitHub Tutorial for Beginners

## Introduction to Version Control and Git

### What is Version Control?
Version control is a system that helps developers track and manage changes to their code over time. It allows multiple developers to work together, keep track of project history, and revert to previous versions if needed.

### What is Git?
Git is a distributed version control system that:
- Tracks changes in source code during software development
- Helps multiple developers collaborate on projects
- Allows you to review project history and revert to previous versions
- Is free, open-source, and incredibly powerful

### What is GitHub?
GitHub is a web-based platform that:
- Hosts Git repositories
- Provides collaboration features
- Offers version control and source code management
- Allows developers to store, share, and collaborate on projects

## Getting Started with Git

### Installing Git

#### Windows
1. Download Git from the official website: https://git-scm.com/download/win
2. Run the installer
3. Follow the installation wizard, accepting default settings
4. Open Command Prompt or Git Bash to verify installation
   ```
   git --version
   ```

#### macOS
1. Install Homebrew (if not already installed):
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Install Git using Homebrew:
   ```
   brew install git
   ```

#### Linux (Ubuntu/Debian)
```
sudo apt update
sudo apt install git
```

### Configuring Git

Set up your name and email for commits:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Basic Git Workflow

### Creating a New Repository

1. Create a new directory for your project:
   ```bash
   mkdir my-project
   cd my-project
   ```

2. Initialize a new Git repository:
   ```bash
   git init
   ```

### Basic Git Commands

#### Adding Files
```bash
# Add a specific file
git add filename.txt

# Add all changed files
git add .
```

#### Committing Changes
```bash
# Commit with a message
git commit -m "Description of changes"
```

#### Checking Status
```bash
# See current status of your repository
git status

# View commit history
git log
```

## Working with GitHub

### Creating a GitHub Repository

1. Go to GitHub.com and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository
5. Choose public or private
6. Initialize with a README (optional)
7. Click "Create repository"

### Connecting Local Repository to GitHub

1. Add remote repository:
   ```bash
   git remote add origin https://github.com/username/repository.git
   ```

2. Push your local repository to GitHub:
   ```bash
   git push -u origin main
   ```

### Cloning a Repository

```bash
# Clone a repository
git clone https://github.com/username/repository.git
```

## Collaboration Workflows

### Branching

#### Create a New Branch
```bash
# Create and switch to a new branch
git checkout -b new-feature
```

#### Switching Branches
```bash
# Switch to an existing branch
git checkout branch-name
```

#### Merging Branches
```bash
# Switch to main branch
git checkout main

# Merge another branch into main
git merge branch-name
```

### Pull Requests

1. Create a new branch for your feature
2. Make changes and commit
3. Push the branch to GitHub
4. Open a pull request on GitHub
5. Collaborate and review code
6. Merge the pull request

## Best Practices

1. Commit often with clear, descriptive messages
2. Use branches for new features or experiments
3. Always pull the latest changes before working
4. Write meaningful commit messages
5. Use .gitignore to exclude unnecessary files
6. Review code before merging

## Common Git Scenarios

### Undoing Changes

#### Discard local changes
```bash
# Discard changes in working directory
git checkout -- filename

# Discard all local changes
git reset --hard HEAD
```

#### Undo last commit
```bash
# Undo last commit, keeping changes
git reset HEAD~1

# Completely remove last commit
git reset --hard HEAD~1
```

## Advanced Topics to Explore

- Git stash
- Rebasing
- Cherry-picking
- Git hooks
- Continuous Integration/Continuous Deployment (CI/CD)

## Recommended Resources

- Official Git Documentation: https://git-scm.com/doc
- GitHub Learning Lab: https://lab.github.com
- Atlassian Git Tutorials: https://www.atlassian.com/git/tutorials

## Conclusion

Git and GitHub are essential tools for modern software development. Practice regularly, experiment with different workflows, and don't be afraid to make mistakes – version control is designed to help you recover and learn!

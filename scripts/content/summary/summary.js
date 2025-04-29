document.addEventListener("DOMContentLoaded", () => {
    renderNavbarContent();
    renderSummaryContent();

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

    function renderSummaryContent() {
        const summaryList = document.querySelector('#root');
        let summaryContent = `
            <div class="py-10">
                <h1 class="text-3xl py-5 md:text-[4em] text-center text-white font-bold">Summary on Git Schools.</h1>
                <div class="my-5 w-[95%] mx-auto max-w-[1000px]">
                    <h2 class="text-2xl py-10 md:text-[3em] text-center text-white font-bold">Our Mission</h2>
                    <p class="text-lg text-center text-white">At Git & GitHub Mastery, we're dedicated to transforming novice developers into version control experts. Our carefully structured curriculum takes you from your first commit to advanced repository management, providing the skills necessary for professional software development in today's collaborative environment.</p>
                </div>
                <div class="my-5 w-[95%] mx-auto max-w-[1200px]">
                    <h1 class="text-2xl py-10 md:text-[2.5em] text-center text-white font-semibold"> Our educational platform breaks down Git and GitHub mastery into three distinct learning paths:</h1>
                    
                    <h3 class="text-xl py-10 md:text-[1.75em] text-center md:text-justify text-white">For Beginners</h3>

                    <p class="text-lg text-center md:text-justify text-white">Perfect for those new to version control. Here you'll learn:<p>
                    <ul class="list-disc list-inside text-lg text-white">
                        <li>Setting up Git and connecting to GitHub</li>
                        <li>Understanding basic concepts like repositories, commits, and branches</li>
                        <li>Creating your first project and pushing it to GitHub</li>
                        <li>Essential commands to start your version control journey</li>
                        <li>Building confidence with a supportive learning environment</li>
                    </ul>

                    <h3 class="text-xl py-10 md:text-[1.75em] text-center md:text-justify text-white">For Intermediate Users</h3>
                    <p class="text-lg text-center md:text-justify text-white">Take your skills to the next level with:<p>
                    <ul class="list-disc list-inside text-lg text-white">
                        <li>Efficient branching strategies for team collaboration</li>
                        <li>Managing remote repositories and synchronization</li>
                        <li>Tracking changes with advanced history tools</li>
                        <li>Resolving merge conflicts with confidence</li>
                        <li>Implementing practical workflows for real-world projects</li>
                    </ul>

                    <h3 class="text-xl py-10 md:text-[1.75em] text-center md:text-justify text-white">For Expert Developers</h3>
                    <p class="text-lg text-center md:text-justify text-white">Master advanced techniques that power professional development:<p>
                    <ul class="list-disc list-inside text-lg text-white">
                        <li>Complex repository management with submodules and subtrees</li>
                        <li>Rewriting history with interactive rebasing</li>
                        <li>Implementing custom Git hooks for workflow automation</li>
                        <li>Integrating with CI/CD pipelines</li>
                        <li>Troubleshooting and recovering from Git disasters</li>
                    </ul>

                    <h1 class="text-2xl py-10 md:text-[2.5em] text-center text-white font-semibold"> Why Learn With Us?</h1>

                    <h3 class="text-xl py-10 md:text-[1.75em] text-center md:text-justify text-white">Our platform stands out with:</h3>

                    <ul class="list-disc list-inside text-lg text-white">
                        <li>Practical Examples: Every concept is demonstrated with real-world scenarios.</li>
                        <li>Interactive Learning: Follow along with exercises that reinforce each new skill.</li>
                        <li>Comprehensive Command Reference: Access our detailed command library with explanations and use cases.</li>
                        <li>Progressive Curriculum: Build on your knowledge systematically from fundamental to advanced concepts.</li>
                        <li>Community Support: Connect with fellow learners to share experiences and solutions.</li>
                    </ul>
                    
                    <h1 class="text-2xl py-10 md:text-[2.5em] text-center text-white font-semibold">  How to Use This Resource</h1>

                    <ul class="list-disc list-inside text-lg text-white">
                        <li>Assess Your Level: Start with our skill assessment to find your ideal entry point.</li>
                        <li>Follow the Path: Progress through modules designed to build on previous knowledge.</li>
                        <li>Practice Regularly: Use our exercises to reinforce concepts and commands.</li>
                        <li>Reference When Needed: Bookmark our command reference for quick help during your projects.</li>
                        <li>Revisit Advanced Topics: As you grow, return to explore more complex techniques.</li>
                    </ul>

                    <h1 class="text-2xl py-10 md:text-[2.5em] text-center text-white font-semibold">Our Philosophy</h1>
                    <p class="text-lg text-center md:text-justify text-white">Git is more than just a tool—it's a fundamental skill for modern software development. We believe in:</p>
                    <ul class="list-disc list-inside text-lg text-white">
                        <li>Learning by doing: Hands-on practice is essential for mastery</li>
                        <li>Understanding comcepts, not just commands: Knowing why is as important as knowing how</li>
                        <li>Building confidence through competence: Each skill you master makes you a more valuable developer</li>
                    </ul>

                    <div class="w-[95%] my-10 mx-auto max-w-[1200px]">  
                        <p class="text-lg text-center py-5 text-white">Whether you're starting your first coding bootcamp or looking to refine your skills as a senior developer, our platform provides the resources you need to make Git and GitHub powerful allies in your development journey.</p>
                        <p class="text-lg text-center  py-5 text-white">Start exploring today and transform the way you manage code!</p>
                        <p class="text-[1.75em] md:text-[3.25em] text-center py-5 text-white"> Thank You Happy Coding!</p>
                    </div>
                </div>
            </div>

        `;
        summaryList.innerHTML = summaryContent;
}
});

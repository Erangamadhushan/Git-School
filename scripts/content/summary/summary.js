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
            <ul class="grid w-[100%]">
                <li class="w-[90%] mx-auto group hover:bg-gray-900 hover:text-white text-center my-1 py-3"><a href="./summary.html" class="p-1 text-center w-[100%] text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white">Summary</a></li>
            </ul>
        `;
        summaryList.innerHTML = summaryContent;
}
});

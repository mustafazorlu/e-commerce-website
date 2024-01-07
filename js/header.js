function sidebarFunc() {
    const btnOpenSidebar = document.querySelector("#btn-menu");
    const sidebar = document.querySelector("#sidebar");
    const btnCloseSidebar = document.querySelector("#close-sidebar");

    btnOpenSidebar.addEventListener("click", function () {
        // console.log(sidebar);
        sidebar.style.left = "0";
    });

    btnCloseSidebar.addEventListener("click", function () {
        sidebar.style.left = "-100%";
    });

    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(sidebar) &&
            !event.composedPath().includes(btnOpenSidebar)
        ) {
            sidebar.style.left = "-100%";
        }
    });
}

function searchModalFunc() {
    const btnOpenSearch = document.querySelector("#search-button");
    const modalSearch = document.getElementsByClassName("modal-search");
    const btnCloseSearch = document.getElementById("close-search");
    const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

    btnOpenSearch.addEventListener("click", function () {
        modalSearch[0].style.visibility = "visible";
        modalSearch[0].style.opacity = "1";
    });

    btnCloseSearch.addEventListener("click", function () {
        modalSearch[0].style.visibility = "hidden";
        modalSearch[0].style.opacity = "0";
    });

    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(modalSearchWrapper[0]) &&
            !event.composedPath().includes(btnOpenSearch)
        ) {
            modalSearch[0].style.visibility = "hidden";
            modalSearch[0].style.opacity = "0";
        }
    });
}

export default function () {
    sidebarFunc();
    searchModalFunc();
}

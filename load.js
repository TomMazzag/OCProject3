window.addEventListener("load", () => {
    const loader = document.querySelector(".lds-dual-ring");
    loader.classList.add("lds-dual-ring--hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(document.querySelector(".lds-dual-ring"));
    })
})
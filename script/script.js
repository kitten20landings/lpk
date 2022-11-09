const toggleActiveEach = (className) => document.querySelectorAll(className).forEach(i => {
    i.addEventListener("click", () => {
        document.body.classList.toggle("active")
        document.body.classList.remove("active_scnd")

        document.querySelectorAll(".body__form input").forEach(i => i.value = "")
    })
})

document.querySelector(".form-greenBtn_fst").addEventListener("click", () => {
    document.body.classList.add("active_scnd")
})

toggleActiveEach('.form__cross')
toggleActiveEach('.call_btn')
toggleActiveEach('.body-background-active')
toggleActiveEach(".form-greenBtn-close")
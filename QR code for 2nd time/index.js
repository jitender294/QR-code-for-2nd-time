const wrapper = document.querySelector(".wrapper")
qrinput = wrapper.querySelector(".form input")
generateBtn = wrapper.querySelector(".form button");
qrcode = wrapper.querySelector(".qr-code img")


generateBtn.addEventListener("click", () => {
    inputfo = qrinput.value
    if (!qrinput.value) {
        return
    }
    console.log(inputfo);
    generateBtn.innerText = "Generating Plz Wait"
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputfo}`
    qrcode.addEventListener("load", () => {
        wrapper.classList.add("active")
        generateBtn.innerText = "Generate See that"
    })
})


qrinput.addEventListener("keyup", () => {
    if (!qrinput.value) {
        wrapper.classList.remove("active")
        generateBtn.innerText = "Generate QR Code"
    }
})
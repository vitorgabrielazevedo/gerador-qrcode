const container = document.querySelector("#container");
const qrCodeInput = document.querySelector("#url");
const qrCodeBtn = document.querySelector("#generate-btn");
const qrCodeImg = document.querySelector("#qr-code img");

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const generateQrCode = () => {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) {
        return;
    }

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código gerado!";
    });
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

// Evento que dispara quando a tecla 'Enter' é pressionada

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateQrCode();
    }
});

qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})
function generateRandomApiKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let apiKey = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        apiKey += characters[randomIndex];
    }
    return apiKey;
}

document
  .querySelector(".generateButton")
  .addEventListener("click", function () {
    const apiKey = generateRandomApiKey(32); // Generate a 32-character API key
      const keyParagraph = document.querySelector(".key");
      const keyBold = document.querySelector("#keyBold");
      keyBold.textContent = `${apiKey}`;
      keyParagraph.style.visibility = "visible";
    keyParagraph.style.display = "block"; // Make sure the paragraph is visible
  });
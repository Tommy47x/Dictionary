const dictionary = new Set();
function saveWord() {
  const newWord = document.getElementById("newWord").value;
  if (newWord) {
    dictionary.add(newWord);
    alert("Word saved!");
    document.getElementById("newWord").value = "";
  }
}

function wordCheck() {
  const searchWordInput = document.getElementById("searchWord");
  const wordToSearch = searchWordInput.value;
  const resultMessage = document.getElementById("resultMessage");
  
  resultMessage.innerHTML = dictionary.has(wordToSearch)
    ? `<p class="text-success">${wordToSearch} is in the dictionary.</p>`
    : `<p class="text-danger">${wordToSearch} is not in the dictionary.</p>`;
    
  searchWordInput.value = "";
}

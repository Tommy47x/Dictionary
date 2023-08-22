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

  let message;
  if (dictionary.has(wordToSearch)) {
    message = `<p class="text-success">${wordToSearch} is in the dictionary.</p>`;
  } else {
    message = `<p class="text-danger">${wordToSearch} is not in the dictionary.</p>`;
  }

  resultMessage.innerHTML = message;

  searchWordInput.value = "";
}

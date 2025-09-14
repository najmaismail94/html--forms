const form = document.getElementById("myForm");
const amountInput = document.getElementById("amount");
const resultOutput = document.getElementById("result");

// När man ändrar slider → uppdatera värdet
amountInput.addEventListener("input", () => {
  resultOutput.value = amountInput.value;
});

// När man trycker på "Skicka"
form.addEventListener("submit", (event) => {
  event.preventDefault(); // förhindrar att sidan laddas om

  const data = {
    username: form.username.value,
    email: form.email.value,
    amount: form.amount.value,
  };

  console.log(data);
});

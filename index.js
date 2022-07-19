const input = document.getElementById("searchInput");
const label = document.querySelector('label');
let value;

searchButton.addEventListener("click", () => {
    label.style.transform = "translateY(-30px)";
  value = input.value.split(" ");

  let link = "https://www.google.com/search?q=";
  let i = 1;

  value.forEach((word) => {
    link += word;

    if (i !== value.length) {
      link += "+";
    }
    i++;
  });
  location.href = link;
});

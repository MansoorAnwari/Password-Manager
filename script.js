for (let i = 0; i < 4; i++) {
  const input = document.getElementById(`input${i}`);
  input.addEventListener("change", (e) => {
    input.setAttribute("value", e.target.value);
  });
}

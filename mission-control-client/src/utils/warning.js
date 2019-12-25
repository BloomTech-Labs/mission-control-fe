export const warning = message => {
  const err = document.querySelector(".warning");
  err.textContent = message;
};

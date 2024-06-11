document.addEventListener("DOMContentLoaded", (event) => {
  event.stopPropagation();
  const modal = document.querySelector("dialog");
  const errorMsg = document.getElementById("errorMsg");

  const debouncedCloseModal = debounce(function () {
    modal.close();
  }, 2000);

  window.showModal = (text = "") => {
    errorMsg.textContent = text;
    modal.show();
    debouncedCloseModal();
  };
});

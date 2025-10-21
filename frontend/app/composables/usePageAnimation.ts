export function usePageAnimation() {
  onMounted(() => {
    const leftDiv = document.querySelector(".left-div");
    const rightDiv = document.querySelector(".right-div");
    if (leftDiv && rightDiv) {
      leftDiv.classList.add("animate-width");
      rightDiv.classList.add("animate-width");
    }
  });
}

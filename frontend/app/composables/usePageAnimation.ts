export function usePageAnimation() {
  const leftDivRef = ref<HTMLElement | null>(null);
  const rightDivRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (leftDivRef.value) leftDivRef.value.classList.add("animate-width");
    if (rightDivRef.value) rightDivRef.value.classList.add("animate-width");
  });

  return { leftDivRef, rightDivRef };
}

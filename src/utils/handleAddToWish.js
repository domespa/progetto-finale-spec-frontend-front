export function handleAddToWish({ onAddToWish, toastRef }) {
  return (e, product) => {
    e.preventDefault();
    try {
      onAddToWish(product);
      console.log("Aggiungo ai preferiti:", product.title);
      toastRef.current.show({
        severity: "success",
        detail: `${product.title} aggiunto ai preferiti!`,
        life: 3000,
      });
      console.log("Aggiunta prodotto andata a buon fine");
    } catch (error) {
      console.error(`Errore`, error);
    }
  };
}

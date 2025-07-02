export function handleAddToWish({ onAddToWish, toastRef, wishlist }) {
  return (e, product) => {
    try {
      const alreadyInWishlist = wishlist.some((item) => item.id === product.id);

      if (alreadyInWishlist) {
        toastRef.current.show({
          severity: "warn",
          detail: `${product.title} è già nei preferiti.`,
          life: 3000,
        });
        return;
      }

      onAddToWish(product);

      toastRef.current.show({
        severity: "success",
        detail: `${product.title} aggiunto ai preferiti!`,
        life: 3000,
      });
    } catch (error) {
      console.error(`Errore`, error);
    }
  };
}

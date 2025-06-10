// src/hooks/useProductTransformer.js
export default function useProductTransformer() {
  const cleanPrice = (priceStr) => {
    if (!priceStr) return 0;
    
    // Remove currency symbols and commas
    const cleaned = priceStr
      .replace(/[^0-9.]/g, '')
      .replace(/,/g, '');
    
    return parseFloat(cleaned) || 0;
  };

  const transformProduct = (product) => {
    const price = cleanPrice(product.product_price);
    const originalPrice = cleanPrice(product.product_original_price) || price;
    const discount = originalPrice - price;
    const discountPercentage = originalPrice > 0 
      ? Math.round((discount / originalPrice) * 100) 
      : 0;

    return {
      id: product.asin,
      title: product.product_title,
      price,
      originalPrice,
      discount,
      discountPercentage,
      image: product.product_photo,
      rating: product.product_star_rating || 0,
      ratingsCount: product.product_num_ratings || 0,
      delivery: product.delivery || '',
      isPrime: product.is_prime || false,
      url: product.product_url,
    };
  };

  return { transformProduct };
}
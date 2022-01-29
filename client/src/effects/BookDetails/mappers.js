export const mapDataToBookDetail = data => {
  if (!data) {
    return null;
  }
  return {
    title: data.title,
    image: data.image,
    id: data.id,
    author: data.author ? data.author : 'Unknown',
    price: data.price,
  };
};

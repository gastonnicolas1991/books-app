export const normalizeEndpoint = endpoint => {
  const resources = endpoint.split('/');
  const id = resources[resources.length - 1];
  return id;
};

export const mapDataToBookList = data => {
  return data?.map(item => ({
    title: item.title,
    link: normalizeEndpoint(item.link),
    id: item.id,
  }));
};

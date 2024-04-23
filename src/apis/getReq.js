async function getReq(url) {
  return await fetch(url).then((res) => res.json());
}

export default getReq;

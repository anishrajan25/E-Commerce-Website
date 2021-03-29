export const baseUrlCQ = 'https://e-commerce-sever-3p34g823m45kmufgsp0.codequotient.in/'
export const baseUrlSB = 'https://i8u9f.sse.codesandbox.io/'

export const fetchData = async (endpoint = "") => {
  try {
    const data = await fetch(`${baseUrlSB}${endpoint}`);
    return await data.json();
  } catch (err) {
    console.log(err);
  }
};

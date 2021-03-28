export const fetchData = async (endpoint = "") => {
  try {
    console.log("got here!");
    const data = await fetch(`https://i8u9f.sse.codesandbox.io/${endpoint}`);
    return await data.json();
  } catch (err) {
    console.log(err);
  }
};

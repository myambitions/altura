const URL = "https://deep-index.moralis.io/api/v2/nft/search";
const API_KEY =
  "HrzqghptQizXWun4NB9zFYHE5M0ykqOUTM8bvUSaMX9UpZFTn6XFtj3zODI6l72N";

const useApi = () => {
  const getList = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-Key": API_KEY,
      },
    };

    return fetch(
      URL + `?chain=eth&format=decimal&q=clonex&filter=name&limit=12`,
      options
    )
      .then((res) => res.json())
      .then((res) =>
        res?.result.map((arr: any) => ({
          ...arr,
          metadata: JSON.parse(arr.metadata),
        }))
      );
  };

  return { getList };
};

export default useApi;

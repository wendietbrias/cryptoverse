import axios from "axios";

export const FetchHistory = async (coinId, timePeriod) => {
  const { data } = await axios.request({
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: timePeriod },
    headers: {
      "X-RapidAPI-Key": "f1a3dd28f2msh166dbf53fa0e95dp10c1f1jsnfaba429a1c08",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  });

  return data.data.history;
};

export const FetchCoins = async (url, limit = 10) => {
  const { data: request } = await axios.request({
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/${url}`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: limit === 0 ? null : limit,
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_RAPID_HOST}`,
    },
  });

  return request.data;
};

export const FetchNews = async (limit) => {
  const { data } = await axios.request({
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "crypto",
      count: limit,
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  });

  return data;
};

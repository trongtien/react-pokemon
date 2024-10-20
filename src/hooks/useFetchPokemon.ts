/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";

const fetchData = async (): Promise<any> => {
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const useLoadPokemon = () => {
  return useQuery("listPokemon", fetchData, {
    onError: () => {
      return null;
    },
    onSuccess: (data) => {
      return data;
    },
  });
};

export default useLoadPokemon;

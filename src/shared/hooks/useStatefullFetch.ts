import { AxiosError } from "axios";
import { useState } from "react";

export type UseStatefulFetchReturn<T> = {
  execute: () => Promise<T | void>;
  data: T | null;
  isLoading: boolean;
  error: AxiosError | null;
};

export const useStatefulFetch = <T>(
  fetchCb: () => Promise<T>
): UseStatefulFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const execute = () => {
    setIsLoading(true);

    return fetchCb()
      .then((res) => {
        setIsLoading(false);
        setData(res);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
        setData(null);
      });
  };

  return {
    execute,
    data,
    isLoading,
    error,
  };
};

export default useStatefulFetch;

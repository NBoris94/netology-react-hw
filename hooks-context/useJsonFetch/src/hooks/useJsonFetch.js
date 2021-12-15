import { useState, useEffect } from "react";

function useJsonFetch(url, opts) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
      } catch (e) {
        let errorMessage = e.message === "Failed to fetch" ? "Ошибка соединения с сервером" : "";
        if (e.message === "Internal Server Error") errorMessage = "Упс, произошла ошибка при загрузке данных";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return [data, error, loading];
}

export default useJsonFetch;

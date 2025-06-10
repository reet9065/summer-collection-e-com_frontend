import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController(); 
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { ...options, signal });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    
    return () => {
      controller.abort();
    };
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
};

export default useFetch;

import axios from "axios";
import { useEffect, useState } from "react";

export function useAxios(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios(path);
        setLoading(false);
        setError(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);
  return [data, loading, error];
}

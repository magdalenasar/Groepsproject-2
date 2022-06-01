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
        console.log("Dit komt uit hooks.js: ", data[1]);
        setLoading(false);
        setError(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);
  // custom hook returns 3 values
  return [data, loading, error];
}

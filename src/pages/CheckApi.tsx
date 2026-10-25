import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Axios from "src/shared/services/axios";

const CheckApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("/firewall/health");
        setData(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        if (axiosError.response) {
          setError(
            `Error: ${axiosError.response.status} - ${axiosError.response.data}`,
          );
        } else {
          setError("An unexpected error occurred.");
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default CheckApi;

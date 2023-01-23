import axios from "axios";

interface ParameterI {
  endpoint: string;
  params?: any;
  data?: any;
  signal?: any;
}

export const apiController = async (para: ParameterI) => {
  const api = para.endpoint.split(":");

  const client = axios.request({
    method: api[0],
    url: api[1],
    params: para.params,
    data: para.data,
    signal: para.signal,
  });

  return await client.then((res) => res && res).catch((error) => error);
};

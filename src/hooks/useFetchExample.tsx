export {};

//?===============================================================
//* ====> One
// import { useState, useEffect } from "react";

// export const useFetch = (url, ref, initialValue) => {
//   const [data, setData] = useState(initialValue);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (ref.current) {
//       (async () => {
//         try {
//           const res = await fetch(url);
//           const resJson = await res.json();
//           setData(resJson);
//         } catch (err) {
//           setError(err);
//         } finally {
//           setLoading(false);
//         }
//       })();
//     }
//     return () => {
//       ref.current = false;
//     };
//   }, [url, ref]);
//   return { loading, data, error };
// };

// ---------

// const isComponentMounted = useRef(true);
// const { data, loading, error } = useFetch(
//   "https://jsonplaceholder.typicode.com/users",
//   isComponentMounted,
//   []
// );

//?===============================================================
//* ====> Two
// import { useState, useEffect } from "react";
// import axios, { AxiosRequestConfig } from "axios";

// axios.defaults.baseURL = "http://localhost:8080/api";

// export const useAxiosFetch = (params: AxiosRequestConfig<any>) => {
//   const [data, setData] = useState<any>(null);
//   const [error, setError] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchData = async (): Promise<void> => {
//     try {
//       const response = await axios.request(params);
//       setData(response.data);
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         setError("Axios Error with Message: " + error.message);
//       } else {
//         setError(error);
//       }

//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return [data, error, loading, fetchData] as const;
// };

//?===============================================================
//* ====> Three
// import axios, { AxiosRequestConfig } from 'axios';
// import { useEffect, useState } from 'react';

// export const useAxios = <T>(
//     config: AxiosRequestConfig<any>,
//     loadOnStart: boolean = true
// ): [boolean, T | undefined, string, () => void] => {
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState<T>();
//     const [error, setError] = useState('');

//     useEffect(() => {
//         if (loadOnStart) sendRequest();
//         else setLoading(false);
//     }, []);

//     const request = () => {
//         sendRequest();
//     };

//     const sendRequest = () => {
//         setLoading(true);

//         axios(config)
//             .then((response) => {
//                 setError('');
//                 setData(response.data);
//             })
//             .catch((error) => {
//                 setError(error.message);
//             })
//             .finally(() => setLoading(false));
//     };

//     return [loading, data, error, request];
// };

// const Application: React.FunctionComponent = () => {
//   const [loading, data, error, request] = useAxios<IJsonResposne>({ method: 'GET', url: 'https://reqres.in/api/users' });

//   if (loading) return <p>Loading ....</p>;

//   if (error !== '') return <p>{error}</p>;

//   if (!data) return <p>Data was null</p>;

//   return (
//       <div>
//           {data.data.map((u) => (
//               <p key={u.first_name}>
//                   {u.first_name} {u.last_name} - {u.email}
//               </p>
//           ))}
//       </div>
//   );
// };

//?===============================================================

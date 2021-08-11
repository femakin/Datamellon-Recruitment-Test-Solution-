// import React from "react";
// import axios from "axios";

// const baseURL = `https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/`;

// export default function App() {
//     const axiosInstance = axios.create({
//       baseURL,
//       timeout: 5000,
//     });

//   const [loading, setLoading] = React.useState(false);

//     const [empty, setEmpty] = React.useState([]);

//     const [empty2, setEmpty2] = React.useState([]);

//   let itemArray = [];

//   console.log(itemArray);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const data = new FormData();
//       data.append("angular_test", "angular_developer");
//       const res = await axios({
//         method: "post",
//         url: "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
//         data: { angular_test: "angular_developer" },
//         responseType: "stream",
//       });
//       setLoading(false);
//       setEmpty(res.data.filter((d, index) => index < 5));
//       setEmpty2(
//         res.data.filter((d, index) => {
//           if (index < 5) {
//             return {
//               productName: d[`Product Name`],
//               sales: d[`Sales`],
//               profit: d[`Profit`],
//               discount: d[`Discount`],
//               date: d[`Date`],
//             };
//           }
//         })
//       );
//       console.log("res...", res.data);
//       console.log(
//         "setEmpty2...",
//         res.data.filter((d, index) => {
//           if (index < 5) {
//             return {
//               productName: d[`Product Name`],
//               sales: d[`Sales`],
//               profit: d[`Profit`],
//               discount: d[`Discount`],
//               date: d[`Date`],
//             };
//           }
//         })
//       );
//       return res;
//     } catch (e) {
//       setLoading(false);
//       console.log(e);
//       return e;
//     }
//   };

//   React.useEffect(
//     React.useCallback(() => fetchData(), []),
//     []
//   );

//   return <div>{loading ? <h1>Data loading</h1> : <h1>Welcome</h1>}</div>;
// }

// const _data = [
//   {
//     Category: "Office Supplies",
//     City: "Yuma",
//     Country: "United States",
//     "Customer ID": "DM-12955",
//     "Customer Name": "Dario Medina",
//     Discount: "0.2",
//     "Order Date": "9/29/2016",
//     "Order ID": "CA-2016-106621",
//     "Postal Code": "85364",
//     "Product ID": "OFF-AR-10002375",
//     "Product Name": "Newell 351",
//     Profit: "1.1808",
//     Quantity: "4",
//     Region: "West",
//     "Row ID": "8088",
//     Sales: "10.496",
//     Segment: "Corporate",
//     "Ship Date": "10/1/2016",
//     "Ship Mode": "Second Class",
//     State: "Arizona",
//     "Sub-Category": "Art",
//   },
//   {
//     Category: "Office Supplies",
//     City: "Fairfield",
//     Country: "United States",
//     "Customer ID": "SM-20950",
//     "Customer Name": "Suzanne McNair",
//     Discount: "0",
//     "Order Date": "8/28/2015",
//     "Order ID": "CA-2015-107902",
//     "Postal Code": "6824",
//     "Product ID": "OFF-ST-10001837",
//     "Product Name": "SAFCO Mobile Desk Side File, Wire Frame",
//     Profit: "122.2936",
//     Quantity: "11",
//     Region: "East",
//     "Row ID": "9693",
//     Sales: "470.36",
//     Segment: "Corporate",
//     "Ship Date": "9/2/2015",
//     "Ship Mode": "Standard Class",
//     State: "Connecticut",
//     "Sub-Category": "Storage",
//   },
//   {
//     Category: "Furniture",
//     City: "Washington",
//     Country: "United States",
//     "Customer ID": "DA-13450",
//     "Customer Name": "Dianna Arnett",
//     Discount: "0",
//     "Order Date": "1/12/2017",
//     "Order ID": "US-2017-158512",
//     "Postal Code": "20016",
//     "Product ID": "FUR-FU-10004973",
//     "Product Name": "Flat Face Poster Frame",
//     Profit: "15.8256",
//     Quantity: "2",
//     Region: "East",
//     "Row ID": "1847",
//     Sales: "37.68",
//     Segment: "Home Office",
//     "Ship Date": "1/17/2017",
//     "Ship Mode": "Second Class",
//     State: "District of Columbia",
//     "Sub-Category": "Furnishings",
//   },
//   {
//     Category: "Technology",
//     City: "Philadelphia",
//     Country: "United States",
//     "Customer ID": "NH-18610",
//     "Customer Name": "Nicole Hansen",
//     Discount: "0.2",
//     "Order Date": "3/2/2014",
//     "Order ID": "CA-2014-111157",
//     "Postal Code": "19120",
//     "Product ID": "TEC-AC-10004353",
//     "Product Name": "Hypercom P1300 Pinpad",
//     Profit: "32.13",
//     Quantity: "3",
//     Region: "East",
//     "Row ID": "9947",
//     Sales: "151.2",
//     Segment: "Corporate",
//     "Ship Date": "3/6/2014",
//     "Ship Mode": "Standard Class",
//     State: "Pennsylvania",
//     "Sub-Category": "Accessories",
//   },
// ];

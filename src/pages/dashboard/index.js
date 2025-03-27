// import Button from "@/components/Button";
// import Layout from "@/layout/Layout";
// import Eventcard from "@/modules/Eventcard";
// import JobCard from "@/modules/JobCard";
// import { useRouter } from "next/router";
// import cookie from "cookie";
// import { useEffect, useState } from "react";
// import { getAllJobs } from "@/services/APIs/author";
// import { getUserDetail } from "@/services/APIs/helper";
// import AccountStatus from "@/modules/AccountStatus";
// import Loader from "@/modules/Loader";
// import { getProfile } from "@/services/APIs/onBoarding";
// import { setUser } from "@/services/firebase-services/cookies";
// import Table from "@/modules/Table";
// import Image from "next/image";
// import { IndianRupee } from "lucide-react";
// import { dashboardStatsCardData } from "@/seed/dashboardStatsCardData";


// export default function Index({ role }) {
//   console.log(role);
//   const [data, setData] = useState([]);
//   const [user, setUserDetail] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const dataSetter = async () => {
//     setLoading(true);
//     const resposne = await getAllJobs();
//     if (resposne?.status) {
//       setData(resposne.data);
//       setLoading(false);
//     } else {
//       setLoading(false);
//     }
//   };
//   const refreshStatus = async () => {
//     setLoading(true);
//     const response = await getProfile();
//     if (response.status) {
//       // setToken(res.token, res.expiryTime);
//       setUser(response.data);
//       setUserDetail(response.data);
//       setLoading(false);
//     } else {
//       setLoading(false);
//     }
//   };

//   const router = useRouter();
//   useEffect(() => {
//     // setUserDetail(getUserDetail());
//     // dataSetter()
//   }, []);

//   return (
//     <Layout role={role}>
//       <div className="w-full flex flex-wrap items-center justify-between">
//         <h1 className="text-black-4 text-2xl font-semibold">Dashboard</h1>
//         {/* <Button variant="primary" className="w-2/12" onClick={() => router.push("/manage-jobs/create")}>Post Vacancy</Button> */}
//       </div>

//       <div
//         className={`w-full grid grid-cols-${
//           role == "author" ? 3 : 5
//         } gap-4 mt-8`}
//       >
//         {dashboardStatsCardData({ role }).map(
//           (card, index) =>
//             card.roleCondition && (
//               <div
//                 key={index}
//                 className="w-full flex flex-wrap p-4 rounded-[10px]"
//                 style={{ backgroundColor: card.bgColor }}
//               >
//                 <div className="w-full flex gap-2 items-center">
//                   <span
//                     className=" p-1.5 rounded-lg"
//                     style={{ backgroundColor: card.iconBgColor }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="18"
//                       height="18"
//                       viewBox="0 0 18 18"
//                       fill="none"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M9 2.8125C12.4173 2.8125 15.1875 5.58274 15.1875 9C15.1875 12.4173 12.4173 15.1875 9 15.1875C5.58274 15.1875 2.8125 12.4173 2.8125 9V7.87541C2.8125 7.56475 2.56066 7.3125 2.25 7.3125C1.93934 7.3125 1.6875 7.56434 1.6875 7.875V9C1.6875 13.0386 4.96142 16.3125 9 16.3125C13.0386 16.3125 16.3125 13.0386 16.3125 9C16.3125 4.96142 13.0386 1.6875 9 1.6875L7.87554 1.6875L7.87501 2.8125L9 2.8125ZM7.3125 2.25C7.3125 2.56066 7.56435 2.8125 7.87501 2.8125L7.87554 1.6875C7.56488 1.6875 7.3125 1.93934 7.3125 2.25Z"
//                         fill={card.iconColor}
//                       />
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M2.25 4.5C1.93934 4.5 1.6875 4.75184 1.6875 5.0625C1.6875 5.37316 1.93934 5.625 2.25 5.625H5.0625C5.37316 5.625 5.625 5.37316 5.625 5.0625V2.25C5.625 1.93934 5.37316 1.6875 5.0625 1.6875C4.75184 1.6875 4.5 1.93934 4.5 2.25V3.7045L2.64775 1.85225C2.42808 1.63258 2.07192 1.63258 1.85225 1.85225C1.63258 2.07192 1.63258 2.42808 1.85225 2.64775L3.7045 4.5H2.25Z"
//                         fill={card.iconColor}
//                       />
//                       <path
//                         d="M9 4.5C9.31066 4.5 9.5625 4.75184 9.5625 5.0625V5.625H10.6875C10.9982 5.625 11.25 5.87684 11.25 6.1875C11.25 6.49816 10.9982 6.75 10.6875 6.75H8.15625C7.93247 6.75 7.71786 6.83889 7.55963 6.99713C7.40139 7.15536 7.3125 7.36997 7.3125 7.59375C7.3125 7.81753 7.40139 8.03214 7.55963 8.19037C7.71786 8.34861 7.93247 8.4375 8.15625 8.4375H9.84375C10.3659 8.4375 10.8667 8.64492 11.2359 9.01413C11.6051 9.38335 11.8125 9.8841 11.8125 10.4062C11.8125 10.9284 11.6051 11.4292 11.2359 11.7984C10.8667 12.1676 10.3659 12.375 9.84375 12.375H9.5625V12.9375C9.5625 13.2482 9.31066 13.5 9 13.5C8.68934 13.5 8.4375 13.2482 8.4375 12.9375V12.375H7.3125C7.00184 12.375 6.75 12.1232 6.75 11.8125C6.75 11.5018 7.00184 11.25 7.3125 11.25H9.84375C10.0675 11.25 10.2821 11.1611 10.4404 11.0029C10.5986 10.8446 10.6875 10.63 10.6875 10.4062C10.6875 10.1825 10.5986 9.96786 10.4404 9.80963C10.2821 9.65139 10.0675 9.5625 9.84375 9.5625H8.15625C7.63411 9.5625 7.13335 9.35508 6.76413 8.98587C6.39492 8.61665 6.1875 8.1159 6.1875 7.59375C6.1875 7.0716 6.39492 6.57085 6.76413 6.20163C7.13335 5.83242 7.63411 5.625 8.15625 5.625H8.4375V5.0625C8.4375 4.75184 8.68934 4.5 9 4.5Z"
//                         fill={card.iconColor}
//                       />
//                     </svg>
//                   </span>
//                   <span className="font-semibold text-black overflow-hidden whitespace-nowrap text-ellipsis">
//                     {card.title}
//                   </span>
//                 </div>
//                 <div className="w-full mt-4">
//                   <span className="text-2xl font-bold">{card.value}</span>
//                 </div>
//               </div>
//             )
//         )}
//       </div>

//       <div className="w-full bg-white rounded-lg p-4 mt-5">
//         <h2 className="font-medium mb-3 text-sm">Sales Report</h2>
//         <Table>
//           <thead>
//             <tr className="border-b-1.5">
//               <th className="w-3/12 text-light-grey text-left">
//                 Platform Name
//               </th>
//               <th className="w-3/12 text-light-grey text-center">Quantity</th>
//               <th className="w-3/12 text-light-grey text-center">
//                 Profits Earned
//               </th>
//               <th className="w-3/12 text-light-grey text-center">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b-1.5 w-full">
//               <td className="w-3/12 text-light-black flex flex-wrap items-center gap-3">
//                 <img
//                   src={"/images/amazon.jpg"}
//                   className="size-9 object-cover"
//                   alt="Amazon images"
//                 />
//                 Amazon
//               </td>
//               <td className="w-3/12 text-light-black text-center">1</td>
//               <td className="w-3/12 text-light-black text-center">₹33.26</td>
//               <td className="w-3/12 text-light-black text-center">
//                 13 Jul 2024
//               </td>
//             </tr>
//             <tr className="border-b-1.5">
//               <td className="w-3/12 text-light-black flex flex-wrap items-center gap-3">
//                 <img
//                   src={"/images/amazon.jpg"}
//                   className="size-9 object-cover"
//                   alt="Amazon images"
//                 />
//                 Amazon
//               </td>
//               <td className="w-3/12 text-light-black text-center">1</td>
//               <td className="w-3/12 text-light-black text-center">₹33.26</td>
//               <td className="w-3/12 text-light-black text-center">
//                 13 Jul 2024
//               </td>
//             </tr>
//             <tr className="border-b-1.5">
//               <td className="w-3/12 text-light-black flex flex-wrap items-center gap-3">
//                 <img
//                   src={"/images/amazon.jpg"}
//                   className="size-9 object-cover"
//                   alt="Amazon images"
//                 />
//                 Amazon
//               </td>
//               <td className="w-3/12 text-light-black text-center">1</td>
//               <td className="w-3/12 text-light-black text-center">₹33.26</td>
//               <td className="w-3/12 text-light-black text-center">
//                 13 Jul 2024
//               </td>
//             </tr>
//             <tr className="">
//               <td className="w-3/12 text-light-black flex flex-wrap items-center gap-3">
//                 <img
//                   src={"/images/amazon.jpg"}
//                   className="size-9 object-cover"
//                   alt="Amazon images"
//                 />
//                 Amazon
//               </td>
//               <td className="w-3/12 text-light-black text-center">1</td>
//               <td className="w-3/12 text-light-black text-center">₹33.26</td>
//               <td className="w-3/12 text-light-black text-center">
//                 13 Jul 2024
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>

//       <div className="w-full bg-white rounded-lg p-4 mt-5">
//         <h2 className="font-medium mb-3 text-sm">Top Rated Authors</h2>
//         <Table>
//           <thead>
//             <tr className="border-b-1.5">
//               <th className="w-2/12 text-light-grey text-left">Author Name</th>
//               <th className="w-2/12 text-light-grey text-center">
//                 Total Sales
//               </th>
//               <th className="w-2/12 text-light-grey text-center">
//                 Total Earnings
//               </th>
//               <th className="w-2/12 text-light-grey text-center">
//                 Total Returned
//               </th>
//               <th className="w-2/12 text-light-grey text-center">
//                 Return Royalty
//               </th>
//               <th className="w-2/12 text-light-grey text-center">
//                 Total to pay
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b-1.5">
//               <td className="w-2/12 text-light-black text-left">Lark Hazley</td>
//               <td className="w-2/12 text-light-black text-center">100</td>
//               <td className="w-2/12 text-light-black text-center">₹20,000</td>
//               <td className="w-2/12 text-light-black text-center">10</td>
//               <td className="w-2/12 text-light-black text-center text-orange">
//                 -₹500
//               </td>
//               <td className="w-2/12 text-light-black text-center ">₹4,500</td>
//             </tr>
//             <tr className="border-b-1.5">
//               <td className="w-2/12 text-light-black text-left">Lark Hazley</td>
//               <td className="w-2/12 text-light-black text-center">100</td>
//               <td className="w-2/12 text-light-black text-center">₹20,000</td>
//               <td className="w-2/12 text-light-black text-center">10</td>
//               <td className="w-2/12 text-light-black text-center text-orange">
//                 -₹500
//               </td>
//               <td className="w-2/12 text-light-black text-center ">₹4,500</td>
//             </tr>
//             <tr className="border-b-1.5">
//               <td className="w-2/12 text-light-black text-left">Lark Hazley</td>
//               <td className="w-2/12 text-light-black text-center">100</td>
//               <td className="w-2/12 text-light-black text-center">₹20,000</td>
//               <td className="w-2/12 text-light-black text-center">10</td>
//               <td className="w-2/12 text-center text-orange">-₹500</td>
//               <td className="w-2/12 text-light-black text-center ">₹4,500</td>
//             </tr>
//             <tr className="">
//               <td className="w-2/12 text-light-black text-left">Lark Hazley</td>
//               <td className="w-2/12 text-light-black text-center">100</td>
//               <td className="w-2/12 text-light-black text-center">₹20,000</td>
//               <td className="w-2/12 text-light-black text-center">10</td>
//               <td className="w-2/12 text-center text-orange">-₹500</td>
//               <td className="w-2/12 text-light-black text-center ">₹4,500</td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//     </Layout>
//   );
// }

// export async function getServerSideProps({ req, res }) {
//   const role = req.cookies._r || null;
//   return {
//     props: {
//       role: role,
//     },
//   };
// }


//TEst 1.0
// import Button from "@/components/Button";
// import Layout from "@/layout/Layout";
// import Table from "@/modules/Table";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { getAllBooks } from "@/services/APIs/books"; // ✅ Added to fetch books

// export default function Index({ role }) {
//   const router = useRouter();

//   const [dashboardData, setDashboardData] = useState({
//     totalBooks: 0,
//     totalAuthors: 0,
//     totalSales: 0,
//     totalRoyalty: 0,
//     platformEarnings: 0,
//   });

//   // ✅ Dynamically fetch dashboard stats
//   const fetchDashboardData = async () => {
//     try {
//       const bookRes = await getAllBooks({ page: 1, limit: 1000 });

//       const books = Array.isArray(bookRes?.data)
//         ? bookRes.data
//         : bookRes?.data?.results || [];

//       const totalBooks = books.length;

//       const authorsSet = new Set();
//       books.forEach((book) => {
//         if (book.author?._id) authorsSet.add(book.author._id);
//       });

//       const totalSales = books.length * 10;         // 🔧 placeholder logic
//       const totalRoyalty = books.length * 50;       // 🔧 placeholder logic
//       const platformEarnings = books.length * 60;   // 🔧 placeholder logic

//       setDashboardData({
//         totalBooks,
//         totalAuthors: authorsSet.size,
//         totalSales,
//         totalRoyalty,
//         platformEarnings,
//       });
//     } catch (error) {
//       console.error("Dashboard data fetch failed:", error);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const cards = [
//     {
//       title: "Platform Earnings",
//       value: `₹${dashboardData.platformEarnings}`,
//       bgColor: "#E9FFE0",
//       iconColor: "#57B02C",
//       iconBgColor: "#D0F2C1",
//       roleCondition: true,
//     },
//     {
//       title: "Total Royalty",
//       value: `₹${dashboardData.totalRoyalty}`,
//       bgColor: "#FFE9E0",
//       iconColor: "#EF5B25",
//       iconBgColor: "#FDD3BD",
//       roleCondition: true,
//     },
//     {
//       title: "Total Books",
//       value: dashboardData.totalBooks,
//       bgColor: "#FFEAFB",
//       iconColor: "#D62088",
//       iconBgColor: "#FFD4F0",
//       roleCondition: true,
//     },
//     {
//       title: "Total Sale",
//       value: dashboardData.totalSales,
//       bgColor: "#E6E9FF",
//       iconColor: "#244CB3",
//       iconBgColor: "#D3DBFF",
//       roleCondition: true,
//     },
//     {
//       title: "Total Authors",
//       value: dashboardData.totalAuthors,
//       bgColor: "#FFF6E4",
//       iconColor: "#FFA318",
//       iconBgColor: "#FFE9C3",
//       roleCondition: true,
//     },
//   ];

//   return (
//     <Layout role={role}>
//       <div className="w-full flex flex-wrap items-center justify-between">
//         <h1 className="text-black-4 text-2xl font-semibold">Dashboard</h1>
//       </div>

//       <div className={`w-full grid grid-cols-${role == "author" ? 3 : 5} gap-4 mt-8`}>
//         {cards.map(
//           (card, index) =>
//             card.roleCondition && (
//               <div
//                 key={index}
//                 className="w-full flex flex-wrap p-4 rounded-[10px]"
//                 style={{ backgroundColor: card.bgColor }}
//               >
//                 <div className="w-full flex gap-2 items-center">
//                   <span className="p-1.5 rounded-lg" style={{ backgroundColor: card.iconBgColor }}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M9 2.8125C12.4173 2.8125 15.1875 5.58274 15.1875 9C15.1875 12.4173 12.4173 15.1875 9 15.1875C5.58274 15.1875 2.8125 12.4173 2.8125 9V7.87541C2.8125 7.56475 2.56066 7.3125 2.25 7.3125C1.93934 7.3125 1.6875 7.56434 1.6875 7.875V9C1.6875 13.0386 4.96142 16.3125 9 16.3125C13.0386 16.3125 16.3125 13.0386 16.3125 9C16.3125 4.96142 13.0386 1.6875 9 1.6875L7.87554 1.6875L7.87501 2.8125L9 2.8125Z"
//                         fill={card.iconColor}
//                       />
//                     </svg>
//                   </span>
//                   <span className="font-semibold text-black overflow-hidden whitespace-nowrap text-ellipsis">
//                     {card.title}
//                   </span>
//                 </div>
//                 <div className="w-full mt-4">
//                   <span className="text-2xl font-bold">{card.value}</span>
//                 </div>
//               </div>
//             )
//         )}
//       </div>

//       {/* ✅ Leave other dashboard sections below this */}
//     </Layout>
//   );
// }

// export async function getServerSideProps({ req }) {
//   const role = req.cookies._r || null;
//   return {
//     props: {
//       role: role,
//     },
//   };
// }

//Test 2.0
// import Button from "@/components/Button";
// import Layout from "@/layout/Layout";
// import Table from "@/modules/Table";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { getAllBooks } from "@/services/APIs/books"; // ✅ Used for stats, sales & authors

// export default function Index({ role }) {
//   const router = useRouter();

//   const [dashboardData, setDashboardData] = useState({
//     totalBooks: 0,
//     totalAuthors: 0,
//     totalSales: 0,
//     totalRoyalty: 0,
//     platformEarnings: 0,
//   });

//   const [salesData, setSalesData] = useState([]);
//   const [authorsStats, setAuthorsStats] = useState([]);

//   // ✅ Fetch stats and prepare dashboard tables
//   const fetchDashboardData = async () => {
//     try {
//       const res = await getAllBooks({ page: 1, limit: 1000 });
//       const books = Array.isArray(res?.data) ? res.data : res?.data?.results || [];

//       const totalBooks = books.length;
//       const authorMap = new Map();
//       const salesMap = new Map();

//       let royalty = 0;
//       let earnings = 0;

//       books.forEach((book) => {
//         // Authors Count
//         if (book.author?._id) {
//           const authorId = book.author._id;
//           if (!authorMap.has(authorId)) {
//             authorMap.set(authorId, {
//               name: book.author.name,
//               totalSales: 0,
//               totalEarnings: 0,
//               totalReturned: 0,
//               returnRoyalty: 0,
//               totalToPay: 0,
//             });
//           }
//           const stats = authorMap.get(authorId);
//           stats.totalSales += 1;
//           stats.totalEarnings += 20000;
//           stats.totalReturned += 10;
//           stats.returnRoyalty -= 500;
//           stats.totalToPay += 4500;
//         }

//         // Sales Report per Platform
//         if (book.platforms?.length > 0) {
//           book.platforms.forEach((platformEntry) => {
//             const platform = platformEntry.platform || "amazon";
//             if (!salesMap.has(platform)) {
//               salesMap.set(platform, {
//                 name: platform,
//                 quantity: 0,
//                 earnings: 0,
//                 date: "13 Jul 2024", // You can update this later
//               });
//             }
//             const p = salesMap.get(platform);
//             p.quantity += 1;
//             p.earnings += 33.26;
//           });
//         }
//       });

//       setDashboardData({
//         totalBooks,
//         totalAuthors: authorMap.size,
//         totalSales: books.length * 10,
//         totalRoyalty: books.length * 50,
//         platformEarnings: books.length * 60,
//       });

//       setSalesData(Array.from(salesMap.values()));
//       setAuthorsStats(Array.from(authorMap.values()));
//     } catch (err) {
//       console.error("Dashboard data fetch failed", err);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const cards = [
//     {
//       title: "Platform Earnings",
//       value: `₹${dashboardData.platformEarnings}`,
//       bgColor: "#E9FFE0",
//       iconColor: "#57B02C",
//       iconBgColor: "#D0F2C1",
//       roleCondition: true,
//     },
//     {
//       title: "Total Royalty",
//       value: `₹${dashboardData.totalRoyalty}`,
//       bgColor: "#FFE9E0",
//       iconColor: "#EF5B25",
//       iconBgColor: "#FDD3BD",
//       roleCondition: true,
//     },
//     {
//       title: "Total Books",
//       value: dashboardData.totalBooks,
//       bgColor: "#FFEAFB",
//       iconColor: "#D62088",
//       iconBgColor: "#FFD4F0",
//       roleCondition: true,
//     },
//     {
//       title: "Total Sale",
//       value: dashboardData.totalSales,
//       bgColor: "#E6E9FF",
//       iconColor: "#244CB3",
//       iconBgColor: "#D3DBFF",
//       roleCondition: true,
//     },
//     {
//       title: "Total Authors",
//       value: dashboardData.totalAuthors,
//       bgColor: "#FFF6E4",
//       iconColor: "#FFA318",
//       iconBgColor: "#FFE9C3",
//       roleCondition: true,
//     },
//   ];

//   return (
//     <Layout role={role}>
//       <div className="w-full flex flex-wrap items-center justify-between">
//         <h1 className="text-black-4 text-2xl font-semibold">Dashboard</h1>
//       </div>

//       <div className={`w-full grid grid-cols-${role === "author" ? 3 : 5} gap-4 mt-8`}>
//         {cards.map(
//           (card, i) =>
//             card.roleCondition && (
//               <div
//                 key={i}
//                 className="w-full flex flex-wrap p-4 rounded-[10px]"
//                 style={{ backgroundColor: card.bgColor }}
//               >
//                 <div className="w-full flex gap-2 items-center">
//                   <span className="p-1.5 rounded-lg" style={{ backgroundColor: card.iconBgColor }}>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="18"
//                       height="18"
//                       fill="none"
//                       viewBox="0 0 18 18"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M9 2.8125C12.4173 2.8125 15.1875 5.58274 15.1875 9C15.1875 12.4173 12.4173 15.1875 9 15.1875C5.58274 15.1875 2.8125 12.4173 2.8125 9V7.87541C2.8125 7.56475 2.56066 7.3125 2.25 7.3125C1.93934 7.3125 1.6875 7.56434 1.6875 7.875V9C1.6875 13.0386 4.96142 16.3125 9 16.3125C13.0386 16.3125 16.3125 13.0386 16.3125 9C16.3125 4.96142 13.0386 1.6875 9 1.6875L7.87554 1.6875L7.87501 2.8125L9 2.8125Z"
//                         fill={card.iconColor}
//                       />
//                     </svg>
//                   </span>
//                   <span className="font-semibold text-black">{card.title}</span>
//                 </div>
//                 <div className="w-full mt-4">
//                   <span className="text-2xl font-bold">{card.value}</span>
//                 </div>
//               </div>
//             )
//         )}
//       </div>

//       {/* ✅ Sales Report Table */}
//       <div className="w-full bg-white rounded-lg p-4 mt-5">
//         <h2 className="font-medium mb-3 text-sm">Sales Report</h2>
//         <Table>
//           <thead>
//             <tr className="border-b-1.5">
//               <th className="w-3/12 text-light-grey text-left">Platform Name</th>
//               <th className="w-3/12 text-light-grey text-center">Quantity</th>
//               <th className="w-3/12 text-light-grey text-center">Profits Earned</th>
//               <th className="w-3/12 text-light-grey text-center">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {salesData.map((item, i) => (
//               <tr key={i} className="border-b-1.5 w-full">
//                 <td className="w-3/12 text-light-black flex gap-3 items-center">
//                   <img
//                     src={`/images/${item.name}.jpg`}
//                     className="size-9 object-cover"
//                     alt={`${item.name} logo`}
//                   />
//                   {item.name}
//                 </td>
//                 <td className="w-3/12 text-center">{item.quantity}</td>
//                 <td className="w-3/12 text-center">₹{item.earnings.toFixed(2)}</td>
//                 <td className="w-3/12 text-center">{item.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* ✅ Top Rated Authors Table */}
//       <div className="w-full bg-white rounded-lg p-4 mt-5">
//         <h2 className="font-medium mb-3 text-sm">Top Rated Authors</h2>
//         <Table>
//           <thead>
//             <tr className="border-b-1.5">
//               <th className="w-2/12 text-left text-light-grey">Author Name</th>
//               <th className="w-2/12 text-center text-light-grey">Total Sales</th>
//               <th className="w-2/12 text-center text-light-grey">Total Earnings</th>
//               <th className="w-2/12 text-center text-light-grey">Total Returned</th>
//               <th className="w-2/12 text-center text-light-grey">Return Royalty</th>
//               <th className="w-2/12 text-center text-light-grey">Total to pay</th>
//             </tr>
//           </thead>
//           <tbody>
//             {authorsStats.map((author, i) => (
//               <tr key={i} className="border-b-1.5">
//                 <td className="text-left">{author.name}</td>
//                 <td className="text-center">{author.totalSales}</td>
//                 <td className="text-center">₹{author.totalEarnings}</td>
//                 <td className="text-center">{author.totalReturned}</td>
//                 <td className="text-center text-orange">₹{author.returnRoyalty}</td>
//                 <td className="text-center">₹{author.totalToPay}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </Layout>
//   );
// }

// export async function getServerSideProps({ req }) {
//   const role = req.cookies._r || null;
//   return {
//     props: { role },
//   };
// }

//Test 3.0
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Table from "@/modules/Table";

// export default function SalesTabs() {
//   const [activeTab, setActiveTab] = useState("platform");
//   const [platformStats, setPlatformStats] = useState([]);
//   const [bookStats, setBookStats] = useState([]);
//   const [totalSales, setTotalSales] = useState(0);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("https://dream-book-backend-main.vercel.app/api/orders");
//       const orders = res.data?.data || [];

//       const platformMap = {};
//       const bookMap = {};
//       let grandTotal = 0;

//       orders.forEach((order) => {
//         const platform = order.source || "Unknown";
//         const amount = parseFloat(order.total || 0);

//         // Platform aggregation
//         if (!platformMap[platform]) {
//           platformMap[platform] = { total: 0, count: 0 };
//         }
//         platformMap[platform].total += amount;
//         platformMap[platform].count += 1;

//         // Book-wise aggregation
//         (order.line_items || []).forEach((item) => {
//           const book = item.name;
//           const price = parseFloat(item.price || 0);

//           if (!bookMap[book]) {
//             bookMap[book] = { quantity: 0, earnings: 0 };
//           }
//           bookMap[book].quantity += item.quantity || 1;
//           bookMap[book].earnings += price;
//         });

//         grandTotal += amount;
//       });

//       const platformArray = Object.entries(platformMap).map(([name, val]) => ({
//         platform: name,
//         quantity: val.count,
//         total: `₹${val.total.toFixed(2)}`
//       }));

//       const bookArray = Object.entries(bookMap).map(([name, val]) => ({
//         title: name,
//         quantity: val.quantity,
//         total: `₹${val.earnings.toFixed(2)}`
//       }));

//       setTotalSales(grandTotal);
//       setPlatformStats(platformArray);
//       setBookStats(bookArray);
//     } catch (err) {
//       console.error("Failed to load orders", err);
//     }
//   };

//   return (
//     <div className="w-full bg-white rounded-lg p-4 mt-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-base font-semibold">Sales Report</h2>
//         <div className="flex gap-2">
//           <button
//             className={`px-3 py-1 rounded text-sm ${activeTab === "platform" ? "bg-black text-white" : "bg-gray-200"}`}
//             onClick={() => setActiveTab("platform")}
//           >
//             Platform-wise
//           </button>
//           <button
//             className={`px-3 py-1 rounded text-sm ${activeTab === "book" ? "bg-black text-white" : "bg-gray-200"}`}
//             onClick={() => setActiveTab("book")}
//           >
//             Book-wise
//           </button>
//         </div>
//       </div>

//       <div className="mb-4 text-sm text-gray-700 font-medium">
//         Total Sales: <span className="font-bold">₹{totalSales.toFixed(2)}</span>
//       </div>

//       <Table>
//         <thead>
//           <tr className="border-b-1.5">
//             {activeTab === "platform" ? (
//               <>
//                 <th className="text-left">Platform</th>
//                 <th className="text-center">Total Orders</th>
//                 <th className="text-center">Earnings</th>
//               </>
//             ) : (
//               <>
//                 <th className="text-left">Book Title</th>
//                 <th className="text-center">Quantity Sold</th>
//                 <th className="text-center">Earnings</th>
//               </>
//             )}
//           </tr>
//         </thead>
//         <tbody>
//           {activeTab === "platform"
//             ? platformStats.map((item, i) => (
//                 <tr key={i} className="border-b-1.5">
//                   <td className="text-left flex items-center gap-2">
//                     <img src={`/images/${item.platform.toLowerCase()}.jpg`} className="size-6" />
//                     {item.platform}
//                   </td>
//                   <td className="text-center">{item.quantity}</td>
//                   <td className="text-center">{item.total}</td>
//                 </tr>
//               ))
//             : bookStats.map((item, i) => (
//                 <tr key={i} className="border-b-1.5">
//                   <td className="text-left">{item.title}</td>
//                   <td className="text-center">{item.quantity}</td>
//                   <td className="text-center">{item.total}</td>
//                 </tr>
//               ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }


//Test 4.0
// import Button from "@/components/Button";
// import Layout from "@/layout/Layout";
// import Table from "@/modules/Table";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { getAllBooks } from "@/services/APIs/books";
// import axios from "axios";

// export default function Index({ role }) {
//   const router = useRouter();

//   const [dashboardData, setDashboardData] = useState({
//     totalBooks: 0,
//     totalAuthors: 0,
//     totalSales: 0,
//     totalRoyalty: 0,
//     platformEarnings: 0,
//   });

//   const [activeTab, setActiveTab] = useState("platform");
//   const [platformStats, setPlatformStats] = useState([]);
//   const [bookStats, setBookStats] = useState([]);
//   const [totalSalesAmount, setTotalSalesAmount] = useState(0);

//   const fetchDashboardData = async () => {
//     try {
//       const bookRes = await getAllBooks({ page: 1, limit: 1000 });
//       const books = Array.isArray(bookRes?.data) ? bookRes.data : [];

//       const authorsSet = new Set();
//       books.forEach((book) => {
//         if (book.author?._id) authorsSet.add(book.author._id);
//       });

//       setDashboardData({
//         totalBooks: books.length,
//         totalAuthors: authorsSet.size,
//         totalSales: books.length * 10,
//         totalRoyalty: books.length * 50,
//         platformEarnings: books.length * 60,
//       });

//       await fetchSalesData(); // ✅ Also load sales
//     } catch (error) {
//       console.error("Dashboard data fetch failed:", error);
//     }
//   };

//   const fetchSalesData = async () => {
//     try {
//       const res = await axios.get("https://dream-book-backend-main.vercel.app/api/orders");
//       const orders = res.data?.data || [];

//       const platformMap = {};
//       const bookMap = {};
//       let grandTotal = 0;

//       orders.forEach((order) => {
//         const platform = order.source || "Unknown";
//         const amount = parseFloat(order.total || 0);
//         if (!platformMap[platform]) {
//           platformMap[platform] = { total: 0, count: 0 };
//         }
//         platformMap[platform].total += amount;
//         platformMap[platform].count += 1;

//         (order.line_items || []).forEach((item) => {
//           const book = item.name;
//           const price = parseFloat(item.price || 0);
//           if (!bookMap[book]) {
//             bookMap[book] = { quantity: 0, earnings: 0 };
//           }
//           bookMap[book].quantity += item.quantity || 1;
//           bookMap[book].earnings += price;
//         });

//         grandTotal += amount;
//       });

//       const platformArray = Object.entries(platformMap).map(([name, val]) => ({
//         platform: name,
//         quantity: val.count,
//         total: `₹${val.total.toFixed(2)}`
//       }));

//       const bookArray = Object.entries(bookMap).map(([name, val]) => ({
//         title: name,
//         quantity: val.quantity,
//         total: `₹${val.earnings.toFixed(2)}`
//       }));

//       setPlatformStats(platformArray);
//       setBookStats(bookArray);
//       setTotalSalesAmount(grandTotal);
//     } catch (err) {
//       console.error("Failed to load sales data", err);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const cards = [
//     {
//       title: "Platform Earnings",
//       value: `₹${dashboardData.platformEarnings}`,
//       bgColor: "#E9FFE0",
//       iconColor: "#57B02C",
//       iconBgColor: "#D0F2C1",
//       roleCondition: true,
//     },
//     {
//       title: "Total Royalty",
//       value: `₹${dashboardData.totalRoyalty}`,
//       bgColor: "#FFE9E0",
//       iconColor: "#EF5B25",
//       iconBgColor: "#FDD3BD",
//       roleCondition: true,
//     },
//     {
//       title: "Total Books",
//       value: dashboardData.totalBooks,
//       bgColor: "#FFEAFB",
//       iconColor: "#D62088",
//       iconBgColor: "#FFD4F0",
//       roleCondition: true,
//     },
//     {
//       title: "Total Sale",
//       value: dashboardData.totalSales,
//       bgColor: "#E6E9FF",
//       iconColor: "#244CB3",
//       iconBgColor: "#D3DBFF",
//       roleCondition: true,
//     },
//     {
//       title: "Total Authors",
//       value: dashboardData.totalAuthors,
//       bgColor: "#FFF6E4",
//       iconColor: "#FFA318",
//       iconBgColor: "#FFE9C3",
//       roleCondition: true,
//     }
//   ];

//   return (
//     <Layout role={role}>
//       <div className="w-full flex flex-wrap items-center justify-between">
//         <h1 className="text-black-4 text-2xl font-semibold">Dashboard</h1>
//       </div>

//       <div className={`w-full grid grid-cols-${role === "author" ? 3 : 5} gap-4 mt-8`}>
//         {cards.map(
//           (card, index) =>
//             card.roleCondition && (
//               <div
//                 key={index}
//                 className="w-full flex flex-wrap p-4 rounded-[10px]"
//                 style={{ backgroundColor: card.bgColor }}
//               >
//                 <div className="w-full flex gap-2 items-center">
//                   <span className="p-1.5 rounded-lg" style={{ backgroundColor: card.iconBgColor }}>
//                     ₹
//                   </span>
//                   <span className="font-semibold text-black">{card.title}</span>
//                 </div>
//                 <div className="w-full mt-4">
//                   <span className="text-2xl font-bold">{card.value}</span>
//                 </div>
//               </div>
//             )
//         )}
//       </div>

//       {/* ✅ SALES TABS */}
//       <div className="w-full bg-white rounded-lg p-4 mt-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-base font-semibold">Sales Report</h2>
//           <div className="flex gap-2">
//             <button
//               className={`px-3 py-1 rounded text-sm ${activeTab === "platform" ? "bg-black text-white" : "bg-gray-200"}`}
//               onClick={() => setActiveTab("platform")}
//             >
//               Platform-wise
//             </button>
//             <button
//               className={`px-3 py-1 rounded text-sm ${activeTab === "book" ? "bg-black text-white" : "bg-gray-200"}`}
//               onClick={() => setActiveTab("book")}
//             >
//               Book-wise
//             </button>
//           </div>
//         </div>

//         <div className="mb-4 text-sm text-gray-700 font-medium">
//           Total Sales: <span className="font-bold">₹{totalSalesAmount.toFixed(2)}</span>
//         </div>

//         <Table>
//           <thead>
//             <tr className="border-b-1.5">
//               {activeTab === "platform" ? (
//                 <>
//                   <th className="text-left">Platform</th>
//                   <th className="text-center">Total Orders</th>
//                   <th className="text-center">Earnings</th>
//                 </>
//               ) : (
//                 <>
//                   <th className="text-left">Book Title</th>
//                   <th className="text-center">Quantity Sold</th>
//                   <th className="text-center">Earnings</th>
//                 </>
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {activeTab === "platform"
//               ? platformStats.map((item, i) => (
//                   <tr key={i} className="border-b-1.5">
//                     <td className="text-left flex items-center gap-2">
//                       <img src={`/images/${item.platform.toLowerCase()}.jpg`} className="size-6" />
//                       {item.platform}
//                     </td>
//                     <td className="text-center">{item.quantity}</td>
//                     <td className="text-center">{item.total}</td>
//                   </tr>
//                 ))
//               : bookStats.map((item, i) => (
//                   <tr key={i} className="border-b-1.5">
//                     <td className="text-left">{item.title}</td>
//                     <td className="text-center">{item.quantity}</td>
//                     <td className="text-center">{item.total}</td>
//                   </tr>
//                 ))}
//           </tbody>
//         </Table>
//       </div>
      
//     </Layout>
//   );
// }

// export async function getServerSideProps({ req }) {
//   const role = req.cookies._r || null;
//   return {
//     props: { role },
//   };
// }

//Test 5.0
import Layout from "@/layout/Layout";
import Table from "@/modules/Table";
import { getAllBooks } from "@/services/APIs/books";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Index({ role }) {
  const [dashboardData, setDashboardData] = useState({
    totalBooks: 0,
    totalAuthors: 0,
    totalSales: 0,
    totalRoyalty: 0,
    platformEarnings: 0,
  });

  const [activeTab, setActiveTab] = useState("platform");
  const [platformStats, setPlatformStats] = useState([]);
  const [bookStats, setBookStats] = useState([]);
  const [topAuthors, setTopAuthors] = useState([]);
  const [totalSalesAmount, setTotalSalesAmount] = useState(0);

  const fetchDashboardData = async () => {
    const bookRes = await getAllBooks({ page: 1, limit: 1000 });
    const books = Array.isArray(bookRes?.data) ? bookRes.data : [];

    const authorsSet = new Set();
    books.forEach((book) => book.author?._id && authorsSet.add(book.author._id));

    setDashboardData({
      totalBooks: books.length,
      totalAuthors: authorsSet.size,
      totalSales: books.length * 10,
      totalRoyalty: books.length * 50,
      platformEarnings: books.length * 60,
    });

    await fetchSalesData();
  };

  const fetchSalesData = async () => {
    try {
      const res = await axios.get("https://dream-book-backend-main.vercel.app/api/orders");
      const orders = res.data?.data || [];

      const platformMap = {};
      const bookMap = {};
      const authorMap = {};
      let totalSales = 0;

      orders.forEach((order) => {
        const platform = order.source || "Unknown";
        const total = parseFloat(order.total || 0);
        platformMap[platform] = platformMap[platform] || { total: 0, count: 0 };
        platformMap[platform].total += total;
        platformMap[platform].count += 1;
        totalSales += total;

        order.line_items?.forEach((item) => {
          const title = item.name;
          const author = item.author || "Unknown Author";
          const qty = item.quantity || 1;
          const price = parseFloat(item.price || 0);

          bookMap[title] = bookMap[title] || { quantity: 0, earnings: 0 };
          bookMap[title].quantity += qty;
          bookMap[title].earnings += price;

          authorMap[author] = authorMap[author] || { sales: 0, earnings: 0 };
          authorMap[author].sales += qty;
          authorMap[author].earnings += price;
        });
      });

      setPlatformStats(Object.entries(platformMap).map(([p, val]) => ({
        platform: p,
        quantity: val.count,
        total: `₹${val.total.toFixed(2)}`
      })));

      setBookStats(Object.entries(bookMap).map(([title, val]) => ({
        title,
        quantity: val.quantity,
        total: `₹${val.earnings.toFixed(2)}`
      })));

      setTopAuthors(Object.entries(authorMap).map(([name, val]) => {
        const returned = 2;
        const returnRoyalty = val.earnings * 0.1;
        const toPay = val.earnings - returnRoyalty;
        return {
          name,
          sales: val.sales,
          earnings: val.earnings,
          returned,
          returnRoyalty,
          toPay,
        };
      }));

      setTotalSalesAmount(totalSales);
    } catch (err) {
      console.error("Failed to fetch order data", err);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const cards = [
    {
      title: "Platform Earnings",
      value: `₹${dashboardData.platformEarnings}`,
      bgColor: "#E9FFE0",
      iconColor: "#57B02C",
      iconBgColor: "#D0F2C1",
    },
    {
      title: "Total Royalty",
      value: `₹${dashboardData.totalRoyalty}`,
      bgColor: "#FFE9E0",
      iconColor: "#EF5B25",
      iconBgColor: "#FDD3BD",
    },
    {
      title: "Total Books",
      value: dashboardData.totalBooks,
      bgColor: "#FFEAFB",
      iconColor: "#D62088",
      iconBgColor: "#FFD4F0",
    },
    {
      title: "Total Sale",
      value: dashboardData.totalSales,
      bgColor: "#E6E9FF",
      iconColor: "#244CB3",
      iconBgColor: "#D3DBFF",
    },
    {
      title: "Total Authors",
      value: dashboardData.totalAuthors,
      bgColor: "#FFF6E4",
      iconColor: "#FFA318",
      iconBgColor: "#FFE9C3",
    }
  ];

  return (
    <Layout role={role}>
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black-4">Dashboard</h1>
      </div>

      <div className="w-full grid grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="p-4 rounded-[10px]" style={{ backgroundColor: card.bgColor }}>
            <div className="flex gap-2 items-center">
              <span className="p-1.5 rounded-lg" style={{ backgroundColor: card.iconBgColor }}>
                ₹
              </span>
              <span className="font-semibold text-black">{card.title}</span>
            </div>
            <div className="mt-4 text-2xl font-bold">{card.value}</div>
          </div>
        ))}
      </div>

      {/* ✅ SALES REPORT TABS */}
      <div className="w-full bg-white rounded-lg p-4 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold">Sales Report</h2>
          <div className="flex gap-2">
            <button
              className={`px-3 py-1 rounded text-sm ${activeTab === "platform" ? "bg-black text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab("platform")}
            >
              Platform-wise
            </button>
            <button
              className={`px-3 py-1 rounded text-sm ${activeTab === "book" ? "bg-black text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab("book")}
            >
              Book-wise
            </button>
          </div>
        </div>

        <div className="mb-4 text-sm font-medium text-gray-700">
          Total Sales: <span className="font-bold">₹{totalSalesAmount.toFixed(2)}</span>
        </div>

        <Table>
          <thead>
            <tr className="border-b-1.5">
              {activeTab === "platform" ? (
                <>
                  <th className="text-left">Platform</th>
                  <th className="text-center">Orders</th>
                  <th className="text-center">Earnings</th>
                </>
              ) : (
                <>
                  <th className="text-left">Book Title</th>
                  <th className="text-center">Sold</th>
                  <th className="text-center">Earnings</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {activeTab === "platform"
              ? platformStats.map((item, i) => (
                  <tr key={i} className="border-b-1.5">
                    <td className="text-left flex items-center gap-2">
                      <img src={`/images/${item.platform.toLowerCase()}.jpg`} className="size-6" />
                      {item.platform}
                    </td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">{item.total}</td>
                  </tr>
                ))
              : bookStats.map((item, i) => (
                  <tr key={i} className="border-b-1.5">
                    <td className="text-left">{item.title}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">{item.total}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>

      {/* ✅ TOP AUTHORS */}
      <div className="w-full bg-white rounded-lg p-4 mt-6">
        <h2 className="text-base font-semibold mb-3">Top Rated Authors</h2>
        <Table>
          <thead>
            <tr className="border-b-1.5">
              <th className="text-left">Author</th>
              <th className="text-center">Sales</th>
              <th className="text-center">Earnings</th>
              <th className="text-center">Returned</th>
              <th className="text-center">Return Royalty</th>
              <th className="text-center">To Pay</th>
            </tr>
          </thead>
          <tbody>
            {topAuthors.map((a, i) => (
              <tr key={i} className="border-b-1.5">
                <td>{a.name}</td>
                <td className="text-center">{a.sales}</td>
                <td className="text-center">₹{a.earnings.toFixed(2)}</td>
                <td className="text-center">{a.returned}</td>
                <td className="text-center text-orange">-₹{a.returnRoyalty.toFixed(2)}</td>
                <td className="text-center">₹{a.toPay.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const role = req.cookies._r || null;
  return {
    props: { role },
  };
}

import Button from "@/components/Button";
import Layout from "@/layout/Layout";
import Card from "@/modules/books/Card";
import FilterBar from "@/modules/FilterBar";
import Loader from "@/modules/Loader";
import Pagination from "@/modules/Pagination";
import SingleUser from "@/modules/SingleUser";
import Table from "@/modules/Table/Table";
import { getAllBooks } from "@/services/APIs/books";
import { getAllSeekers } from "@/services/APIs/user";
import { debounce } from "@/Utilities/helpers";
import { IndianRupee } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function Index({ role }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [filters, setFilters] = useState({
    keyword: "",
    status: "",
    page: 1,
    limit: 10,
  });
  const [paginationData, setPaginationData] = useState(null);

  const filterHandler = useCallback((keyword, status, page, limit, sort) => {
    const newFilters = {
      keyword: keyword ?? "",
      status: status ?? "",
      sort: sort ?? "",
      page: page ?? 1,
      limit: limit ?? 10,
    };

    setFilters(newFilters);
    fetchData(newFilters);
  }, []);

  const debouncedFilterHandler = useCallback(
    debounce((keyword, status, page, limit, sort) => {
      filterHandler(keyword, status, page, limit, sort);
    }, 400),
    [filterHandler]
  );

  const fetchData = async (queryFilters = filters) => {
    setLoading(true);
    const payload = {
      page: queryFilters.page,
      limit: queryFilters.limit,
    };

    if (queryFilters.keyword) {
      payload.search = queryFilters.keyword;
    }

    if (queryFilters.status) {
      switch (queryFilters.status) {
        case "1":
          payload.status = "verified";
          break;
        case "0":
          payload.status = "pending";
          break;
        case "2":
          payload.status = "declined";
          break;
        default:
          break;
      }
    }

    if (queryFilters.sort) {
      switch (queryFilters.sort) {
        case "1":
          payload.sort = "oldToNew";
          break;
        case "2":
          payload.sort = "newToOld";
          break;
        default:
          break;
      }
    }

    const response = await getAllBooks(payload);
    if (response.status) {
      setData(response.data.results);
      setPaginationData({
        page: response.data.page,
        limit: response.data.limit,
        totalPages: response.data.totalPages,
        totalResults: response.data.totalResults,
      });
      setLoading(false);
    } else {
      setData([]);
      setPaginationData({
        page: 1,
        limit: queryFilters.limit,
        totalPages: 0,
        totalResults: 0,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout role={role}>
      <div className="w-full flex flex-wrap items-center justify-between">
        <h1 className="text-black-4 text-3xl font-semibold">Books</h1>
        <Button
          variant="primary"
          className="w-fit items-center"
          onClick={() => router.push("/books/create")}
        >
          <svg
            className="mr-2 mt-[1px]"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.625 7C2.625 6.75838 2.78823 6.5625 2.98958 6.5625H11.0104C11.2118 6.5625 11.375 6.75838 11.375 7C11.375 7.24162 11.2118 7.4375 11.0104 7.4375H2.98958C2.78823 7.4375 2.625 7.24162 2.625 7Z"
              fill="#FDFCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 2.625C7.24162 2.625 7.4375 2.78823 7.4375 2.98958V11.0104C7.4375 11.2118 7.24162 11.375 7 11.375C6.75838 11.375 6.5625 11.2118 6.5625 11.0104V2.98958C6.5625 2.78823 6.75838 2.625 7 2.625Z"
              fill="#FDFCFF"
            />
          </svg>
          Create New Book
        </Button>
      </div>
      <div className="w-full bg-[#FDFCFF] mt-5 rounded-md pb-3">
        <FilterBar
          data={data}
          sort={true}
          handler={filterHandler}
          debouncedHandler={debouncedFilterHandler}
          currentFilters={filters}
        />
        <div className="w-full bg-[#FDFCFF] grid grid-cols-3 gap-4 px-5 py-3 mb-4">
          {/* <h6 className='text-sm font-normal text-input-label w-2/12'>Username</h6> */}
          {/* <h6 className='text-sm font-normal text-input-label w-1/6 text-center'>Id</h6> */}
          {/* <h6 className='text-sm font-normal text-input-label w-3/12'>Email</h6>
          <h6 className='text-sm font-normal text-input-label w-2/12'>Phone</h6>
          <h6 className='text-sm font-normal text-input-label w-1/6 text-center'>Category</h6>
          <h6 className='text-sm font-normal text-input-label w-1/6 text-center'>Verfied</h6>
          <h6 className='text-sm font-normal text-input-label w-1/12 text-center'>Action</h6> */}
          {/* <Card variant="approved" />
          <Card variant="pending" />
          <Card variant="rejected" />
          <Card variant="draft" /> */}
          {!loading &&
            data &&
            data.map((item, index) => (
              <Card key={`book-${index}`} data={item} variant={item.status} />
            ))}
        </div>

        {!loading && data && data.length == 0 && (
          <div className="w-full bg-[#FDFCFF] flex flex-wrap items-center justify-center gap-4 px-5 py-3 mb-4">
            <div className="w-full flex flex-wrap justify-center">
              <img src="/images/no-data.png" />
            </div>
            <h3>No Data Found</h3>
          </div>
        )}
        {loading && <Loader />}
        {!loading && paginationData && (
          <Pagination
            filters={filters}
            data={paginationData}
            handler={filterHandler}
          />
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const role = req.cookies._r || null;
  return {
    props: {
      role: role,
    },
  };
}

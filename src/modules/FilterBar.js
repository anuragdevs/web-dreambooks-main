import React, { useState, useEffect } from "react";
import CategoryStatus from "./CategoryStatus";
import DateModal from "./DateModal";
import StatusModal from "./StatusModal";

export default function FilterBar(props) {
  const [statusModal, setStatusModal] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const [sort, setSort] = useState(props.currentFilters?.sort || "");
  const [status, setStatus] = useState(props.currentFilters?.status || "");
  const [keyword, setKeyword] = useState(props.currentFilters?.keyword || "");

  useEffect(() => {
    if (props.currentFilters) {
      setSort(props.currentFilters.sort || "");
      setStatus(props.currentFilters.status || "");
      setKeyword(props.currentFilters.keyword || "");
    }
  }, [props.currentFilters]);

  const statusModalHandler = () => {
    setStatusModal(!statusModal);
    if (sortModal) setSortModal(false);
  };

  const sortModalhandler = () => {
    setSortModal(!sortModal);
    if (statusModal) setStatusModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusModal || sortModal) {
        // Check if click is outside the modals
        if (!event.target.closest(".filter-dropdown")) {
          setStatusModal(false);
          setSortModal(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [statusModal, sortModal]);

  const searchHandler = (e) => {
    const key = e.target.value;
    setKeyword(key);
    props.debouncedHandler(
      key,
      status,
      props.data?.current_page,
      props.data?.per_page,
      sort
    );
  };

  const filtersHandler = (val) => {
    setStatus(val);
    setStatusModal(false);
    props.handler(
      keyword,
      val,
      props.data?.current_page,
      props.data?.per_page,
      sort
    );
  };

  const filtersSortHandler = (val) => {
    setSort(val);
    setSortModal(false);
    props.handler(
      keyword,
      status,
      props.data?.current_page,
      props.data?.per_page,
      val
    );
  };

  return (
    <div className="w-full flex items-center gap-3 py-3 px-5 bg-white rounded-t-md">
      <div className="w-4/12 rounded-lg flex items-center gap-2 border border-solid border-[#DCDBE1] py-2 px-4 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M18.1641 16.8359L14.9844 13.6563C16.0113 12.3456 16.5672 10.7275 16.5625 9.0625C16.5625 7.57914 16.1226 6.1291 15.2985 4.89573C14.4744 3.66236 13.3031 2.70106 11.9326 2.13341C10.5622 1.56575 9.05418 1.41722 7.59933 1.70661C6.14447 1.996 4.8081 2.71031 3.7592 3.7592C2.71031 4.8081 1.996 6.14447 1.70661 7.59933C1.41722 9.05418 1.56575 10.5622 2.13341 11.9326C2.70106 13.3031 3.66236 14.4744 4.89573 15.2985C6.1291 16.1226 7.57914 16.5625 9.0625 16.5625C10.7275 16.5672 12.3456 16.0113 13.6563 14.9844L16.8359 18.1641C17.0129 18.3387 17.2514 18.4366 17.5 18.4366C17.7486 18.4366 17.9872 18.3387 18.1641 18.1641C18.2515 18.077 18.3208 17.9735 18.3681 17.8595C18.4154 17.7456 18.4398 17.6234 18.4398 17.5C18.4398 17.3766 18.4154 17.2544 18.3681 17.1405C18.3208 17.0265 18.2515 16.923 18.1641 16.8359ZM3.4375 9.0625C3.4375 7.94998 3.7674 6.86245 4.38549 5.93742C5.00357 5.01239 5.88207 4.29142 6.90991 3.86568C7.93774 3.43994 9.06874 3.32854 10.1599 3.54559C11.251 3.76263 12.2533 4.29836 13.04 5.08503C13.8266 5.8717 14.3624 6.87398 14.5794 7.96512C14.7965 9.05626 14.6851 10.1873 14.2593 11.2151C13.8336 12.2429 13.1126 13.1214 12.1876 13.7395C11.2626 14.3576 10.175 14.6875 9.0625 14.6875C7.5713 14.6854 6.14175 14.0921 5.08731 13.0377C4.03287 11.9833 3.43957 10.5537 3.4375 9.0625Z"
            fill="#B3B2BD"
          />
        </svg>
        <input
          type="text"
          value={keyword}
          onChange={searchHandler}
          className="w-10/12 outline-none"
          placeholder="Search"
        />
      </div>
      {!props.sort && (
        <div
          onClick={statusModalHandler}
          className="filter-dropdown rounded-lg cursor-pointer flex items-center gap-2 border border-solid border-[#DCDBE1] py-2 px-4 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.9375 10C15.9375 10.2486 15.8387 10.4871 15.6629 10.6629C15.4871 10.8387 15.2486 10.9375 15 10.9375H5C4.75136 10.9375 4.5129 10.8387 4.33709 10.6629C4.16127 10.4871 4.0625 10.2486 4.0625 10C4.0625 9.75136 4.16127 9.5129 4.33709 9.33709C4.5129 9.16127 4.75136 9.0625 5 9.0625H15C15.2486 9.0625 15.4871 9.16127 15.6629 9.33709C15.8387 9.5129 15.9375 9.75136 15.9375 10ZM18.125 5.3125H1.875C1.62636 5.3125 1.3879 5.41127 1.21209 5.58709C1.03627 5.7629 0.9375 6.00136 0.9375 6.25C0.9375 6.49864 1.03627 6.7371 1.21209 6.91291C1.3879 7.08873 1.62636 7.1875 1.875 7.1875H18.125C18.3736 7.1875 18.6121 7.08873 18.7879 6.91291C18.9637 6.7371 19.0625 6.49864 19.0625 6.25C19.0625 6.00136 18.9637 5.7629 18.7879 5.58709C18.6121 5.41127 18.3736 5.3125 18.125 5.3125ZM11.875 12.8125H8.125C7.87636 12.8125 7.6379 12.9113 7.46209 13.0871C7.28627 13.2629 7.1875 13.5014 7.1875 13.75C7.1875 13.9986 7.28627 14.2371 7.46209 14.4129C7.6379 14.5887 7.87636 14.6875 8.125 14.6875H11.875C12.1236 14.6875 12.3621 14.5887 12.5379 14.4129C12.7137 14.2371 12.8125 13.9986 12.8125 13.75C12.8125 13.5014 12.7137 13.2629 12.5379 13.0871C12.3621 12.9113 12.1236 12.8125 11.875 12.8125Z"
              fill="#666576"
            />
          </svg>
          <h6 className="font-normal text-sm text-[#17161D]">Status</h6>
          {statusModal && (
            <CategoryStatus value={status} handler={filtersHandler} />
          )}
        </div>
      )}
      {props.sort && (
        <div
          onClick={statusModalHandler}
          className="filter-dropdown rounded-lg cursor-pointer flex items-center gap-2 border border-solid border-[#DCDBE1] py-2 px-4 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.9375 10C15.9375 10.2486 15.8387 10.4871 15.6629 10.6629C15.4871 10.8387 15.2486 10.9375 15 10.9375H5C4.75136 10.9375 4.5129 10.8387 4.33709 10.6629C4.16127 10.4871 4.0625 10.2486 4.0625 10C4.0625 9.75136 4.16127 9.5129 4.33709 9.33709C4.5129 9.16127 4.75136 9.0625 5 9.0625H15C15.2486 9.0625 15.4871 9.16127 15.6629 9.33709C15.8387 9.5129 15.9375 9.75136 15.9375 10ZM18.125 5.3125H1.875C1.62636 5.3125 1.3879 5.41127 1.21209 5.58709C1.03627 5.7629 0.9375 6.00136 0.9375 6.25C0.9375 6.49864 1.03627 6.7371 1.21209 6.91291C1.3879 7.08873 1.62636 7.1875 1.875 7.1875H18.125C18.3736 7.1875 18.6121 7.08873 18.7879 6.91291C18.9637 6.7371 19.0625 6.49864 19.0625 6.25C19.0625 6.00136 18.9637 5.7629 18.7879 5.58709C18.6121 5.41127 18.3736 5.3125 18.125 5.3125ZM11.875 12.8125H8.125C7.87636 12.8125 7.6379 12.9113 7.46209 13.0871C7.28627 13.2629 7.1875 13.5014 7.1875 13.75C7.1875 13.9986 7.28627 14.2371 7.46209 14.4129C7.6379 14.5887 7.87636 14.6875 8.125 14.6875H11.875C12.1236 14.6875 12.3621 14.5887 12.5379 14.4129C12.7137 14.2371 12.8125 13.9986 12.8125 13.75C12.8125 13.5014 12.7137 13.2629 12.5379 13.0871C12.3621 12.9113 12.1236 12.8125 11.875 12.8125Z"
              fill="#666576"
            />
          </svg>
          <h6 className="font-normal text-sm text-[#17161D]">Status</h6>
          {statusModal && (
            <StatusModal value={status} handler={filtersHandler} />
          )}
        </div>
      )}
      {props.sort && (
        <div
          onClick={sortModalhandler}
          className="filter-dropdown rounded-lg cursor-pointer flex items-center gap-2 border border-solid border-[#DCDBE1] py-2 px-4 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.41406 13.0859C9.50146 13.173 9.57081 13.2765 9.61813 13.3905C9.66545 13.5044 9.6898 13.6266 9.6898 13.75C9.6898 13.8734 9.66545 13.9955 9.61813 14.1095C9.57081 14.2235 9.50146 14.3269 9.41406 14.414L6.91406 16.914C6.73715 17.0887 6.49858 17.1866 6.25 17.1866C6.00142 17.1866 5.76285 17.0887 5.58594 16.914L3.08594 14.414C2.90982 14.2379 2.81087 13.9991 2.81087 13.75C2.81087 13.5009 2.90982 13.262 3.08594 13.0859C3.26206 12.9098 3.50093 12.8109 3.75 12.8109C3.99907 12.8109 4.23794 12.9098 4.41406 13.0859L5.3125 13.9844V3.74998C5.3125 3.50134 5.41127 3.26289 5.58709 3.08707C5.7629 2.91125 6.00136 2.81248 6.25 2.81248C6.49864 2.81248 6.7371 2.91125 6.91291 3.08707C7.08873 3.26289 7.1875 3.50134 7.1875 3.74998V13.9844L8.08594 13.0859C8.17304 12.9985 8.27653 12.9292 8.39048 12.8819C8.50444 12.8345 8.62661 12.8102 8.75 12.8102C8.87339 12.8102 8.99556 12.8345 9.10952 12.8819C9.22347 12.9292 9.32697 12.9985 9.41406 13.0859ZM16.9141 5.58592L14.4141 3.08592C14.327 2.99852 14.2235 2.92917 14.1095 2.88186C13.9956 2.83454 13.8734 2.81018 13.75 2.81018C13.6266 2.81018 13.5044 2.83454 13.3905 2.88186C13.2765 2.92917 13.173 2.99852 13.0859 3.08592L10.5859 5.58592C10.4098 5.76204 10.3109 6.00091 10.3109 6.24998C10.3109 6.49905 10.4098 6.73792 10.5859 6.91405C10.7621 7.09017 11.0009 7.18911 11.25 7.18911C11.4991 7.18911 11.7379 7.09017 11.9141 6.91405L12.8125 6.01561V16.25C12.8125 16.4986 12.9113 16.7371 13.0871 16.9129C13.2629 17.0887 13.5014 17.1875 13.75 17.1875C13.9986 17.1875 14.2371 17.0887 14.4129 16.9129C14.5887 16.7371 14.6875 16.4986 14.6875 16.25V6.01561L15.5859 6.91405C15.7628 7.08867 16.0014 7.18657 16.25 7.18657C16.4986 7.18657 16.7371 7.08867 16.9141 6.91405C17.0015 6.82695 17.0708 6.72345 17.1181 6.6095C17.1654 6.49555 17.1898 6.37337 17.1898 6.24998C17.1898 6.12659 17.1654 6.00442 17.1181 5.89047C17.0708 5.77651 17.0015 5.67302 16.9141 5.58592Z"
              fill="#666576"
            />
          </svg>
          <h6 className="font-normal text-sm text-[#17161D]">Sort</h6>
          {sortModal && <DateModal value={sort} handler={filtersSortHandler} />}
        </div>
      )}
    </div>
  );
}

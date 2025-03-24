import React from "react";

export default function DateModal(props) {
  const handler = (e) => {
    props.handler(e.currentTarget.getAttribute("value"));
  };
  return (
    <div className="w-32 bg-white z-20 p-4 rounded-xl absolute top-12 border border-[#ededed] left-0 z-50">
      <h5 className="text-black text-sm font-semibold mb-4">Date</h5>
      <label
        htmlFor="oldToNew"
        className="w-full flex items-center gap-2 cursor-pointer"
        value="1"
        onClick={handler}
      >
        {props.value === "1" ? (
          <input
            type="radio"
            name="sort"
            id="oldToNew"
            value="oldToNew"
            checked
          />
        ) : (
          <input type="radio" name="sort" id="oldToNew" value="oldToNew" />
        )}
        <h6 className="text-xs text-black font-normal">Old to new</h6>
      </label>
      <label
        htmlFor="newToOld"
        className="w-full flex items-center gap-2 mt-4 cursor-pointer"
        value="2"
        onClick={handler}
      >
        {props.value === "2" ? (
          <input
            type="radio"
            name="sort"
            id="newToOld"
            value="newToOld"
            checked
          />
        ) : (
          <input type="radio" name="sort" id="newToOld" value="newToOld" />
        )}
        <h6 className="text-xs text-black font-normal">New to old</h6>
      </label>
      <label
        htmlFor="none"
        className="w-full flex items-center gap-2 mt-4 cursor-pointer"
        value=""
        onClick={handler}
      >
        {props.value === "" ? (
          <input type="radio" name="sort" id="none" value="none" checked />
        ) : (
          <input type="radio" name="sort" id="none" value="none" />
        )}
        <h6 className="text-xs text-black font-normal">None</h6>
      </label>
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";

TodoSearch.prototype = {
  Icon: PropTypes.element.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
function TodoSearch(props) {
  // const [searchValue, setSearchValue] = React.useState("");

  const onSearchValueChange = (event) => {
    props.setSearchValue(event.target.value)
    console.log(event.target.value);
  };

  // return <input placeholder="Buscar tarea..."></input>;
  return (
      <label className="relative block text-black">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {/* <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg> */}
          {props.Icon}
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Busca algun todo..."
          type="text"
          name="search"
          onChange={onSearchValueChange}
          value={props.searchValue}
        />
      </label>
  );
}

export { TodoSearch };

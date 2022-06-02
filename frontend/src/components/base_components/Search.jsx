import Button from "./Button";
const Search = props => {
  const { className, name, value } = props;
  return (
    <div className="search_container">
      <input
        className={className}
        type="search"
        name={name}
        placeholder="Search....."
        value={value}
      />
      <Button className="search_btn" type="submit">
        Search
      </Button>
    </div>
  );
};

export default Search;
















// import Button from "./Button";
// import { useState } from "react";
// import { useGetActivityByInputQuery } from "../../data/activityApi";
// import Activity from "../combined_components/Activity";

// const Search = props => {
//   const { className, name, value } = props;
//   const [input, setInput] = useState("");
//   const [selectedActivityId, setSelectedActivityId] = useState(undefined);
//   // const [valueToSearch, setValueToSearch] = useState("")
//   const [data, isLoading, isError] = useGetActivityByInputQuery(input);

//   return (
//     <>
//     <div className="search_container">
//       {/* <form action="" onSubmit={(e) => {
//         e.preventDefault();
//         setValueToSearch(input);
//         setInput("");
//       }}> */}
//         <input
//           className={className}
//           type="text"
//           name={name}
//           placeholder="Search....."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//       {/* </form> */}
//       <Button className="search_btn" type="submit">
//         Search
//       </Button>
//       {isError && <p>Error !</p>}
//       {isLoading && <p>Loading.......</p>}
//       {data.length > 0 && (
//         <>
//           <h2> Results based on your search: {valueTosearch}</h2>
//           <ul>
//           {data.map(({ activity, act_id }) => (
//             <li key={act_id}>{activity}</li>
//           ))}
//           </ul>
//         </>
//       )}
//       </div>
//     </>
//   );
// };

// export default Search;

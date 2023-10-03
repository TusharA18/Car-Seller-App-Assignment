import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const Navbar = ({ text, setText }) => {
   return (
      <div className="fixed bg-[#f1f4fb] h-[4rem] w-[85%] top-1 left-[7.5%] border border-white backdrop: rounded-xl shadow-lg flex items-center space-x-5">
         <div className="flex items-center bg-white px-4 py-1 ml-5 rounded-xl  border border-[#edf1f6]">
            <input
               className="bg-transparent w-56 outline-none font-medium"
               type="text"
               placeholder="Search..."
               value={text}
               onChange={(e) => setText(e.target.value)}
            />
            <SearchIcon className="text-gray-400" />
         </div>
         <div className="flex space-x-6">
            <div className="flex items-center">
               Relevance{" "}
               <img
                  className="w-2 h-2 ml-1"
                  src="/images/arrow-down.png"
                  alt=""
               />{" "}
            </div>
            <div className="flex items-center">
               All brands{" "}
               <img
                  className="w-2 h-2 ml-1"
                  src="/images/arrow-down.png"
                  alt=""
               />{" "}
            </div>
         </div>
      </div>
   );
};

Navbar.propTypes = {
   text: PropTypes.string,
   setText: PropTypes.func,
};

export default Navbar;

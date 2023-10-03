import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

const PageNumber = ({ pageNo, string }) => {
   const { id } = useParams();

   const navigate = useNavigate();

   const handleClick = () => {
      if (string) {
         navigate("/page/5");
      }

      if (pageNo && pageNo >= 0 && pageNo <= 10) {
         navigate(`/page/${pageNo}`);
      }
   };

   return (
      <div
         onClick={handleClick}
         id="pageNoDiv"
         className={`w-8 h-8 flex items-center justify-center ${
            id == pageNo ? "bg-[#ccd3dc] text-black" : "bg-white"
         } border border-[#edf0f5] cursor-pointer rounded-lg shadow-xl`}
      >
         <p>{pageNo ? pageNo : string}</p>
      </div>
   );
};

PageNumber.propTypes = {
   pageNo: PropTypes.number,
   string: PropTypes.string,
};

export default PageNumber;

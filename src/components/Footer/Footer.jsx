import { useNavigate, useParams } from "react-router-dom";
import PageNumber from "./PageNumber";
import { useSelector } from "react-redux";
import { selectData, selectTotalData } from "../../redux/page/pageSlice";

const Footer = () => {
   const data = useSelector(selectData);
   const totalData = useSelector(selectTotalData);

   let { id } = useParams();

   id = parseInt(id);

   const navigate = useNavigate();

   const handlePrevClick = () => {
      if (id - 1 >= 1) {
         navigate(`/page/${id - 1}`);
      }
   };

   const handleNextClick = () => {
      if (id + 1 <= 10) {
         navigate(`/page/${id + 1}`);
      }
   };

   return (
      <div className="fixed bottom-2 bg-[#eef2f7] h-[4rem] w-[85%] left-[7.5%] border border-white rounded-xl shadow-xl space-x-5 p-5 flex items-center justify-between">
         <div>
            {id * 6 <= totalData.length
               ? 6 * (id - 1) + data.length
               : totalData.length}{" "}
            from {totalData.length}
         </div>
         <div className="flex space-x-3">
            <div
               onClick={handlePrevClick}
               className="w-8 h-8 flex items-center justify-center bg-white p-2 rounded-lg shadow-xl border border-[#edf0f5] cursor-pointer"
            >
               <img className="w-4" src="/images/left-arrow.png" alt="" />
            </div>
            <div className="flex space-x-2">
               {id <= 4 ? (
                  <>
                     <PageNumber pageNo={1} />
                     <PageNumber pageNo={2} />
                     <PageNumber pageNo={3} />
                     <PageNumber pageNo={4} />
                     <PageNumber string={"..."} />
                     <PageNumber pageNo={9} />
                     <PageNumber pageNo={10} />
                  </>
               ) : (
                  <>
                     <PageNumber pageNo={4} />
                     <PageNumber pageNo={5} />
                     <PageNumber pageNo={6} />
                     <PageNumber pageNo={7} />
                     <PageNumber pageNo={8} />
                     <PageNumber pageNo={9} />
                     <PageNumber pageNo={10} />
                  </>
               )}
            </div>
            <div
               onClick={handleNextClick}
               className="w-8 h-8 flex items-center justify-center bg-white p-2 rounded-lg shadow-xl border border-[#edf0f5] cursor-pointer"
            >
               <img className="w-4" src="/images/right-arrow.png" alt="" />
            </div>
         </div>
      </div>
   );
};

export default Footer;

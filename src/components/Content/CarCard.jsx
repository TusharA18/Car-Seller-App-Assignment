import PropTypes from "prop-types";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SpeedIcon from "@mui/icons-material/Speed";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CarCard = ({ data }) => {
   return (
      <div className="p-2 w-[23rem] h-[26rem] border border-white rounded-xl mx-auto shadow-xl flex flex-col items-center">
         <div>
            <img className="w-96 h-48 rounded-xl" src={data?.imageSrc} alt="" />
         </div>
         <div className="flex justify-between items-center w-full pt-5 px-2">
            <h1 className="text-2xl text-[#494a62]">{data?.name}</h1>
            <div className="border border-blue-500 rounded-xl px-1 border-dashed">
               {data?.year}
            </div>
         </div>
         <div className="px-5 flex flex-col w-full pt-5 space-y-3">
            <div className="flex item-center">
               <div className="flex space-x-2 w-40">
                  <PeopleAltIcon className="text-blue-500" />
                  <p>{data?.peopleCount} people</p>
               </div>
               <div className="flex space-x-2">
                  <LocalGasStationIcon className="text-blue-500" />
                  <p>{data?.gasType}</p>
               </div>
            </div>
            <div className="flex item-center">
               <div className="flex space-x-2 w-40">
                  <SpeedIcon className="text-blue-500" />
                  <p>{data?.range}km / 1-liter</p>
               </div>
               <div className="flex space-x-2">
                  <img
                     className="w-6 mix-blend-multiply"
                     src="/images/wheel.png"
                     alt=""
                  />
                  <p>{data?.type}</p>
               </div>
            </div>
         </div>

         <div className="w-full px-3 pt-5 space-y-3">
            <hr className="h-[1.2px] bg-gray-300" />
            <div className="flex justify-between">
               <div className="text-[#373750]">
                  <p>
                     <span className="text-2xl">${data?.price}</span> / month
                  </p>
               </div>
               <div className="flex space-x-3 items-center">
                  <div className="bg-blue-200 px-2 py-1 rounded-xl">
                     <FavoriteBorderIcon className="text-blue-500" />
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-[7px] rounded-xl">
                     Rent now
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

CarCard.propTypes = {
   data: PropTypes.object,
};

export default CarCard;

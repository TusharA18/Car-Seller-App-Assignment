import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import CarCard from "./CarCard";
import { useNavigate, useParams } from "react-router-dom";
import jsonData from "../../data.json";
import { useDispatch, useSelector } from "react-redux";
import { selectData, setData, setTotalData } from "../../redux/page/pageSlice";

const Home = () => {
   const data = useSelector(selectData);

   const [text, setText] = useState("");

   const { id } = useParams();

   const dispatch = useDispatch();

   const navigate = useNavigate();

   useEffect(() => {
      let data = jsonData.filter((data) =>
         data.name.toLowerCase().includes(text.toLowerCase())
      );

      dispatch(setTotalData(data));

      let tempData = [];

      let i = 6 * (id - 1);

      for (; i < id * 6 && i < data.length; i++) {
         tempData.push(data[i]);
      }

      dispatch(setData(tempData));
   }, [id, navigate, text]); // eslint-disable-line

   return (
      <div className="px-20">
         <Navbar text={text} setText={setText} />
         {data.length !== 0 ? (
            <div className="py-12 m-10 grid grid-cols-3 gap-5 justify-between">
               {data.map((d, index) => (
                  <CarCard key={index} data={d} />
               ))}
            </div>
         ) : (
            <div className="min-h-screen flex items-center justify-center">
               <h1 className="text-center text-4xl">
                  Sorry, no car is available at this moment.
               </h1>
            </div>
         )}

         <Footer len={data.length} />
      </div>
   );
};

export default Home;

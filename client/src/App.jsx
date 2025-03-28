import './App.css';
import { debounce } from 'lodash';
import axios from 'axios';
import { useState, useEffect } from 'react';

/* 
เมื่อสร้าง ui c]h;
-declare async function AND 
    -set debuosing 1500 misec
    -try get data server , set data server to array , set data to useState varieble ,log complete
    -catch log error
-declare useState array and input
-declare usEffect to execute first and useStste input rerender
-map opject from data
-set onChaange to input 
-declare function to setInput

fetch(`https://demo.dataverse.org/api/search?q=${value}`)
*/
function App() {
   const [dataServer, Setdata] = useState([]);
   const [inputSearch, setInputSearch] = useState('');

   const getData = async (keywords) => {
      try {
         const result = await axios.get(
            `http://localhost:4001/trips?keywords=${keywords ? keywords : ' '}`
         );
         console.log('result: ', result.data.data);
         Setdata(result.data.data);
         console.log('getData complete');
      } catch (error) {
         console.log('error getData: ', error);
      }
   };

   useEffect(() => {
      getData();
   }, []);
   useEffect(
      debounce(() => {
         getData(inputSearch);
      }, 1500),
      [inputSearch]
   );
   console.log('inputSearch: ', inputSearch);
   console.log('data: ', dataServer);

   return (
      <main className="App bg-gray-100 p-6 flex flex-col items-center  ">
         <h1 className=" text-6xl text-sky-500 ">เที่ยวไหนดี</h1>
         <label
            htmlFor="searchTravel"
            className="m-4  max-w-7xl w-[80%]  flex flex-col items-start gap-1   "
         >
            <h2 className="text-[1.5rem] font-normal ">
               ค้นหาที่เที่ยว แนะนำเลยมี {dataServer.length} ที่ 🛫
            </h2>
            <input
               id="searchTravel"
               type="text"
               className="m-2 p-2 w-full text-[1.5rem] text-black border-b-1  border-gray-400 placeholder:text-gray-500 placeholder:text-center"
               placeholder="หาที่เที่ยวแล้วไปกัน"
               value={inputSearch}
               onChange={(event) => setInputSearch(event.target.value)}
            />
         </label>
         <section className="max-w-7xl w-[90%] mx-auto m-6 space-y-6 flex flex-col items-center ">
            {dataServer.map((dataTravel) => {
               return (
                  <div
                     className="p-4 bg-white rounded-lg shadow-md flex gap-4 overflow-hidden"
                     key={dataTravel.eid}
                  >
                     <img
                        src={dataTravel.photos[0]}
                        alt=""
                        className="w-[30%] object-cover object-center rounded-3xl"
                     />
                     <div className="flex-1 w-[70%]">
                        <h2
                           className="text-xl font-semibold cursor-pointer"
                           onClick={() => {
                              window.location.href = dataTravel.url;
                           }}
                        >
                           {dataTravel.title}
                        </h2>
                        <p
                           className={`text-lg max-w-full mt-1 w-full text-gray-600 overflow-hidden `}
                        >
                           {dataTravel.description.length > 100
                              ? dataTravel.description.slice(0, 100) + '...'
                              : dataTravel}
                        </p>
                        <a
                           href={dataTravel.url}
                           className="mt-2 text-blue-500 underline text-lg "
                        >
                           อ่านต่อ
                        </a>
                        <div className="mt-2 flex flex-wrap gap-2 text-lg text-gray-600">
                           <span className="">หมวด</span>
                           {dataTravel.tags.map((tagTravel) => {
                              return (
                                 <span
                                    className="underline cursor-pointer"
                                    onClick={() => {
                                       setInputSearch((inputData) => {
                                          let result = '';
                                          inputData
                                             ? (result =
                                                  inputData + ' ' + tagTravel)
                                             : (result = tagTravel);
                                          return result;
                                       });
                                    }}
                                 >
                                    {tagTravel}
                                 </span>
                              );
                           })}
                        </div>
                        <figure className="mt-3 flex gap-2">
                           {dataTravel.photos.slice(1).map((photoTarvel) => {
                              return (
                                 <img
                                    src={photoTarvel}
                                    alt=""
                                    className="w-16 h-16 rounded-md  object-cover object-center "
                                 />
                              );
                           })}
                           <a
                              // href={dataTravel.url}
                              className="ml-auto w-8 h-8 p-2 rounded-full border-2 border-sky-400 text-sky-400 hover:border-sky-600  hover:bg-sky-100 cursor-pointer object-center flex justify-center items-center"
                              onClick={async () => {
                                 navigator.clipboard.writeText(dataTravel.url);
                              }}
                           >
                              🔗
                           </a>
                        </figure>
                     </div>
                  </div>
               );
            })}
         </section>
      </main>
   );
}

export default App;

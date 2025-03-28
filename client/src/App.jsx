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
                `http://localhost:4001/trips?keywords=${
                    keywords ? keywords : ' '
                }`
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

    // const text =
    //     'เริ่มเที่ยวเชิงอนุรักษ์แบบชิลล์ๆ กันที่แรก ที่ศูนย์อนุรักษ์ป่าชายเลน คลองโคน ด้วยกิจกรรมอัดแน่น ทั้งการล่องเรือชมป่าชายเลน รวมสร้างแหล่งอาหารให้สัตว์ทะเลด้วยการปลูกต้นแสม ต้นลำพู สัมผัสวิถีชีวิตชาวประมงในการเลี้ยงหอยนางรม และหอยแมลงภู่ แถมด้วยไฮไลท์น่ารักๆ นั่นก็คือ เจ้าลิงแสมที่ออกมาวิ่งเล่น ต้อนรับนักท่องเที่ยวชมความสมบูรณ์ของระบบนิเวศน์ที่นี่';

    return (
        <main className="App bg-gray-100 p-6 flex flex-col items-center  ">
            <h1 className=" text-6xl text-sky-500 ">เที่ยวไหนดี</h1>
            <label
                htmlFor="searchTravel"
                className="m-4  max-w-7xl w-[80%]  flex flex-col items-start gap-1   "
            >
                <h2 className="text-[1.5rem] font-normal ">ค้นหาที่เที่ยว</h2>
                <input
                    id="searchTravel"
                    type="text"
                    className="m-2 p-2 w-full text-[1.5rem] text-black border-b-1  border-gray-400 placeholder:text-gray-500 placeholder:text-center"
                    placeholder="หาที่เที่ยวแล้วไปกัน"
                    value={inputSearch}
                    onChange={(event) => setInputSearch(event.target.value)}
                />
            </label>
            <section className="max-w-7xl w-[90%] mx-auto m-6 space-y-6 flex flex-col items-center overflow-hidden">
                {dataServer ? (
                    dataServer.map((dataTravel) => {
                        return (
                            <div
                                className="p-4 bg-white rounded-lg shadow-md flex gap-4 "
                                key={dataTravel.eid}
                            >
                                <img
                                    src={dataTravel.photos[0]}
                                    alt=""
                                    className="w-1/3 object-cover object-center rounded-3xl"
                                />
                                <div className="flex-1 overflow-hidden ">
                                    <h2 className="text-xl font-semibold  ">
                                        {dataTravel.title}
                                    </h2>
                                    <p
                                        className={`text-lg  mt-1 w-full text-gray-600  `}
                                    >
                                        {dataTravel.description}
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
                                                <span className="underline">
                                                    {tagTravel}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <figure className="mt-3 flex gap-2">
                                        {dataTravel.photos
                                            .slice(1)
                                            .map((photoTarvel) => {
                                                return (
                                                    <img
                                                        src={photoTarvel}
                                                        alt=""
                                                        className="w-16 h-16 rounded-md  object-cover object-center "
                                                    />
                                                );
                                            })}
                                        <a
                                            href={dataTravel.url}
                                            className="ml-auto w-8 h-8 p-2 rounded-full border-2 border-sky-400 text-sky-400 hover:border-sky-600  hover:bg-sky-100 cursor-pointer object-center flex justify-center items-center"
                                        >
                                            🔗
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h1>...londing</h1>
                )}
            </section>
        </main>
    );
}

export default App;

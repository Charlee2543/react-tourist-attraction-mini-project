import './App.css';

function App() {
    const text =
        'เริ่มเที่ยวเชิงอนุรักษ์แบบชิลล์ๆ กันที่แรก ที่ศูนย์อนุรักษ์ป่าชายเลน คลองโคน ด้วยกิจกรรมอัดแน่น ทั้งการล่องเรือชมป่าชายเลน รวมสร้างแหล่งอาหารให้สัตว์ทะเลด้วยการปลูกต้นแสม ต้นลำพู สัมผัสวิถีชีวิตชาวประมงในการเลี้ยงหอยนางรม และหอยแมลงภู่ แถมด้วยไฮไลท์น่ารักๆ นั่นก็คือ เจ้าลิงแสมที่ออกมาวิ่งเล่น ต้อนรับนักท่องเที่ยวชมความสมบูรณ์ของระบบนิเวศน์ที่นี่';

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
                />
            </label>
            <section className="max-w-7xl w-[90%] mx-auto m-6 space-y-6 overflow-hidden">
                <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 ">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
                        alt="เกาะช้าง"
                        className="w-1/3 object-cover object-center rounded-3xl"
                    />
                    <div className="flex-1 overflow-hidden ">
                        <h2 className="text-xl font-semibold  ">
                            คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี?
                            อ่านจบครบที่เดียว!
                        </h2>
                        <p
                            className={`text-lg  mt-1 w-full text-gray-600 truncate `}
                        >
                            {/* {text.length > 100
                                ? text.slice(0, 100) + '...'
                                : text} */}
                            {text}
                        </p>
                        <a
                            href=""
                            className="mt-2 text-blue-500 underline text-lg "
                        >
                            อ่านต่อ
                        </a>
                        <div className="mt-2 flex flex-wrap gap-2 text-lg text-gray-600">
                            <span className="">หมวด</span>
                            <span className="underline">เกาะ</span>
                            <span className="underline">ทะเล</span>
                            <span className="underline">อุทยาน</span>
                            <span className="underline">ธรรมชาติ</span>
                            <span className="underline">ท่องเที่ยว</span>
                        </div>
                        <figure className="mt-3 flex gap-2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
                                alt=""
                                className="w-16 h-16 rounded-md  object-cover object-center "
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
                                alt=""
                                className="w-16 h-16 rounded-md object-cover object-center "
                            />
                            <a
                                href=""
                                className="ml-auto w-8 h-8 p-2 rounded-full border-2 border-sky-400 text-sky-400 hover:border-sky-600  hover:bg-sky-100 cursor-pointer object-center flex justify-center items-center"
                            >
                                🔗
                            </a>
                        </figure>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;

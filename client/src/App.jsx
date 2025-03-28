import './App.css';

function App() {
    return (
        <main className="App bg-gray-100 p-6">
            <h1>เที่ยวไหนดี</h1>
            <label htmlFor="searchTravel">
                <h2>ค้นหาที่เที่ยว</h2>
                <input id="searchTravel" type="text" className="" />
            </label>
            <section className="max-w-4xl mx-auto space-y-6">
                <div className="p-4 bg-white rounded-lg shadow-md flex gap-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
                        alt="เกาะช้าง"
                        className="w-1/3 rounded-lg"
                    />
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">
                            คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี?
                            อ่านจบครบที่เดียว!
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            วันนี้ขอพาไปเที่ยวเกาะช้างกัน พร้อมที่พักกิจกรรมต่าง
                            ๆ เช่น เที่ยวป่าชายเลน...
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2 text-sm text-blue-500">
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
                                className="w-16 h-16 rounded-md object-cover"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
                                alt=""
                                className="w-16 h-16 rounded-md object-cover"
                            />
                            <button className="ml-auto p-2 border rounded-full hover:bg-gray-200">
                                🔗
                            </button>
                        </figure>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;

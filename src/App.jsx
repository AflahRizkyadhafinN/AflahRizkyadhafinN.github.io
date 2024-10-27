import pasfoto from "./assets/pasFoto.webp";
import flutterIcon from "./assets/flutterIcon.webp";
import reactIcon from "./assets/reactIcon.webp";
import { MdOutlinePhoneAndroid, MdOutlineWebAsset } from "react-icons/md";
import cover1 from "./assets/cover1.webp";

function App() {
  return (
    <>
      <div className="pt-[25px] pb-[50px] m-0 w-screen h-screen overflow-y-scroll bg-gradient-to-br from-blue-500 to-blue-200">
        <div className="flex p-10 rounded-2xl shadow-2xl shadow-grey-400 w-max justify-self-center bg-gray-100">
          <img src={pasfoto} alt="" width={250} className="rounded-lg" />
          <div className="ml-[20px]">
            <p style={{ color: "grey", fontSize: 20, fontWeight: 600 }}>
              Hallo Semua, Saya
            </p>
            <h1
              style={{
                color: "black",
                fontSize: 50,
                fontWeight: 800,
                textAlign: "left",
              }}
            >
              Aflah Rizkyadhafin <tr />
              Nurfikri
            </h1>
            <h1 className="text-[25px] font-semibold text-left text-gray-500">
              S1 Teknik Informatika
            </h1>
            <p
              className="w-[500px] mt-[20px]"
              style={{ color: "grey", fontSize: 20, fontWeight: 400 }}
            >
              "Saya Aflah Rizkyadhafin Nurfikri Mahasiswa S1 Teknik Informatika
              Tahun 2024. Selama 2 tahun terakhir, pengembangan aplikasi mobile
              menjadi fokus utama saya."
            </p>
          </div>
        </div>
        <div className="flex justify-center justify-self-center bg-gray-100 mt-[20px] mx-[100px] rounded-xl w-max px-[200px] py-[10px] shadow-gray-400 shadow-lg">
          <div className=" w-max shadow-gray-500 shadow-inner p-[10px] mr-[20px]">
            <img src={flutterIcon} alt="" width={150} />
          </div>
          <div className=" w-max shadow-gray-500 shadow-inner p-[10px]">
            <img src={reactIcon} alt="" width={150} />
          </div>
        </div>
        <div className="flex justify-center justify-self-center mt-[20px]">
          <div className="bg-gray-100 w-[200px] p-6 rounded-xl shadow-gray-400 shadow-lg">
            <div className="bg-blue-300 w-max rounded-full p-[5px]">
              <MdOutlinePhoneAndroid size={30} />
            </div>
            <h2 className="mt-3 font-bold text-[15px]">Mobile Development</h2>
            <p className="mt-5 font-normal text-[15px]">
              Mengembangkan aplikasi mobile dengan menggunakan Flutter
            </p>
          </div>
          <div className="bg-gray-100 w-[200px] p-6 rounded-xl shadow-gray-400 shadow-lg ml-[20px]">
            <div className="bg-blue-300 w-max rounded-full p-[5px]">
              <MdOutlineWebAsset size={30} />
            </div>
            <h2 className="mt-3 font-bold text-[15px]">Web Development</h2>
            <p className="mt-5 font-normal text-[15px]">
              Mengembangkan Web dengan menggunakan React
            </p>
          </div>
        </div>
        <div className="flex justify-center justify-self-center mt-[20px] bg-gray-100 p-6 rounded-xl shadow-gray-400 shadow-lg ml-[20px]">
          <div>
            <h1 className="font-bold text-[20px]">My Portofolio : </h1>
            <button
              className="bg-white w-[300px] p-6 rounded-lg shadow-gray-500 shadow-inner mt-2"
              onClick={() => {
                window.location.href =
                  "https://github.com/AflahRizkyadhafinN/ui_aplikasi_kasir";
              }}
            >
              <h2 className="font-bold text-[15px] text-blue-600">
                Mobile Application
              </h2>
              <h2 className="font-semibold text-[15px] text-black">
                Aplikasi Kasir
              </h2>
              <img
                src={cover1}
                className="rounded-lg my-2 shadow-lg shadow-gray-300 border border-gray-400"
                width={300}
              />
              <p>Tampilan aplikasi jual beli untuk dipakai oleh UMKM</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

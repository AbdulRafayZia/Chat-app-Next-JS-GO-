export default function Layout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <>
      <div className="flex flex-row overflow-y-hidden">
        <div
          className="flex justify-center  w-[60%] h-screen"
          style={{ background: "var(--background)" }}
        >
          {/* <div className="flex justify-center  items-center">
                    <h1 className=" text-4xl text-white font-bold  ">Chat App</h1>
                    </div> */}
          <div className=" flex flex-col justify-center ">
            <h1 className=" text-[40px] text-white font-bold font-sans  ">
              Chat App
            </h1>
            <p className="text-[18px] text-white ">
              The Secure chat with many features
            </p>
          </div>

          <div className="  flex flex-row  items-end">
            {/* <div className="  w-[557px] h-[557px] border border-[#0575E6] rounded-[557px] ml-[-1000px] mb-[-278px]"></div> */}
            <div className="  w-[557px] h-[557px] border border-[#0575E6] rounded-[557px] ml-[-1000px] mb-[-320px]"></div>
          </div>
        </div>
        
        {children}
       
      </div>
    </>
  );
}

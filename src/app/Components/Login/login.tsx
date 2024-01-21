export default function Login() {
  return (
    <>
      <div className="flex flex-row overflow-y-hidden" >
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
        <div className="flex justify-center items-center w-[40%]">
            <div className="flex flex-col gap-4 w-[50%] bg-slate-50 p-12 rounded-lg" >
                <h1 className="text-[26px] font-bold  text-[#333333] font-sans">Hello!</h1>
                <p className="text-[18px] text-[#333333]">Sign Up to Get Started</p>
                <div className="flex gap-5 flex-col">
                <input type="text" className="border focus:border focus:border-sky-600 w-[307px] px-[26px] py-[18px] rounded-[30px]"  placeholder="Full Name" name="" id="" />
                <input type="email" className="border w-[307px] px-[26px] py-[18px] rounded-[30px]" placeholder="Email Address" name="" id="" />
                <input type="password" className="border w-[307px] px-[26px] py-[18px] rounded-[30px]" placeholder="Password" name="" id="" />
                <button className="border w-[307px] px-[26px] py-[18px] rounded-[30px] text-white" style={{ background: "var(--background)" }}> Register</button>
                </div>
                    
            </div>
        </div>
      </div>
    </>
  );
}

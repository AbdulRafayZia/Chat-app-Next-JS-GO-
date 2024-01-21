import Link from "next/link";
import Layout from "../layout/layout";

export default function Register() {
    return (
      <>
        {/* <div className="flex flex-row overflow-y-hidden" > */}
        <Layout>
         
          <div className="flex justify-center items-center w-[40%]">
              <div className="flex flex-col gap-4 w-[50%] bg-slate-100 p-12 rounded-2xl" >
                  <h1 className="text-[26px] font-bold  text-[#333333] font-sans">Hello!</h1>
                  <p className="text-[18px] text-[#333333]">Sign Up to Get Started</p>
                  <div className="flex gap-5 flex-col">
                  <input type="text" className="border border-[#0473E3] focus:border focus:border-sky-600 w-[307px] px-[26px] py-[18px] rounded-[30px]"  placeholder="Full Name" name="" id="" />
                  <input type="email" className="border border-[#0473E3]  w-[307px] px-[26px] py-[18px] rounded-[30px]" placeholder="Email Address" name="" id="" />
                  <input type="password" className="border border-[#0473E3]  w-[307px] px-[26px] py-[18px] rounded-[30px]" placeholder="Password" name="" id="" />
                  <button className="border w-[307px] px-[26px] py-[18px] rounded-[30px] text-white" style={{ background: "var(--background)" }}> Register</button>
                  </div>
                  <div className="flex justify-centern items-center" >
                <p className=" text-gray-400 inline text-sm ml-10">aleady have an account  </p>
                <Link  className=" inline text-blue-500 ml-2" href={"/login"}>Sign in</Link>
                </div>
                      
              </div>
          </div>
          </Layout>
        {/* </div> */}
      </>
    );
  }
  
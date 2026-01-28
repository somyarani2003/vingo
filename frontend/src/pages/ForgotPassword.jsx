import axios from "axios";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [otp,setOtp] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [confirmPassword,setConfirmPassword]=useState("")

  const handleSendOtp = async ()=>{
    try {
      const result = await axios.post(`${serverUrl}/api/auth/send-otp`,
        {email},{withCredentials:true})
        console.log(result)
        setStep(2)
        
    } catch (error) {
      console.log(error);
      
    }
  }
   const handleVerifyOtp = async ()=>{
    try {
      const result = await axios.post(`${serverUrl}/api/auth/verify-otp`,
        {email,otp},{withCredentials:true})
        console.log(result)
        setStep(3)
        
    } catch (error) {
      console.log(error);
      
    }
  }
   const handleResetPassword = async ()=>{
    if(newPassword != confirmPassword ) {
    alert("Passwords do not match");
    return;
  }
    try {
      const result = await axios.post(`${serverUrl}/api/auth/reset-password`,
        { email,newPassword},{withCredentials:true})
        console.log(result)
        navigate("/signin")
        
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="flex w-full items-center justify-center p-4 min-h-screen bg-[#fff9f6]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        
        <div className="flex items-center gap-4 mb-6">
          <IoArrowBackOutline
            size={20}
            className="text-[#ff4d2d] cursor-pointer"
            onClick={() => navigate("/signin")}
          />
          <h1 className="text-2xl font-bold text-[#ff4d2d]">
            Forgot Password
          </h1>
        </div>

        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ff4d2d]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

           <button className={`w-full font-semibold 
        rounded-lg py-2 transition cursor-pointer duration-200
         bg-[#ff4d2d] text-white hover:bg-[#e64323] `} onClick={handleSendOtp}
         
       >Send Otp</button>
          </>
        )}

{step === 2 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                OTP
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ff4d2d]"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

           <button className={`w-full font-semibold 
        rounded-lg py-2 transition cursor-pointer duration-200
         bg-[#ff4d2d] text-white hover:bg-[#e64323] `} onClick={handleVerifyOtp}
         
       >Verify</button>
          </>
        )}
       {step === 3 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ff4d2d]"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#ff4d2d]"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

           <button className={`w-full font-semibold 
        rounded-lg py-2 transition cursor-pointer duration-200
         bg-[#ff4d2d] text-white hover:bg-[#e64323] `} onClick={handleResetPassword}
         
       >Reset Password</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;

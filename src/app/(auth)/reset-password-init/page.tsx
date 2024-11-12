"use client";
import AppleButton from "@/app/component/button/AppleButton";
import GoogleButton from "@/app/component/button/GoogleButton";
import Input from "@/app/component/input/Input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ResetPasswordInit = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmedNewPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      if (result?.success) {
        setSuccess(true);
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSuccess(true); //for debug
    setSubmitting(false);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 sm:grid-cols-2 font-dmSans">
      <div className="flex items-center justify-center flex-col xl:px-12 px-4 my-8">
        {!success ? (
          <>
            <h1 className="2xl:text-[40px] mt-6 text-[30px] font-gilory text-center mb-2">
              Reset Password
            </h1>
            <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-8 text-center">
              Enter your new password below to complete the reset process 
            </p>
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 w-full px-8 mb-4 grid-cols-2"
            >
              <div className="col-span-2">
                <div className="mb-1">New Password*</div>
                <Input
                  name="newPassword"
                  required
                  placeholder="Enter New Password"
                  onChange={handleChange}
                  value={formData.newPassword}
                />
              </div>
              <div className="col-span-2">
                <div className="mb-1">Confirm Password*</div>
                <Input
                  name="confirmedNewPassword"
                  required
                  placeholder="Enter Confirmed Password"
                  onChange={handleChange}
                  value={formData.confirmedNewPassword}
                />
              </div>
              <button
                type="submit"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "21.33px",
                }}
                className="col-span-2 mx-auto w-full text-center py-[16px] bg-button bg-[#000000] text-white rounded-full font-medium transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans"
              >
                {!submitting ? "Reset Password" : "Please Wait..."}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center p-8">
             <Image
                src="/icon/upload-success.png"
                alt="dummy"
                height={100}
                width={100}
                className="mx-auto"
            />
            <h1 className="2xl:text-[40px] mt-6 text-[30px] font-gilory text-center mb-2">
                Reset Completed!
            </h1>
            <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-8 text-center">
            All done! Your password has been updated successfully.
            </p>
            <button
                type="submit"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "21.33px",
                }}
                onClick={() => router.push("/login")}
                className="col-span-2 mx-auto w-full text-center py-[16px] bg-button bg-[#000000] text-white rounded-full font-medium transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans"
              >
                Return to Login 
            </button>
           
          </div>
        )}
      </div>
      <div
        className="hidden sm:flex w-full justify-center items-center px-8 h-[50vh] sm:h-full mb-4"
        style={{
          backgroundImage: `url(/bgImage/login-hero.png)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background image section */}
      </div>
    </div>
  );
};

export default ResetPasswordInit;

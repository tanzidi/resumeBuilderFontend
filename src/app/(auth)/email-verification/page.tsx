"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ResetPassword = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

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
        router.push("/");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 sm:grid-cols-2 font-dmSans">
      <div className="flex items-center justify-center flex-col xl:px-12 px-4 my-8">

        <Image
          src="/icon/send-email.png"
          alt="dummy"
          height={100}
          width={100}
          className="mx-auto"
        />

        <h1 className="2xl:text-[40px] mt-6 text-[30px] font-gilory text-center mb-2">
          Check Your Email
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-8 text-center">
            We’ve sent a password reset link to your email.
        </p>
        
        <p
          className="sm:text-[16px] text-[11px] sm:leading-[24px] leading-[18px] inline ms-2"
          style={{
            fontWeight: 400,
            textAlign: "center",
            color: "#5B5A66",
            marginBottom: "20px",
          }}
        >
          Did you receive the mail? If not, please {" "}
          <Link href="/reset-password" className="text-black font-semibold">
            Try Again
          </Link>
        </p>
        
      </div>
      <div
        className="w-full flex justify-center items-center px-8 h-[50vh] sm:h-full mb-4"
        style={{
          backgroundImage: `url(/bgImage/login-hero.png)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <Image
          src="/bgImage/login.png"
          alt="dummy"
          height={466.66}
          width={708}
          className="mx-auto"
        /> */}
      </div>
    </div>
  );
};

export default ResetPassword;

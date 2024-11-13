"use client";
import AppleButton from "@/app/component/button/AppleButton";
import GoogleButton from "@/app/component/button/GoogleButton";
import Input from "@/app/component/input/Input";
import config from "@/app/constant";
import { login } from "@/app/lib/redux/authSlice";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        config.versionOneApiBaseUrl + "/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result?.success && result?.data?.accessToken) {
        setError(null);
        dispatch(login(result?.data?.accessToken));
        router.push("/");
      } else {
        setError(result?.message);
        // add toast here
      }
    } catch (error) {
      setError("Something went wrong...");
    }

    setSubmitting(false);
  };
  return (
    <div className="grid min-h-screen grid-cols-1 sm:grid-cols-2 font-dmSans">
      <div className="flex items-center justify-center flex-col xl:px-12 px-4 my-8">
        <Link href="/">
          <Image
            src="/icon/logo_black.png"
            alt="dummy"
            height={50}
            width={50}
            className="w-28"
          />
        </Link>
        <h1 className="2xl:text-[40px] mt-6 text-[30px] font-gilory text-center mb-2">
          Login to your account
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-8 text-center">
          Access your account securely and manage your preferences with ease
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 w-full px-8 mb-4 grid-cols-2"
        >
          <div className="col-span-2">
            <div className="mb-1">Email*</div>
            <Input
              name="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-1">Password*</div>
            <Input
              name="password"
              required
              placeholder="Enter Password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="col-span-2">
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <div className="col-span-2 flex flex-cols justify-between items-center">
            <div>
              <input type="checkbox" name="" id="" />
              <p
                className="sm:text-[16px] text-[11px] sm:leading-[24px] leading-[18px] inline ms-2"
                style={{
                  fontWeight: 400,
                  textAlign: "center",
                  color: "#5B5A66",
                  marginBottom: "20px",
                }}
              >
                Remember Me
              </p>
            </div>
            <Link
              href="/reset-password"
              className="text-[#4929FF] sm:text-md text-xs"
            >
              Forgot Password?
            </Link>
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
            {!submitting ? "Login" : "Please Wail..."}
          </button>
        </form>
        <p
          className="sm:text-[16px] text-[11px] sm:leading-[24px] leading-[18px] inline ms-2"
          style={{
            fontWeight: 400,
            textAlign: "center",
            color: "#5B5A66",
            marginBottom: "20px",
          }}
        >
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-black font-semibold">
            Create an Account
          </Link>
        </p>
        <div className="flex gap-4 w-full px-8 justify-center items-center">
          <div className="border-[#E1E4F5] border h-[2px] flex-auto"></div>
          <p className="w-fit text-sm text-[#5B5A66]">or connect with</p>
          <div className="border-[#E1E4F5] border h-[2px] flex-auto"></div>
        </div>
        <button className="w-full px-8 mt-4">
          <GoogleButton text="Sign Up with Google" />
        </button>
        <button className="w-full px-8 mt-3">
          <AppleButton text="Sign Up with Apple" />
        </button>
      </div>
      <div
        className="hidden sm:flex w-full justify-center items-center px-8 h-[50vh] sm:h-full mb-4"
        style={{
          backgroundImage: `url(/bgImage/login-hero.png)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Login;

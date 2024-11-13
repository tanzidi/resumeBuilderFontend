"use client";
import AppleButton from "@/app/component/button/AppleButton";
import GoogleButton from "@/app/component/button/GoogleButton";
import Input from "@/app/component/input/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import config from "@/app/constant";
import { login } from "@/app/lib/redux/authSlice";

const SignUp = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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
        config.versionOneApiBaseUrl + "/auth/sign-up",
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
        <h1 className="2xl:text-[40px] mt--2 text-[30px] font-gilory text-center mb-2">
          Sign up for an account
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-8 text-center">
          Create your account and start exploring all our features in minutes
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 w-full px-8 mb-4 grid-cols-2"
        >
          <div className="col-span-2">
            <div className="mb-1">First Name*</div>
            <Input
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-1">Last Name*</div>
            <Input
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-1">Email*</div>
            <Input
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-1">Phone Number*</div>
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              value={formData.phoneNumber}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-1">Password*</div>
            <Input
              name="password"
              placeholder="Enter Password"
              required
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="col-span-2">
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <div className="col-span-2 inline">
            <input type="checkbox" name="" id="" required />
            <p
              className="sm:text-[16px] text-[11px] sm:leading-[24px] leading-[18px] inline ms-2"
              style={{
                fontWeight: 400,
                textAlign: "center",
                color: "#5B5A66",
                marginBottom: "20px",
              }}
            >
              By creating an account, you agreeing to our{" "}
              <Link href="/privacy" className="text-black font-bold">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-black font-bold">
                Terms of Use.
              </Link>
            </p>
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
            {!submitting ? "Signup" : "Please Wail..."}
          </button>
        </form>{" "}
        <p
          className="sm:text-[16px] text-[11px] sm:leading-[24px] leading-[18px] inline ms-2"
          style={{
            fontWeight: 400,
            textAlign: "center",
            color: "#5B5A66",
            marginBottom: "20px",
          }}
        >
          Already have an account?{" "}
          <Link href="/login" className="text-black font-semibold">
            Login
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

export default SignUp;

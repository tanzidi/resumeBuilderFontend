"use client";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-center text-white font-dmSans px-5 lg:px-[94px] 2xl:px-[140px] sm:pt-24 pt-10 pb-10">
      <div className="gap-10 grid sm:grid-cols-5 grid-cols-1">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              className="h-[30px] w-fit"
              src="/icon/logo.png"
              alt="dummy"
              height={300}
              width={300}
            />
          </Link>
          <p className="text-start footer-text">
            Automatically apply on 1000&apos;s jobs in a single click.
          </p>
          <div className="sm:my-6 my-0">
            <p
              className="text-start footer-text"
              style={{
                color: "white",
              }}
            >
              Follow Us
            </p>
            <div className="flex justify-between items-center mt-4 w-[130px]">
              <a href="https://www.facebook.com/" target="_blank">
                <Image
                  className="h-7 w-fit transition-transform duration-700 ease-in-out hover:scale-125"
                  src="/icon/facebook_logo.png"
                  alt="facebook_logo"
                  height={200}
                  width={200}
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  className="h-7 w-fit transition-transform duration-700 ease-in-out hover:scale-125"
                  src="/icon/insta_logo.png"
                  alt="insta_logo"
                  height={200}
                  width={200}
                />
              </a>
              <a href="https://x.com/" target="_blank">
                <Image
                  className="h-7 w-fit transition-transform duration-700 ease-in-out hover:scale-125"
                  src="/icon/x_logo.png"
                  alt="x_logo"
                  height={200}
                  width={200}
                />
              </a>
              <a href="https://web.telegram.org/" target="_blank">
                <Image
                  className="h-7 w-fit transition-transform duration-700 ease-in-out hover:scale-125"
                  src="/icon/telegram_logo.png"
                  alt="telegram_logo"
                  height={200}
                  width={200}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-start">
          <p
            className="footer-text"
            style={{
              color: "white",
            }}
          >
            Job Application Automation
          </p>
          <Link href="/blog" className="footer-text">
            Interview Answer
          </Link>
          <Link href="/blog" className="footer-text">
            Resignation Letter
          </Link>
          <Link href="/blog" className="footer-text">
            Job GPT
          </Link>
          <Link href="/blog" className="footer-text">
            Indeed Bot
          </Link>
          <Link href="/blog" className="footer-text">
            LinkedIn Easy Apply Bot
          </Link>
          <Link href="/blog" className="footer-text">
            Auto Fill Job Applications Chrome Extension
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-start">
          <p
            className="footer-text"
            style={{
              color: "white",
            }}
          >
            Cover Letter Examples
          </p>
          <Link href="/cover-letter-generator" className="footer-text">
            Cover Letter Generator
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Google Cover Letter
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Amazon Cover Letter
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Tesla Cover Letter
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Front End Developer Cover Letter
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Product Manager Cover Letter
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-start">
          <p
            className="footer-text"
            style={{
              color: "white",
            }}
          >
            AI Tools
          </p>
          <Link href="/job-description-generator" className="footer-text">
            Job Description Generator
          </Link>
          <Link href="/linkedin-post-generator" className="footer-text">
            LinkedIn Post Generator
          </Link>
          <Link href="/linkedin-bio-generator" className="footer-text">
            LinkedIn Bio Generator
          </Link>
          <Link
            href="/linkedin-recommendation-generator"
            className="footer-text"
          >
            LinkedIn Recommendation Generator
          </Link>
          <Link
            href="/linkedin-post-generator#generate_linkedIn_hashtag"
            className="footer-text"
          >
            LinkedIn Hashtag Generator
          </Link>
          <Link
            href="/linkedin-post-generator#generate_linkedIn_headline"
            className="footer-text"
          >
            LinkedIn Headline Generator
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Resignation Letter Generator
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Resume Builder
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Resume Builder
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Resume GPT
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Resume Score
          </Link>
          <Link href="/cover-letter-generator" className="footer-text">
            Resume Summery Generator
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-start">
          <p
            className="footer-text"
            style={{
              color: "white",
            }}
          >
            Cover Letter Examples
          </p>
          <Link href="/contact" className="footer-text">
            Contact
          </Link>
          <Link href="/privacy" className="footer-text">
            Privacy
          </Link>
          <Link href="/terms" className="footer-text">
            Policy
          </Link>
          <Link href="/#faq" className="footer-text">
            FAQ
          </Link>
          <Link href="/terms" className="footer-text">
            Refund Policy
          </Link>
          <Link href="/terms" className="footer-text">
            Terms
          </Link>
        </div>
      </div>
      <div className="border-t border-[#FFFFFF1A] mt-6 pt-4 flex sm:flex-row flex-col justify-between gap-4">
        <Link href="/terms" className="footer-text">
          &copy; {new Date().getFullYear()} copyright Placed.com all rights
          reserved
        </Link>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth", // Optional: adds smooth scrolling
            });
          }}
          style={{
            color: "white",
          }}
          className="footer-text flex justify-center items-center gap-4 transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans"
        >
          <ArrowUp size={20} className="bg-white rounded-full" color="black" />
          Back To Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;

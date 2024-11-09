'use client'
import router from "next/router";
import React, { useState } from 'react';
import { Eye, User, Download, Info, Edit, Trash, LucideHandPlatter, X, ExternalLink } from 'lucide-react';
import Link from "next/link";

function Dashboard() {
  const [showDetails, setShowDetails] = useState(false);

  const handleEyeClick = () => {
    setShowDetails((prev) => !prev);
  }
  const handleUserClick = () => console.log("User clicked");
  const handleDownloadClick = () => console.log("Download clicked");
  const handleEditClick = () => console.log("Edit clicked");
  const handleDeleteClick = () => console.log("Delete clicked");
  const handleCloseDiv = () => {
    setShowDetails((prev) => !prev);
  }

  return (
    <div>
      <p className='text-3xl font-bold'>All Resume</p>
      <div className="grid grid-cols-2">
        <p className="text-xl mt-3 justify-self-start">
          Create a professional resume with ease. Our builder has many customizable content options.
        </p>
        <div className="flex flex-row items-center justify-self-end">
          <button
            type="submit"
            style={{
              width: "200px",
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: "21.33px",
            }}
            className="text-center py-[16px] bg-[#000000] text-white rounded-full font-medium transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans mx-auto"
          >
            <Link href="/resume-builder">
              Create New Resume
            </Link>
          </button>
        </div>

      </div>
      
      <div className="mt-7 w-full text-xl rounded-lg border" style={{ borderColor: "#F7F7FF" }}>
        <div className="grid grid-cols-[3fr_2fr_1fr] gap-4 p-2 font-bold" style={{color: "#8C8CB8", backgroundColor: "#F7F7FF" }}>
          <span>Resume Title</span>
          <span>Edited Time</span>
          <span>Actions</span>
        </div>
        <div className="grid grid-cols-[3fr_2fr_1fr] gap-4 p-2 pt-4 pb-4 border-b">
          <span>Sample Resume</span>
          <span>2023-11-01 14:30</span>
          <div className="grid grid-cols-5 gap-2">
            <Eye className="cursor-pointer" onClick={handleEyeClick} />
            <ExternalLink className="cursor-pointer" onClick={handleUserClick} />
            <Download className="cursor-pointer" onClick={handleDownloadClick} />
            <Edit className="cursor-pointer" onClick={handleEditClick} />
            <Trash className="cursor-pointer" onClick={handleDeleteClick} />
          </div>
        </div>
        
      </div>
      { showDetails && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
        <div className="fixed right-0 top-0 h-full w-[550px] bg-[#ffffff] shadow-lg z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-center font-semibold text-lg flex-grow">Sidebar Header</h2>
            <X className="cursor-pointer" onClick={handleCloseDiv} />
          </div>
          <div className="w-full border h-[0]"></div>
          <div className="p-4 h-full flex flex-col">
            <div className="flex-grow border h-[300px] rounded-xl p-4 overflow-y-auto">
              <p>Your content goes here...</p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                style={{
                  width: "200px",
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "21.33px",
                }}
                className="text-center py-[16px] bg-[#ffffff] text-black border-2 rounded-full font-medium transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans mx-auto"
              >
                <Link href="/resume-builder">
                  Edit Resume
                </Link>
              </button>
              <button
                type="submit"
                style={{
                  width: "200px",
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "21.33px",
                }}
                className="text-center py-[16px] bg-[#000000] text-white rounded-full font-medium transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans mx-auto"
              >
                <Link href="/resume-builder">
                  Download
                </Link>
              </button>
            </div>
          </div>

          
        </div>
      </div>
      )}
      
    </div>
  );
}

export default Dashboard;

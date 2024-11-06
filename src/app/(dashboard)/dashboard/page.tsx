'use client'
import router from "next/router";
import React, { useState } from 'react';
import { Eye, User, Download, Info, Edit, Trash } from 'lucide-react';

function Dashboard() {
  const [showInfo, setShowInfo] = useState(false);

  const handleEyeClick = () => console.log("View clicked");
  const handleUserClick = () => console.log("User clicked");
  const handleDownloadClick = () => console.log("Download clicked");
  const handleInfoClick = () => setShowInfo(!showInfo);
  const handleEditClick = () => console.log("Edit clicked");
  const handleDeleteClick = () => console.log("Delete clicked");

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
            onClick={() => router.push("/resume-builder")}
            className="text-center py-[16px] bg-[#000000] text-white rounded-full font-medium transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans mx-auto"
          >
            Create New Resume
          </button>
        </div>

        <div className="mt-7 w-full rounded-lg border" style={{ borderColor: "#F7F7FF" }}>
          <div className="grid grid-cols-3 gap-4 p-2 font-bold" style={{ color: "#F7F7FF", backgroundColor: "#F7F7FF" }}>
            <span>Resume Title</span>
            <span>Edited Time</span>
            <span>Actions</span>
          </div>
          <div className="grid grid-cols-3 gap-4 p-2 border-b">
            <span>Sample Resume</span>
            <span>2023-11-01 14:30</span>
            <div className="grid grid-cols-4 gap-2">
              <Eye className="cursor-pointer" onClick={handleEyeClick} />
              <User className="cursor-pointer" onClick={handleUserClick} />
              <Download className="cursor-pointer" onClick={handleDownloadClick} />
              <Info className="cursor-pointer" onClick={handleInfoClick} />
              {showInfo && (
                <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg p-2 w-40">
                  <div className="flex items-center cursor-pointer" onClick={handleEditClick}>
                    <Edit className="mr-2" /> <span>Edit</span>
                  </div>
                  <div className="flex items-center cursor-pointer mt-2" onClick={handleDeleteClick}>
                    <Trash className="mr-2" /> <span>Delete</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

'use client';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { Eye, User, Download, Info, Edit, Trash, ExternalLink, MoreVertical, X } from 'lucide-react';
import Link from "next/link";

type Resume = {
  id: number;
  title: string;
  lastEdited: string;
};

function Dashboard() {
  const router = useRouter();
  
  const [confirmDeletePopup, setConfirmDeletePopup] = useState(false);
  const [shareResumePopup, setShareResumePopup] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [currentResumeId, setCurrentResumeId] = useState<number | null>(null);
  const [resumeToDeleteId, setResumeToDeleteId] = useState<number | null>(null);
  
  const [resumes, setResumes] = useState<Resume[]>([
    { id: 1, title: 'Sample Resume', lastEdited: '2023-11-01 14:30' },
    { id: 2, title: 'Another Resume', lastEdited: '2023-11-02 10:00' },
  ]);

  const handleCopyLink = () => {
    if (currentResumeId !== null) {
      const link = `https://example.com/resume/${currentResumeId}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(link).then(() => {
          setIsCopying(true);
          setTimeout(() => {
            setIsCopying(false);
          }, 500);
        }).catch((err) => {
          console.error('Failed to copy:', err);
        });
      } else {
        const input = document.createElement('input');
        input.value = link;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        setIsCopying(true);
        setTimeout(() => {
          setIsCopying(false);
        }, 500);
      }
    }
  };

  const handleShareClick = (id: number) => {
    setConfirmDeletePopup(false);
    setShareResumePopup(true);
    setCurrentResumeId(id);
    setOpenMenuId(null);
  };

  const handleDownloadClick = (id: number) => {
    router.push(`/resume-builder/${id}`);
    setOpenMenuId(null);
  };

  const handleEditClick = (id: number) => {
    router.push(`/resume-builder/${id}`);
    setOpenMenuId(null);
  };

  const handleDeleteClick = (id: number) => {
    setShareResumePopup(false);
    setResumeToDeleteId(id);
    setConfirmDeletePopup(true);
    setOpenMenuId(null);
  };

  const handleResumeDelete = () => {
    if (resumeToDeleteId !== null) {
      console.log(`Deleting resume with id: ${resumeToDeleteId}`);
      setResumes(resumes.filter(resume => resume.id !== resumeToDeleteId));
      setConfirmDeletePopup(false);
    }
  };

  return (
    <div>
      <p className='text-2xl sm:text-3xl font-bold'>All Resume</p>
      <div className="grid grid-cols-2">
        <p className="text-md md:text-xl mt-3 justify-self-start">
          Create a professional resume with ease. Our builder has many customizable content options.
        </p>
        <div className="flex flex-row items-center justify-self-end">
          <button
            type="submit"
            className="text-center text-sm sm:text-lg py-[16px] px-[15px] sm:px-[30px] bg-[#000000] text-white rounded-full font-medium transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans mx-auto"
          >
            <Link href="/resume-builder">
              Create New Resume
            </Link>
          </button>
        </div>
      </div>

      <div className="mt-7 w-full text-l sm:text-xl rounded-lg border" style={{ borderColor: "#F7F7FF" }}>
        <div className="grid grid-cols-[3fr_2fr_1fr] gap-4 p-2 font-bold" style={{ color: "#8C8CB8", backgroundColor: "#F7F7FF" }}>
          <span>Resume Title</span>
          <span className="self-center">Edited Time</span>
          <span>Actions</span>
        </div>
        
        {resumes.map((resume) => (
          <div key={resume.id} className="grid grid-cols-[3fr_2fr_1fr] gap-4 p-2 pt-4 pb-4 border-b">
            <span>{resume.title}</span>
            <span>{resume.lastEdited}</span>
            <div className="flex justify-center sm:justify-start sm:gap-3">
              <ExternalLink className="cursor-pointer hidden sm:block" onClick={() => handleShareClick(resume.id)} />
              <Download className="cursor-pointer hidden sm:block" onClick={() => handleDownloadClick(resume.id)} />
              <Edit className="cursor-pointer hidden sm:block" onClick={() => handleEditClick(resume.id)} />
              <Trash className="cursor-pointer hidden sm:block" onClick={() => handleDeleteClick(resume.id)} />

              <div className="relative sm:hidden">
                <MoreVertical
                  className="cursor-pointer"
                  onClick={() => setOpenMenuId((prevId) => prevId === resume.id ? null : resume.id)}
                />
                {openMenuId === resume.id && (
                  <div className="absolute top-full right-0 bg-white text-black shadow-md rounded-lg w-40 p-2 z-10">
                    <ul>
                      <li className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer" onClick={() => handleShareClick(resume.id)}>
                        <ExternalLink className="w-5 h-5" />
                        Share
                      </li>
                      <li className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer" onClick={() => handleDownloadClick(resume.id)}>
                        <Download className="w-5 h-5" />
                        Download
                      </li>
                      <li className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer" onClick={() => handleEditClick(resume.id)}>
                        <Edit className="w-5 h-5" />
                        Edit
                      </li>
                      <li className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer" onClick={() => handleDeleteClick(resume.id)}>
                        <Trash className="w-5 h-5" />
                        Delete
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {shareResumePopup && currentResumeId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] sm:w-[400px] p-6 flex flex-col relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShareResumePopup(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-center font-semibold text-lg mb-4">Share the Resume</h2>
            <p className="text-sm mb-2">Copy and share the link below:</p>
            <div className="mb-4 sm:text-lg text-sm">
              <input
                type="text"
                value={`https://example.com/resume/${currentResumeId}`}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <button
              onClick={handleCopyLink}
              disabled={isCopying}
              className={`w-full py-2 ${isCopying ? 'bg-gray-300 sm:text-lg text-sm' : 'sm:text-lg text-sm bg-gray-200 hover:bg-gray-300'} text-black rounded-full font-medium`}
            >
              {isCopying ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      )}

      {confirmDeletePopup && resumeToDeleteId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg z-50 w-[300px] sm:w-[400px] p-6 flex flex-col">
            <h2 className="text-center font-semibold text-lg mb-4">Confirm Delete</h2>
            <p className="text-center mb-6">Are you sure you want to delete this item?</p>
            <div className="flex justify-between text-sm sm:text-lg mr-3 ml-3 sm:mr-10 sm:ml-10">
              <button
                onClick={() => setConfirmDeletePopup(false)}
                className="text-center py-[12px] px-6 bg-gray-200 text-black rounded-full font-medium transition-transform hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleResumeDelete}
                className="text-center py-[12px] px-6 bg-red-500 text-white rounded-full font-medium transition-transform hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

import React, { useState } from 'react';
import { Mail, Calendar, Settings, Power, ChevronDown, Info, Rows4, Sun, MoreHorizontal, Reply, Trash2, Archive, Printer, Forward, Star, Tag, Users, Home, PenSquare, HelpCircle, Globe } from 'lucide-react';
import SvgUser from "./Assets/contactpic.svg"
import logo from "./Assets/logo.svg"
import icon from "./Assets/ccdeb37d2844a6a657e48f7beb5724c1.png"

function App() {
  const [selectedEmail, setSelectedEmail] = useState(0);
  const emails = [
    {
      id: 0,
      subject: 'Re: Your order 17/12/FisherLab/2014 /1155437837',
      from: 'henry.mbote@thermofisher.com',
      date: '2025-02-13 14:56',
      content: (
        <div className='text-sm'>
          <p>Dear @Labtrone</p> <br/><br/>
          <p>We would like to update you with regards to your order.</p><br/>
          <p>
            There was a delay due to the festive season holidays that started <br/><br/>
            on the 23rd of December to the 13th of January. This led to a halt in manufacturing. Your order will be ready for shipping on 
            March 20, 2025
          </p><br/>
          <p>We apologize for any inconvenience.</p>
          <br />
          <p>Best Regards,</p><br/><br/>

          Fisher Scientific UK Ltd <br />
          <span >
            Bishop Meadow Road<br />
            Loughborough<br />
            Leicestershire<br />
            LE11 5RG UK<br />
            GREAT BRITAIN
          </span><br /><br />
          <p>Phone: +441509555500</p>
          <p>
            Email: <a href="mailto:FisherUK.Quotations@thermofisher.com" style={{ color: "#00acff" }}>FisherUK.Quotations@thermofisher.com</a>
          </p>
          <p>
            Website: <a href="https://www.fishersci.co.uk" style={{ color: "#00acff" }}>www.fishersci.co.uk</a> <br /><br />
          </p>
          <p style={{ color: "#00acff" }}>All sales are subject to the following terms of sale</p> <br /><br />
          
          <p className='text-[12px]'> WORLDWIDE CONFIDENTIALITY NOTE: </p>
          <p className='text-[12px]'>Dissemination, distribution or copying of this email or the information herein by anyone other than the intended recipient, <br/>
            or an employee or agent of a system responsible for delivering the message to the intended recipient, is prohibited.<br/>
            If you are not the intended recipient, please inform the sender and delete all copies.
          </p>
        </div>
      )
    }
  ];
  

  return (
    <div className="flex h-screen bg-[#21292c] text-white">
      {/* Left Sidebar */}
      <div className="w-[72px] flex flex-col py-2 border-r border-[#2d363a]">
        <div className="flex flex-col items-center space-y-1">
          {/* Logo */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <img
              src={logo}
              alt="DB Schenker Logo"
              className="w-12 h-auto course-pointer"
            />
          </button>

          {/* Compose - Blue */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <PenSquare className="w-4 h-4 text-[#00acff] mb-1" />
            <span className="text-[10px] text-[#00acff]">Compose</span>
          </button>

          {/* Mail */}
          <div className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a] relative">
            <div className="absolute left-0 w-[3px] h-full bg-[#00acff]"></div>
            <Mail className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-400">Mail</span>
          </div>

          {/* Contacts */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <Users className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-400">Contacts</span>
          </button>

          {/* Calendar */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <Calendar className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-400">Calendar</span>
          </button>

          {/* Settings */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <Settings className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-400">Settings</span>
          </button>

          {/* Webmail */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <img
              src={icon}
              alt="DB Schenker Logo"
              className="w-7 h-auto course-pointer"
            />
          <span className="text-[10px] text-gray-400">Webmail Home</span>
          </button>
        </div>

        {/* Bottom Icons */}
        <div className="mt-auto flex flex-col items-center space-y-1">
          {/* Light Mode */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <Sun className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-400">Light</span>
          </button>

          {/* About */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <HelpCircle className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-400">About</span>
          </button>

          {/* Logout - Red */}
          <button className="w-full flex flex-col items-center py-3 hover:bg-[#2d363a]">
            <Power className="w-4 h-4 text-red-500 mb-1" />
            <span className="text-[10px] text-red-500">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar with Icons */}
        <div className="h-[52px] border-b border-[#2d363a] flex items-center justify-center space-x-4 px-4">
          <button className="p-2 hover:bg-[#2d363a] rounded flex items-center">
            <Reply className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-[#2d363a] rounded flex items-center">
            <Forward className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-[#2d363a] rounded flex items-center">
            <Archive className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-[#2d363a] rounded flex items-center">
            <Printer className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-[#2d363a] rounded flex items-center">
            <Star className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-[#2d363a] rounded flex items-center">
            <Tag className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-[#2d363a] rounded flex items-center">
            <Trash2 className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="flex-1 flex-col">
          {/* Email List */}
          <div className="w-[auto] border-[#2d363a] overflow-y-auto">
            {emails.map((email) => (
              <div
                key={email.id}
                className="px-4 py-3 border-b border-[#2d363a] cursor-pointer hover:bg-[#2d363a]"
                onClick={() => setSelectedEmail(email.id)}
              >
                <div className="font-medium text-lg mb-1">{email.subject}</div>
                <div className='flex'> 
                  <img
                    src={SvgUser}
                    alt="DB Schenker Logo"
                    className="w-10  h-10 mr-3 course-pointer"
                  />
                  <div className='flex-col'>
                    <div className='text-xs text-gray-300'> From <span className='text-[#00acff]'>{emails[selectedEmail].from}</span> on <span>{emails[selectedEmail].date}</span></div>
                    <div className='flex gap-2 mt-1 text-xs '>
                      <span className="text-[#00acff] flex gap-1"> <Mail className='stroke-2 w-3 h-4'/>  Details</span>
                      <span className="text-[#00acff] flex gap-1"> <Info className='stroke-2 w-3 h-4'/> Headers</span>
                      <span className="text-[#00acff] flex gap-1"> <Rows4 className='stroke-2 w-3 h-4'/> Plain text</span>
                    </div>
                  </div>
                  </div>
              </div>
            ))}
          </div>

          {/* Email Preview */}
          <div className="flex-1 flex flex-col bg-white h-[100%] text-gray-900">
            {/* Email Content */}
            <div className="flex-1 p-1 overflow-y-auto">
              <div className="text-sm whitespace-pre-line">{emails[selectedEmail].content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
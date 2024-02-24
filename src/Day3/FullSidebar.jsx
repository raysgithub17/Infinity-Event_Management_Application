import React from 'react'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar from './Sidebar';
import { SidebarItem } from './Sidebar';
import { Link } from 'react-router-dom';
export default function FullSidebar() {
  return (
    <div className="flex">
        <Sidebar>
        <Link to="/home">
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
        </Link>
        <a href="https://spot-light-appwrite.vercel.app/dashboard">
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
        </a>
        <Link to="/events">
          <SidebarItem icon={<Layers size={20} />} text="Events" />
        </Link>
        <Link to="/booked">
          <SidebarItem icon={<Calendar size={20} />} text="Booked" />
        </Link>
        <Link to="/payhistory">
          <SidebarItem icon={<Flag size={20} />} text="Payment History" />
        </Link>
        <hr className="my-3" />
        <Link to="/payment">
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </Link>
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
    </div>
  )
}

"use client";

import { useAuth } from "../context/AuthContext";
import { manrope } from "../layout";
import Image from "next/image";
import { Bell } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import your NotificationBox here
import NotificationBox from "./NotificationBox";

export default function Header() {
  const { userAccount } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="border-b border-gray-700 p-4 flex items-center justify-between bg-[#121712] relative">
      {/* Title */}
      <h1 className={`text-xl font-extrabold ${manrope.className} text-white`}>
        Compost Tracker
      </h1>

      {/* Right side icons — only show if logged in */}
      {userAccount && (
        <div className="flex items-center gap-3 relative">
          {/* Notification Button */}
          <button
            onClick={() => setShowNotifications((prev) => !prev)}
            className="p-2 rounded-full bg-gray-800 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-700 relative"
          >
            <Bell size={18} className="text-white" />
          </button>

          {/* Animated Notification Box using your component */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 right-8 w-64 z-50"
              >
                <NotificationBox />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Profile Image */}
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={userAccount.profile_url || "/default-profile.jpg"}
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}

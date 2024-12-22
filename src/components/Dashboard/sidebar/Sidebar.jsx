import React, { useState } from 'react';
import Logo from '../../../assets/logos/zelosify02.png'; // Replace with your logo path
import { BarChart2, FileText, PieChart, MessageSquare, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
    const [activeNav, setActiveNav] = useState('Dashboard');

    const navItems = [
        { icon: BarChart2, label: 'Dashboard' },
        { icon: BarChart2, label: 'Top Vendors statistics' },
        { icon: FileText, label: 'Contract details' },
        { icon: PieChart, label: 'Insights Report' },
        { icon: MessageSquare, label: 'Messages' },
        { icon: Settings, label: 'Settings' },
        { icon: LogOut, label: 'Sign Out' },
    ];

    return (
        <div className="w-50 h-screen border-r border-gray-100 sticky top-0">
            {/* Logo Section */}
            <div className="p-6">
                <img src={Logo} alt="Zelosify" className="h-8 mt-6" />
            </div>

            {/* Navigation Items */}
            <div className="px-3">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => setActiveNav(item.label)}
                        className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg mb-1 ${activeNav === item.label
                                ? 'bg-emerald-500 text-white'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <item.icon className="h-5 w-5" />
                        <span className="text-[13px] font-medium">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

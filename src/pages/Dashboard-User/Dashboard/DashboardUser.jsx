'use client';

import { useState } from 'react';
import { Search, Bell, Moon, ChevronDown, BarChart2, FileText, PieChart, MessageSquare, Settings, LogOut } from 'lucide-react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const contractsData = [
    { day: 'Monday', online: 15, offline: 12 },
    { day: 'Tuesday', online: 18, offline: 15 },
    { day: 'Wednesday', online: 20, offline: 18 },
    { day: 'Thursday', online: 15, offline: 12 },
    { day: 'Friday', online: 17, offline: 14 },
    { day: 'Saturday', online: 19, offline: 16 },
    { day: 'Sunday', online: 20, offline: 15 },
];

const vendorInsightsData = [
    { month: 'Jan', oldVendors: 250, newVendors: 200 },
    { month: 'Feb', oldVendors: 300, newVendors: 250 },
    { month: 'Mar', oldVendors: 200, newVendors: 180 },
    { month: 'Apr', oldVendors: 280, newVendors: 220 },
    { month: 'May', oldVendors: 250, newVendors: 200 },
    { month: 'Jun', oldVendors: 300, newVendors: 250 },
    { month: 'Jul', oldVendors: 350, newVendors: 300 },
    { month: 'Aug', oldVendors: 320, newVendors: 280 },
    { month: 'Sep', oldVendors: 280, newVendors: 250 },
    { month: 'Oct', oldVendors: 300, newVendors: 270 },
    { month: 'Nov', oldVendors: 280, newVendors: 230 },
    { month: 'Dec', oldVendors: 240, newVendors: 200 },
];

const satisfactionData = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    lastMonth: Math.floor(Math.random() * 20) + 70,
    thisMonth: Math.floor(Math.random() * 20) + 75,
}));

const complianceData = [
    { month: 'Jan', actual: 8.823, target: 13.122 },
    { month: 'Feb', actual: 9.823, target: 13.122 },
    { month: 'Mar', actual: 11.823, target: 13.122 },
    { month: 'Apr', actual: 9.823, target: 13.122 },
    { month: 'May', actual: 12.823, target: 13.122 },
    { month: 'Jun', actual: 11.823, target: 13.122 },
    { month: 'Jul', actual: 10.823, target: 13.122 },
];

const vendorItems = [
    { id: '01', name: 'IT support', popularity: 80, percentage: '45%' },
    { id: '02', name: 'Hardware Item', popularity: 70, percentage: '25%' },
    { id: '03', name: 'App development', popularity: 60, percentage: '15%' },
    { id: '04', name: 'Networking', popularity: 75, percentage: '25%' },
];

const volumeServiceData = [
    { name: '1', volume: 1135, services: 635 },
    { name: '2', volume: 1135, services: 635 },
    { name: '3', volume: 1135, services: 635 },
    { name: '4', volume: 1135, services: 635 },
    { name: '5', volume: 1135, services: 635 },
    { name: '6', volume: 1135, services: 635 },
];

export default function DashboardUser() {
    const [activeNav, setActiveNav] = useState('Dashboard');

    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-100">
                <div className="p-6">
                    <img src="/placeholder.svg?height=30&width=100" alt="Zelosify" className="h-8" />
                </div>
                <div className="px-3">
                    {[
                        { icon: BarChart2, label: 'Dashboard', active: true },
                        { icon: BarChart2, label: 'Top Vendors statistics' },
                        { icon: FileText, label: 'Contract details' },
                        { icon: PieChart, label: 'Insights Report' },
                        { icon: MessageSquare, label: 'Messages' },
                        { icon: Settings, label: 'Settings' },
                        { icon: LogOut, label: 'Sign Out' },
                    ].map((item) => (
                        <button
                            key={item.label}
                            onClick={() => setActiveNav(item.label)}
                            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg mb-1 ${activeNav === item.label
                                    ? 'bg-emerald-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <item.icon className="h-5 w-5" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="h-16 border-b border-gray-100 px-6 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="pl-10 pr-4 py-2 w-80 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Moon className="h-5 w-5" />
                        </button>
                        <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center space-x-3">
                            <img
                                src="/placeholder.svg"
                                alt="Profile"
                                className="h-8 w-8 rounded-full"
                            />
                            <div>
                                <div className="text-sm font-medium">Pedro</div>
                                <div className="text-xs text-gray-500">Admin</div>
                            </div>
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-6 mb-6">
                        {[
                            { value: '$1k', label: 'contract approved', change: '+5% from yesterday', bg: 'bg-red-50' },
                            { value: '300', label: 'Total contract', change: '+2% from yesterday', bg: 'bg-yellow-50' },
                            { value: '5', label: 'contract in progress', change: '+3% from yesterday', bg: 'bg-green-50' },
                            { value: '2', label: 'New Vendors', change: '+0% from yesterday', bg: 'bg-purple-50' },
                        ].map((stat, i) => (
                            <div key={i} className={`${stat.bg} rounded-lg p-6`}>
                                <div className="text-2xl font-semibold mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600 mb-4">{stat.label}</div>
                                <div className="text-xs text-emerald-600">{stat.change}</div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Total Contracts Chart */}
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-semibold">Total Contracts approved</h2>
                                <button className="text-sm text-gray-500">Export</button>
                            </div>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={contractsData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="day" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="online" fill="#3b82f6" />
                                        <Bar dataKey="offline" fill="#10b981" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Vendor Insights Chart */}
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <h2 className="text-lg font-semibold mb-6">Vendor Insights</h2>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={vendorInsightsData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="oldVendors" stroke="#8b5cf6" strokeWidth={2} />
                                        <Line type="monotone" dataKey="newVendors" stroke="#ef4444" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Vendor Satisfaction Chart */}
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <h2 className="text-lg font-semibold mb-6">vendor Satisfaction</h2>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={satisfactionData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="thisMonth"
                                            stroke="#10b981"
                                            fill="#10b981"
                                            fillOpacity={0.1}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="lastMonth"
                                            stroke="#3b82f6"
                                            fill="#3b82f6"
                                            fillOpacity={0.1}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Compliance Chart */}
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <h2 className="text-lg font-semibold mb-6">Compliance Target vs Reality</h2>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={complianceData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="actual" fill="#10b981" />
                                        <Bar dataKey="target" fill="#f59e0b" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2">
                                    <div className="h-3 w-3 bg-emerald-500 rounded"></div>
                                    <span className="text-sm text-gray-600">Actual compliance</span>
                                    <span className="text-sm font-medium">8.823</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="h-3 w-3 bg-yellow-500 rounded"></div>
                                    <span className="text-sm text-gray-600">Target compliance</span>
                                    <span className="text-sm font-medium">13.122</span>
                                </div>
                            </div>
                        </div>

                        {/* Top Vendor Items */}
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <h2 className="text-lg font-semibold mb-6">Top Vendor Items</h2>
                            <div className="space-y-6">
                                {vendorItems.map((item) => (
                                    <div key={item.id}>
                                        <div className="flex justify-between mb-2">
                                            <div className="text-sm text-gray-600">
                                                {item.id}. {item.name}
                                            </div>
                                            <div className="text-sm font-medium">{item.percentage}</div>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-500 rounded-full"
                                                style={{ width: `${item.popularity}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Volume vs Service Level */}
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <h2 className="text-lg font-semibold mb-6">Volume vs Service Level</h2>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={volumeServiceData} barSize={20}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="volume" fill="#3b82f6" />
                                        <Bar dataKey="services" fill="#10b981" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm">Volume</span>
                                    <span className="text-sm font-medium">1,135</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm">Services</span>
                                    <span className="text-sm font-medium">635</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}


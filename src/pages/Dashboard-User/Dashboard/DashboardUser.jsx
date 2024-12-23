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
import { Helmet } from 'react-helmet';
import Logo from '../../../assets/logos/zelosify02.png'
import VendorStats from '../../../components/Dashboard/Stats/VendorStats';
import ContractsChart from '../../../components/Dashboard/charts/ContractsChart';
import VendorInsightsChart from '../../../components/Dashboard/charts/VendorInsightsChart';
import VendorSatisfactionChart from '../../../components/Dashboard/charts/VendorSatisfactionChart';
import ComplianceChart from '../../../components/Dashboard/charts/ComplianceChart';
import Sidebar from '../../../components/Dashboard/sidebar/Sidebar';

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
            <div>
                <Helmet>
                    <title>Dashboard Analaytics | zelosify</title>
                </Helmet>
            </div>
            {/* Sidebar */}
           <Sidebar/>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="h-20 border-b border-gray-100 px-6 flex items-center justify-between">
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
                                <div className="text-sm font-medium">John</div>
                                <div className="text-xs text-gray-500">Admin</div>
                            </div>
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="p-6 bg-[#f7fdf8ec]">
                    {/* Stats Grid */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-x-6 py-4">
                        {/* First Component: VendorStats */}
                        <div className="w-full lg:w-3/5 pt-4">
                            <VendorStats />
                        </div>

                        {/* Second Component: Contracts Bar Chart */}
                        <div className="lg:w-2/5 ">
                            <ContractsChart />
                        </div>


                    </div>


                    {/* Charts Grid */}
                        {/* Total Contracts Chart */}
                        <div className="flex flex-wrap gap-4 pb-6">
                            <div className="w-full lg:w-[45%]">
                                <VendorInsightsChart />
                            </div>
                            <div className="w-full lg:w-[30%]">
                                <VendorSatisfactionChart />
                            </div>
                            <div className="w-full lg:w-[20%]">
                            
                            </div>
                        </div>



                    <div className="grid grid-cols-3 gap-6">
                        <ComplianceChart />
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


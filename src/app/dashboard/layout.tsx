'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';

interface DropdownState {
  reports: boolean;
  users: boolean;
  settings: boolean;
  help: boolean;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<DropdownState>({
    reports: false,
    users: false,
    settings: false,
    help: false
  });

  const toggleDropdown = (dropdown: keyof DropdownState): void => {
    setOpenDropdowns({
      ...openDropdowns,
      [dropdown]: !openDropdowns[dropdown]
    });
  };

  const isActive = (path: string): boolean => pathname === path;
  const isInPath = (path: string): boolean => pathname?.includes(path) || false;

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="p-4 text-2xl font-bold">Dashboard</div>
        
        <nav>
          <div className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
            <Link href="/dashboard">Overview</Link>
          </div>
          
          <div className={`nav-item ${isActive('/dashboard/analytics') ? 'active' : ''}`}>
            <Link href="/dashboard/analytics">Analytics</Link>
          </div>
          
          <div className={`nav-item ${openDropdowns.reports ? 'dropdown-open' : ''} ${isInPath('/dashboard/reports') ? 'active' : ''}`}>
            <div onClick={() => toggleDropdown('reports')} className="flex justify-between items-center">
              <span>Reports</span>
              <span>{openDropdowns.reports ? '▲' : '▼'}</span>
            </div>
            <div className="dropdown-content">
              <div className={`sub-nav-item ${isActive('/dashboard/reports/overview') ? 'active' : ''}`}>
                <Link href="/dashboard/reports/overview">Overview</Link>
              </div>
              <div className={`sub-nav-item ${isActive('/dashboard/reports/detailed') ? 'active' : ''}`}>
                <Link href="/dashboard/reports/detailed">Detailed</Link>
              </div>
            </div>
          </div>
          
          <div className={`nav-item ${openDropdowns.users ? 'dropdown-open' : ''} ${isInPath('/dashboard/users') ? 'active' : ''}`}>
            <div onClick={() => toggleDropdown('users')} className="flex justify-between items-center">
              <span>Users</span>
              <span>{openDropdowns.users ? '▲' : '▼'}</span>
            </div>
            <div className="dropdown-content">
              <div className={`sub-nav-item ${isActive('/dashboard/users/management') ? 'active' : ''}`}>
                <Link href="/dashboard/users/management">Management</Link>
              </div>
              <div className={`sub-nav-item ${isActive('/dashboard/users/profiles') ? 'active' : ''}`}>
                <Link href="/dashboard/users/profiles">Profiles</Link>
              </div>
            </div>
          </div>
          
          <div className={`nav-item ${openDropdowns.settings ? 'dropdown-open' : ''} ${isInPath('/dashboard/settings') ? 'active' : ''}`}>
            <div onClick={() => toggleDropdown('settings')} className="flex justify-between items-center">
              <span>Settings</span>
              <span>{openDropdowns.settings ? '▲' : '▼'}</span>
            </div>
            <div className="dropdown-content">
              <div className={`sub-nav-item ${isActive('/dashboard/settings/appearance') ? 'active' : ''}`}>
                <Link href="/dashboard/settings/appearance">Appearance</Link>
              </div>
              <div className={`sub-nav-item ${isActive('/dashboard/settings/security') ? 'active' : ''}`}>
                <Link href="/dashboard/settings/security">Security</Link>
              </div>
            </div>
          </div>
          
          <div className={`nav-item ${isActive('/dashboard/notifications') ? 'active' : ''}`}>
            <Link href="/dashboard/notifications">Notifications</Link>
          </div>
          
          <div className={`nav-item ${openDropdowns.help ? 'dropdown-open' : ''} ${isInPath('/dashboard/help') ? 'active' : ''}`}>
            <div onClick={() => toggleDropdown('help')} className="flex justify-between items-center">
              <span>Help</span>
              <span>{openDropdowns.help ? '▲' : '▼'}</span>
            </div>
            <div className="dropdown-content">
              <div className={`sub-nav-item ${isActive('/dashboard/help/documentation') ? 'active' : ''}`}>
                <Link href="/dashboard/help/documentation">Documentation</Link>
              </div>
              <div className={`sub-nav-item ${isActive('/dashboard/help/support') ? 'active' : ''}`}>
                <Link href="/dashboard/help/support">Support</Link>
              </div>
            </div>
          </div>
        </nav>
      </aside>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
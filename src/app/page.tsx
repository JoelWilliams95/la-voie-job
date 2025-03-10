import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white h-screen p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-4">
          <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">Tableau de bord</Link>
          <Link href="/calendar" className="block py-2 px-4 rounded hover:bg-gray-700">Calendrier</Link>
          <Link href="/lalla-lghalia" className="block py-2 px-4 rounded hover:bg-gray-700">LALLA LGHALIA</Link>
          <Link href="/pro-pro" className="block py-2 px-4 rounded hover:bg-gray-700">PRO PRO</Link>
          <Link href="/yallah-nkhedmo" className="block py-2 px-4 rounded hover:bg-gray-700">YALLAH NKHEDMO</Link>
          <Link href="/help-center" className="block py-2 px-4 rounded hover:bg-gray-700">Centre d'aide</Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <header className="mb-6">
          <h2 className="text-3xl font-bold">Bonjour Admin</h2>
        </header>
        
        {/* Dashboard Sections */}
        <section id="calendar" className="mb-6 p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold mb-4">Calendrier</h3>
          <p>Les événements à venir seront affichés ici.</p>
        </section>
        
        <section id="notes" className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold mb-4">Notes</h3>
          <p>Les notes et rappels importants peuvent être listés ici.</p>
        </section>
      </main>
    </div>
  );
}

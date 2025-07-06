'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('../../../componenets/LeafletMap'), { ssr: false });

export default function MapPage() {
  return (
    <main className="h-screen w-screen">
      <LeafletMap />
    </main>
  );
}

'use client';

import { useRouter, usePathname } from 'next/navigation';

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DiscordSVG, GithubSVG } from "@/components/media-icons";
import { Separator } from "@/components/ui/separator";

export function MenuBar() {
  const router = useRouter();
  const path = usePathname().split('/')[1] || ''; // Default to home if no path is present

  return (
    <div className="sticky top-0 z-50 w-full h-16 border-b flex items-center justify-between px-6 bg-background/75 shrink-0 backdrop-blur-md">
        <div className="flex flex-1 items-center gap-3 font-bold text-lg">
            <img src="./logo.svg" alt="PySplanner Logo" width={40} height={40} className="rounded-md" />
            <span className="text-primary">PySplanner</span>
        </div>

      <Tabs value={path} onValueChange={(tab) => router.push(`/${tab}`)}>
        <TabsList variant="line">
            <TabsTrigger value="">Home</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="visualizer">Visualizer</TabsTrigger>
            <TabsTrigger value="docs">Docs</TabsTrigger>
        </TabsList>
        </Tabs>

      <div className="flex flex-1 items-center justify-end">
        {/* <ThemeSwitch /> (Will add back later, too hard to maintain right now) */}
        <Separator orientation="vertical" className="h-8" />
        <div className="flex ml-4 gap-4">
          <a href="https://discord.gg/peMVWcuzdJ" target="_blank" rel="noopener noreferrer"><DiscordSVG /></a>
          <a href="https://github.com/pysplanner" target="_blank" rel="noopener noreferrer"><GithubSVG /></a>
        </div>
      </div>
    </div>
  );
}
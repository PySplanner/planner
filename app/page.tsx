"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { GithubSVG, DiscordSVG, YoutubeSVG } from "@/components/media-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import TypeIt from "typeit-react";
import { ArrowDown, Mail } from "lucide-react";

interface TutorialProps {
  name: string;
  description: string;
  image?: string;
  docs_link: string;
}
const tutorials: TutorialProps[] = [
  {
    name: "Getting Started",
    description: "Learn the basics of PySplanner and how to get started with your robot.",
    docs_link: "/docs/"
  },
  {
    name: "Advanced Features",
    description: "Explore the advanced capabilities of PySplanner for complex robot movements.",
    docs_link: "/docs/"
  },
  {
    name: "Behind the scenes",
    description: "Dive into the technical details of how PySplanner works.",
    docs_link: "/docs/"
  },
  {
    name: "Tutorial 4",
    description: "This is a placeholder for a future tutorial.",
    docs_link: "/docs/"
  },
  {
    name: "Tutorial 5",
    description: "This is a placeholder for a future tutorial.",
    docs_link: "/docs/"
  }
];
function OpenTutorial() {
  return null; // TODO: Add this once the docs are made
}

interface ReleaseProps {
  product: string;
  description: string;
  version: string;
  date: string;
  github_link: string;
}
const releases: ReleaseProps[] = [
  {
    product: "Main",
    description: "The core PySplanner Python code that runs on the robot and interfaces with the firmware.",
    version: "v0.0.0a",
    date: "2026-05-10",
    github_link: "https://github.com/PySplanner/main"
  },
  {
    product: "Firmware",
    description: "A fork of the PyBricks firmware that implements PySplanner algorithms and features.",
    version: "v0.2.0a",
    date: "2026-05-10",
    github_link: "https://github.com/PySplanner/firmware"
  },
  {
    product: "Dashboard",
    description: "The web-based dashboard for managing a robot, visualizing movements, and configuring settings.",
    version: "v0.0.0a",
    date: "2026-05-10",
    github_link: "https://github.com/PySplanner/site"
  },
  {
    product: "Visualizer",
    description: "A web-based tool for creating splans that the robot will follow.",
    version: "v0.0.0a",
    date: "2026-05-10",
    github_link: "https://github.com/PySplanner/site"
  }
];

interface SocialProps {
  name: string;
  icon: React.ReactNode;
  link: string;
}
const socialLinks: SocialProps[] = [
  {
    name: "GitHub",
    icon: <GithubSVG className="size-8"/>,
    link: "https://github.com/PySplanner"
  },
  {
    name: "Discord",
    icon: <DiscordSVG className="size-8"/>,
    link: "https://discord.gg/peMVWcuzdJ"
  },
  {
    name: "YouTube",
    icon: <YoutubeSVG className="size-8"/>,
    link: "https://www.youtube.com/@pysplanner"
  },
  {
    name: "Email",
    icon: <Mail className="size-8" />,
    link: "mailto:contact@pysplanner.com"
  }
];

export default function Home() {
  const router = useRouter();
  const [isScrollIndicatorVisible, setScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setScrollIndicator(target.scrollTop < 50);
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);
  
  return (
    <div className="relative flex flex-col w-full items-center">
        <div className="relative flex flex-col w-full items-center min-h-[calc(100vh-64px)] pb-4">
            <div className="absolute top-0 left-0 right-0 h-[60vh] bg-linear-to-b from-primary/11 dark:from-primary/6 to-transparent pointer-events-none" />

            <img className="rounded-md mt-12 mb-12 h-50" src="./banner.svg" alt="PySplanner Logo" />
            <div className="w-3/8 text-center">
                <TypedHeading />
                <p className="text-lg text-muted-foreground mt-4">
                  PySplanner is a powerful, free, and open source tool for optimized autonomous movement on LEGO MINDSTORMS EV3 and SPIKE Prime robots.
                  Creating smooth and consistent movements for your robot has never been easier. Say goodbye to guesswork and hello to precision with PySplanner.
                </p>
            </div>

              <div className="flex items-center gap-4 mt-8">
                <Button className="text-white" size="lg" onClick={() => router.push('/docs')}>Get Started</Button>
                <Button variant="outline" size="lg" onClick={() => router.push('/dashboard')}>Go To Dashboard</Button>
            </div>

            <div className={`absolute bottom-24 flex flex-col items-center gap-1 text-muted-foreground text-sm transition-opacity duration-300 ${isScrollIndicatorVisible ? 'opacity-100' : 'opacity-0'}`}>
                <ArrowDown />
                View More
            </div>
        </div>

        <div className="flex flex-col w-full max-w-4xl">
            <Card className="w-full p-6">
                <h3 className="text-2xl font-bold text-primary">Tutorials</h3>
                <div className="flex flex-row space-x-3 overflow-x-auto p-1 pb-4">
                  {tutorials.map((tutorial, index) => (
                    <Card key={index} className="flex flex-col w-90 gap-4 pb-4 shrink-0 hover:shadow-xl hover:ring-primary transition-all cursor-pointer">
                      <img src={tutorial.image || "./logo.svg"} className="w-full h-32 object-cover rounded-t-lg border-b" />
                      <h4 className="text-lg font-semibold mx-4">{tutorial.name}</h4>
                      <p className="text-muted-foreground mx-4">{tutorial.description}</p>
                    </Card>
                  ))}
                </div>
            </Card>

            <Card className="w-full p-6 mt-8">
                <h3 className="text-2xl font-bold text-primary">Releases</h3>
                <div className="grid grid-cols-2 w-full">
                  {releases.map((release, index) => (
                    <Card key={index} className={`p-4 gap-4 hover:shadow-xl hover:ring-primary transition-all cursor-pointer ${index % 2 === 0 ? 'mr-2' : 'ml-2'} ${index >= 2 ? 'mt-4' : ''}`} onClick={() => window.open(release.github_link, '_blank')}>
                      <h4 className="text-lg font-semibold">{release.product} - {release.version}</h4>
                      <p className="text-muted-foreground">{release.description}</p>
                      <p className="text-sm text-muted-foreground">Released on {release.date}</p>
                    </Card>
                  ))}
                </div>
            </Card>

            <Card className="w-full p-6 my-8">
                <h3 className="text-2xl font-bold text-primary">Connect With Us</h3>
                <div className="flex flex-row space-x-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="flex flex-1 flex-row p-4 items-center hover:shadow-xl hover:ring-primary transition-all cursor-pointer" onClick={() => window.open(social.link, '_blank')}>
                      {social.icon}
                      <p className="text-muted-foreground">{social.name}</p>
                    </Card>
                  ))}
                </div>
            </Card>
        </div>
    </div>
  )
}

function TypedHeading() {
  return (
    <h2 className="font-bold text-4xl tracking-tight">
      LEGO robot movement,&nbsp;
      <TypeIt
        options={{
          speed: 70,
          deleteSpeed: 50,
          waitUntilVisible: true,
          loop: true,
        }}
        getBeforeInit={(instance) =>
          instance
            .type("simplified.").pause(1500).delete()
            .type("made for FLL.").pause(1500).delete()
            .type("free and open source, always.").pause(1500).delete()
            .type("crazy easy.").pause(1500).delete()
            .type("that doesn't suck.").pause(1500).delete()
            .type("that's repeatable.").pause(1500).delete()
            .type("built different.").pause(1500).delete()
            .type("that's precise.").pause(1500).delete()
            .type("revolutionized.").pause(1500).delete()
            .type("that's optimized.").pause(1500).delete()
            .type("with no guesswork.").pause(1500).delete()
        }
      />
    </h2>
  );
}

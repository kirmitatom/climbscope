import Image from "next/image";
import { FaMountain, FaRoute, FaUserFriends, FaChartLine } from "react-icons/fa";
import { GiCarabiner } from "react-icons/gi";
import Hero from "../../componenets/Hero";
import Features from "../../componenets/Features";
import Routes from "../../componenets/Routes";
import Login from "../../componenets/login";

type ClimbingLocation = {
  name: string;
  region: string;
  difficulty: string;
  temperature: string;
  grade: string;
  rating: number;
  reviewCount: number;
  conditions: string;
  description: string;
  image: string;
};

export default function Home() {
  const featuredLocation: ClimbingLocation = {
    name: "Yosemite Valley",
    region: "California, US",
    difficulty: "8.5 ML",
    temperature: "22°C",
    grade: "IV+",
    rating: 4.9,
    reviewCount: 2400,
    conditions: "Perfect friction conditions",
    description: "El Capitan, Half Dome, and more legendary formations",
    image: "/yosemite-valley.jpg"
  };

  return (
    <>
    <Hero/>
    <Features/>
    <Routes/>
    <Login/>
    </>
  )
}
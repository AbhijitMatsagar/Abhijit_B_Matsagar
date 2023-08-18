import black from "../assets/black.jpg";
import guitarhand1 from "../assets/guitarhand.jpg";
import guitarhand2 from "../assets/guitarhand2.jpg";
import concert from "../assets/concert.jpg";
import { CarFront, CheckCircle, ClipboardSignature, Headphones, LayoutGrid, Lightbulb, LineChart, LogOut, Mic2, Music4, Settings, Squirrel, Users2 } from "lucide-react";
import guitar from "../assets/guitar.jpg";
import piano from "../assets/piano.jpg";
import man from "../assets/man.jpg"
import Home from "../page";


const courseData = [
    {
        id: 1,
        coverImg: guitarhand1,
        img: man,
        level: "beginner's",
        title: "Music News",
        duration: "1h 53m",
        rating: "4.9/5",
    },
    {
        id: 2,
        coverImg: concert,
        img: man,
        level: "Advanced",
        title: "Music Theory",
        duration: "59m",
        rating: "4.3/5",
    },
    {
        id: 3,
        coverImg: black,
        img: man,
        level: "Mastering",
        title: "Music Practise",
        duration: "2h 15m",
        rating: "4.4/5",
    },
    {
        id: 4,
        coverImg: guitarhand2,
        img: man,
        level: "Beginner's",
        title: "Music Theories",
        duration: "1h 30m",
        rating: "4.9/5",
    },
]

const newsData = [
    {
        id: 1,
        icon: <LineChart />,
        category: "Musicians",
    },
    {
        id: 2,
        icon: <Mic2 />,
        category: "Instruments",
    },
    {
        id: 3,
        icon: <CarFront />,
        category: "Journey",
    },
    {
        id: 4,
        icon: <Music4 />,
        category: "Music Notes",
    },
    {
        id: 5,
        icon: <Headphones />,
        category: "Practise",
    },
    {
        id: 6,
        icon: <Lightbulb />,
        category: "Tips",
    },
    {
        id: 7,
        icon: <Squirrel />,
        category: "Updates",
    },
]

const progressData = [
    {
        id: 1,
        title: "Learning Piano Basics",
        img: piano,
        instructor: "John Smith",
        progress: "45% Complete",
    },
    {
        id: 2,
        title: "Advanced Guitar Techniques",
        img: guitar,
        instructor: "Emily Davis",
        progress: "62% Complete",
    }
]

const iconDatas = [
    {
        id:1,
        icons: <LayoutGrid />,
    },
    {
        id:2,
        icons: <Home />,
    },
    {
        id:3,
        icons: <CheckCircle />,
    },
    {
        id:4,
        icons: <Users2 />,
    },
    {
        id:5,
        icons: <ClipboardSignature />,
    },
    {
        id:6,
        icons: <Settings />,
    },
    {
        id:7,
        icons: <LogOut />,
    },
]

export { courseData, newsData, progressData, iconDatas };
"use client"
import React from 'react';
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Annual Sports Day",
    time: "12:00 PM - 2:00 PM",
    description: "Students participate in various outdoor games and athletic competitions to promote physical fitness, teamwork, and school spirit.",
  },
  {
    id: 2,
    title: "Parent–Teacher Meeting",
    time: "12:00 PM - 2:00 PM",
    description: "A scheduled meeting where parents and teachers discuss students’ academic progress, behavior, and overall development.",
  },
  {
    id: 3,
    title: "Cultural Program",
    time: "12:00 PM - 2:00 PM",
    description: "A cultural event showcasing students’ talents through music, dance, drama, and performances celebrating diversity and creativity.",
  },
];


const EventCalender = () => {
     const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-[#E0F2FE] even:border-t-[#E9D5FF]"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
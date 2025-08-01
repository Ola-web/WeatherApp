'use client'

import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import api from './api.js'

export default function WeatherInfo() {
  
    return (
        <div className="bg-white flex items-center justify-center gap-120 py-10">
            <div>
                <h3>{weather.name}</h3>
                <p>Sky is Clear</p>
            </div>
            <div>
                {/* <CiSearch style={{cursor: 'pointer'}} /> */}
                <input 
                type="search"
                placeholder="search city..."
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
                />
                <button 
                className="bg-sky-700 px-8 py-2 
                text-white rounded-lg mx-4 
                cursor-pionter"
                onClick={handleSearch}>
                Search
                </button>
               
            </div>
        </div>
    )
}
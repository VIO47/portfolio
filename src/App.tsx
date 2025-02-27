import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/Home.tsx'
import Projects from "@/Projects.tsx";
import Navigation from "@/Navigation.tsx";
import SportBuddy from '@/SportBuddy'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/projects/sport-buddy' element={<SportBuddy/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

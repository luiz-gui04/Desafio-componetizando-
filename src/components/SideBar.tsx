import { useEffect, useState } from "react";
import { Button } from "./Button";
import '../styles/sidebar.scss';


interface SideBarProps{
  switchGenre: (id: number) => void;
  film: Array<genres>;
  selectFilmId: Number;
}

interface genres{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({switchGenre, film, selectFilmId}: SideBarProps) {
  // Complete aqui
      
  
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {film.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => switchGenre(genre.id)}
          selected={selectFilmId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}
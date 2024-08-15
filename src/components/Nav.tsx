import { Link } from "react-router-dom"
import { DarkModeBtn } from "./DarkModeBtn"

export const Nav = () => {
  return (
    <header className="w-full shadow-md bg-LightModeElements dark:bg-DarkBlueBackground">
        <nav className="w-full px-7 py-7  flex flex-row justify-between items-center">
            <Link to="/">
              <h1 className="font-sans font-extrabold text-base dark:text-white">Where in the world?</h1>
            </Link>

            <DarkModeBtn/>
        </nav>
    </header>
  )
}

import { DarkModeBtn } from "./DarkModeBtn"


export const Nav = () => {
  return (
    <header className="w-full border-2 border-red-600 dark:border-yellow-600">
        <nav className="w-full px-7 py-7 border-2 border-blue-900 flex flex-row justify-between items-center">
            <h1 className="text-black dark:text-white">Where in the world?</h1>

            <DarkModeBtn/>
        </nav>
    </header>
  )
}

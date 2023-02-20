import { SearchIcon } from '../../../components/icons'

export function Search () {
  return (
    <form className="flex items-center drop-shadow-md">
      <input className="gray-color rounded-l-md text-base text-color px-4 py-1 outline-none border border-transparent hover:bg-gray-200 dark:hover:bg-gray-700  focus:border-secondary" type="text" placeholder="Buscar..."/>
      <button className="gray-color rounded-r-md hover:bg-gray-200 dark:hover:bg-gray-700 h-full px-2 flex justify-center items-center"><SearchIcon/></button>
    </form>
  )
}

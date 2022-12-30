import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const { cards } = useSelector((state) => state);
    console.log(cards.sets)
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <nav className="bg-blue-400 w-screen absolute top-0 z-20">
                <div className="flex flex-col gap-y-4 items-center justify-center w-full">
                    <a className="w-full text-center text-2xl font-black items-center flex flex-col justify-center py-4" href="#">Pokeo</a>
                    <div className="flex flex-row justify-around w-full pb-8">
                        <select className="w-9/12 pl-4 text-xl h-12 rounded-xl" >
                            {cards.sets.map((set) => (
                                <option value={set.id}>{set.name}</option>
                            ))}
                        </select>
                        <button className="h-12 w-12 bg-slate-50 aspect-square rounded-xl"><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Navbar;
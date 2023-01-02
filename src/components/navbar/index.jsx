import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSet } from '../../features/cards/cardSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const { cards, currentSet } = useSelector((state) => state);
    const [set, setSet] = useState(cards.sets[0]);
    const [isOpen, setIsOpen] = useState(false);
    
    // toggle open/close
    const toggle = () => setIsOpen(!isOpen);

    // when the component mounts, get the first set
    useEffect(() => {
        dispatch(getSet(cards.sets[0]));
    }, []);

    const handleSelect = async (cardSet) => {
        console.log(cardSet)

        await dispatch(getSet(cardSet))
    }

    return (
        <header>
            <nav className="bg-blue-400 w-screen h-42 absolute top-0 z-20">
                <div className="flex flex-col gap-y-4 items-center justify-center w-full">
                    <a className="w-full text-center text-2xl font-black items-center flex flex-col justify-center py-4 text-white" href="#">Pokeo</a>
                    <div className="flex flex-row justify-around w-full pb-8">
                        <select onChange={(e) => {
                            setSet()
                            handleSelect(cards.sets[e.target.value]);
                        }} className="w-9/12 pl-4 text-xl h-12 rounded-xl" >
                            {cards.sets.map((set, index) => (
                                <option key={`set-${index}`} value={index}>{set.name}</option>
                            ))}
                        </select>
                        <button onClick={() => toggle()} className="h-12 w-12 bg-slate-50 aspect-square rounded-xl"><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                    {isOpen ? <div className="flex flex-col items-center w-full pb-8">
                        
                        <ul className='w-full'>
                            <li className="flex flex-row justify-around w-full py-4
                            font-semibold text-lg text-slate-50 hover:bg-blue-300 cursor-pointer">Library</li>
                            <li className="flex flex-row justify-around w-full py-4
                            font-semibold text-lg text-slate-50 hover:bg-blue-300 cursor-pointer">Decks</li>
                            <li className="flex flex-row justify-around w-full py-4
                            font-semibold text-lg text-slate-50 hover:bg-blue-300 cursor-pointer">Trading</li>
                            <li className="flex flex-row justify-around w-full py-4
                            font-semibold text-lg text-slate-50 hover:bg-blue-300 cursor-pointer">Profile</li>
                            <li className="flex flex-row justify-around w-full py-4
                            font-semibold text-lg text-slate-50 hover:bg-blue-300 cursor-pointer">Settings</li>
                            
                        </ul>
                    </div> : null}
                    
                </div>
            </nav>

        </header>
    )
}

export default Navbar;
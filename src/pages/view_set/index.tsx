import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { countCard } from '../../features/library/librarySlice';
import { ICard } from '../../interfaces/card';
import { useRef } from 'react';

const ViewSet = () => {
    const dispatch = useDispatch();
    const topRef = useRef<null | HTMLDivElement>(null); 
    const { cards, currentSet } = useSelector((state: any) => state.cards);
    const library = useSelector((state: any) => state.library.cards);
    console.log(library)

    const changeCount = async (count: -1 | 1, card: ICard) => {
        // process here
        await dispatch(countCard({ count, card, set: currentSet }))
        
    }

    const getCount = (card: ICard) => {
        let count = 0
        try {
            count = library[card.id.split('-')[0]][card.id] ? library[card.id.split('-')[0]][card.id].count : 0
        } catch (err) {
            console.log(err)
        }
        return count
    }

    // when the set changes, scroll to the top
    useEffect(() => {
        if(topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentSet])

    return( 
        <div id='cardView' className='w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 gap-x-3 gap-y-12 h-screen overflow-scroll pt-44 relative'>
            <p ref={topRef} className='w-full h-44 absolute invisible top-0'></p>
            {cards.map((card: any) => {
                return (
                    <div key={card.id} className='w-11/12 mx-auto h-auto flex flex-col items-center cursor-pointer relative'>
                        <img src={card.images.large} alt={card.name} />
                        <h3 className='text-xl font-semibold'>{card.name}</h3>
                        <span className='text-base absolute -top-2 -right-2 bg-white border-green-500 border-4 font-semibold aspect-square h-2 w-2 p-4 flex items-center justify-center rounded-full'>{getCount(card)}</span>
                        <div className='w-full flex flex-row h-full absolute top-0'>
                            <input onClick={() => changeCount(-1, card)} className='w-1/2 cursor-pointer' type='button' value='' />
                            <input onClick={() => changeCount(1, card)} className='w-1/2 cursor-pointer' type='button' value='' />
                        </div>
                    </div>

                )
            })
            }
        </div>
    )
}

export default ViewSet
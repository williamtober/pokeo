import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { countCard } from '../../features/library/librarySlice';
import { ICard } from '../../interfaces/card';

const ViewSet = () => {
    const dispatch = useDispatch();
    const { cards, currentSet } = useSelector((state: any) => state.cards);
    console.log(cards)

    const changeCount = async (count: -1 | 1, card: ICard) => {
        // process here
        await dispatch(countCard({ count, card, set: currentSet }))
        
    }

    return( 
        <div className='w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 gap-x-3 gap-y-12 h-screen overflow-scroll pt-44'>
            {cards.map((card: any) => {
                return (
                    <div key={card.id} className='w-11/12 mx-auto h-auto flex flex-col items-center cursor-pointer relative'>
                        <img src={card.images.large} alt={card.name} />
                        <h3 className='text-xl font-semibold'>{card.name}</h3>
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
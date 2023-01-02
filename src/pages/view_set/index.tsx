import { useDispatch, useSelector } from 'react-redux';

const ViewSet = () => {
    const dispatch = useDispatch();
    const cards = useSelector((state: any) => state.cards.cards);
    console.log(cards)

    return( 
        <div className='w-full flex flex-row flex-wrap justify-center gap-x-3 gap-y-24 h-screen overflow-scroll pt-44'>
            {cards.map((card: any) => {
                return (
                    <div key={card.id} className='w-5/12 h-1/4 flex flex-col items-center bg-red-500 cursor-pointer'>
                        <img src={card.images.large} alt={card.name} />
                        <h3 className='text-xl font-semibold'>{card.name}</h3>
                    </div>

                )
            })
            }
        </div>
    )
}

export default ViewSet
import TourCardComponent from './TourCardComponent';

function TourismSection({places,deleteHandler}) {
    return (
        <section>
            {places.map(tour => {
            return (
                    <TourCardComponent tour={tour} key={tour.id}/>
                )
            })}
        </section>
    )
}

export default TourismSection
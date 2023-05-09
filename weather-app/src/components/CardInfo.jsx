import Spinner from "./Spinner"

const CardInfo = (props) =>{
    const {showData, loadingData, weather, forecast} = props

    if (loadingData) {
        return <Spinner />
    }
    return(
        
        <div className="mt-5">

            
        </div>
        )
}

export default CardInfo
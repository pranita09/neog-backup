
const DisplayCartoons = ({cartoonsData}) =>{
    return(
        <div className="component">
            <ol>
                {
                    cartoonsData
                    .filter(({magnitude})=>(magnitude>5))
                    .map(({id, name, superpower, magnitude})=>(
                        <li key={id}><p>Name: {name}</p><p>SuperPower: {superpower}</p><p>Magnitude: {magnitude}</p></li>
                    ))
                }
            </ol>
        </div>
    )
}
export default DisplayCartoons;
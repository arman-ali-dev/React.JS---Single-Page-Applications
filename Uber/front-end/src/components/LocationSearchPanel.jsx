export default function LocationSearchPanel ({ setShowVehiclePanel, setShowLocationPanel})
{
    const locations = [
    "Hawa Mahal - Badi Choupad, Jaipur, Rajasthan 302002",
    "Amber Fort - Devisinghpura, Amer, Jaipur, Rajasthan 302001",
    "City Palace - Jaleb Chowk, Jaipur, Rajasthan 302002",
    "Jantar Mantar - Gangori Bazaar, J.D.A. Market, Jaipur, Rajasthan 302002",
    "Nahargarh Fort - Krishna Nagar, Brahampuri, Jaipur, Rajasthan 302002"
    ];

    return (
        <>
            <div className="py-6 px-5 ">
                <ul>
                    { locations.map( ( elem, index ) =>
                    {
                        return <li onClick={ () =>
                        {
                            setShowVehiclePanel( true )
                            setShowLocationPanel(false)
                       }} key={index} className="leading-5 mt-4 flex items-center locate px-2 py-4 rounded-lg cursor-pointer ">
                        <span className="mr-3">
                            <i className="bg-[#eeeeee] text-[18px] w-10 h-10 rounded-full flex justify-center items-center fa-solid fa-location-dot"></i>
                            </span>

                           <p className="text-[#000] font-medium text-[15px]">{elem}</p>
                    </li>
                   })}
                </ul>
            </div>

           
        </>
    )
}
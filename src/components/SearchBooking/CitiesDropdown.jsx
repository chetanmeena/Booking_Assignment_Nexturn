import Select from 'react-select'
import './Cities.style.css'
const CitiesDropDown = () =>{
    const cities_list = [
        {label:"Mumbai"},{label:"Delhi"},
        {label:"Hyderabad"},{label:"Banglore"},{label:"Bhopal"}
    ]

    return(
        <div>
             <div className="cities_menu">
                 <Select options={ cities_list } />

            </div>
        </div>
        )
}
export default CitiesDropDown;
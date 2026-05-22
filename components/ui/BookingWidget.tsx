import styles from './BookingWidget.module.css'
import { DayPicker } from  'react-day-picker'
import { useState } from 'react'
import 'react-day-picker/dist/style.css'

export default function BookingWidget () {
        const [range, setRange] = useState({ from: undefined, to: undefined })

    return (
        <article className={styles.widgetWrap}>
            <div>
                <h1>Selecciona Destino & Fecha</h1>

                <h2>Elije las fechas en el calendario y
                    <br />
                    encuentra que hay disponible</h2>
                <hr />
            </div>
            <form className={styles.bookingForm}>
                <label>
                    Destino
                    <select name="" id="">
                        <option value="place">place</option>
                        <option value="place">place 1</option>
                        <option value="place">place 2</option>                        
                    </select>
                </label>
                <label>
                    Fecha inicial
                    <input type="date" name="" id="" />    
                </label>
                <label>
                    Fecha final
                    <input type="date" name="" id="" />    
                </label>
                {/* calendario */}
                <DayPicker
                    mode='range'
                    selected={range} 
                    onSelect={setRange}
                    excludeDisabled
                ></DayPicker>


                <label>
                    Habitaciones
                    <input type="number" name="" id="" />    
                </label>
                <label>
                    Adultos
                    <input type="number" name="" id="" />    
                </label>
                <label>
                    Ninios
                    <input type="number" name="" id="" />    
                </label>
                <label>
                    Codigo Promocional
                    <input type="number" name="" id="" />    
                </label>
            </form>
        </article>
    )
}
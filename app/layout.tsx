import { Jost } from  'next/font/google'
import type { Metadata } from 'next'
import './global.css'
import React from 'react'


const jost = Jost({
    subsets: ['latin'],
    weight: ['400' , '500', '700'],
    variable: '--font-body' ,
})

export const metadata: Metadata = {
    title: 'Don Joaquín - Estancia Turística',
    description: 'Bienvenidos al Hotel de Campo Don Joaquín. Pueden disfrutar de días de campo, fin de semanas o sus vacaciones divertidas en familia. En nuestro restaurante les serviremos riquísimas comidas caseras como las que ya no se cocinan todos los días.',
    keywords: "don joaquin, estancia, estancia turística, día de campo, spa, piscina climatizada, cabalgatas, senderismo, los manzanos, club spa, colonia, uruguay, san josé, estancia don joaquin, hotel de campo",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='es' className={jost.variable}>
            <body>
                {children}
            </body>
        </html>


    )
}
import Header from '../components/layout/Header/Header'


export default function Home() {
    return (
        <>
            <Header></Header>
            <main>
                <video autoPlay muted loop style={{ top:'0', left:'0', position:'absolute', width: '100%', filter: 'brightness(0.7)', }} src="images/upscaled-video.mp4"></video>
                <p  style={{margin: '1000px 0', }}>hola</p>
            </main>
        </>
    )
}


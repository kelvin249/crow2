import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/container'
import { Seo } from "../components/seo"

import clubGIF from '../images/clubs.gif'
import { aboutus, clubs1,clubs2 } from './about.module.css'

function About(props) {
    console.log(props.location.path)
    return (
        <Layout location={props.location} >
            <div className={aboutus}>
                <h1 className="pageTitle">About</h1>
                <Container>
                    <p>
                        Crowlin Circus has been working in Europe for a number of years
                        entertaining people with stilts, magic shows, monocycle, tight
                        rope, slack rope, fakir/suspension and Fire Shows with Juggling,
                        Staff, Poi, Cube, Catherine Wheel, Ropes, Fire Cannon, Body
                        Burning,
                    </p>

                    <img src={clubGIF} alt="" className={clubs2} />
                    <img src={clubGIF} alt="" className={clubs1} />

                    <p>Fire Spitting and Fireworks to creact 2 Fire Shows for hire .</p>
                    <p>One Show of 15 min and another of about 25 min.</p>
                    <p>
                        We have shows suitable for any event or venue. We also have 3
                        large tents 12m x 6m for hire.
                    </p>
                    <p>
                        Taking bookings for: Parties, Weddings, Corporate Events,
                        Festivals, Concerts, Launches, Openings, promotional advertising
                    </p>




                    <p>
                        Crowlin Circus executa espectáculos de fogo, artes circenses e
                        diversas animações (Andas, malabarismo, contact staff e poi
                        spinning entre outros…). Alguns dos utensílios que usa no fogo são
                        as cordas, correntes, tranças, staff de contacto, torches de fogo
                        e “Bombril” (tipo fogo de artificio).
                    </p>
                    <p>
                        Durante as actuações os animadores cospem e passam fogo
                        directamente no corpo .
                    </p>
                    <p>
                        Os espectáculos realizam-se, principalmente em Bares, Discotecas,
                        Casamentos, Feiras e todo o tipo de locais/festas, muitas vezes em
                        conjunto com bandas/dj’s como já foi o caso de DJ Afar ( The
                        Kronik People), Blasted Mechanism.
                    </p>
                    <p>
                        Conta com várias participações em fillmes como: Braveheart, Rob
                        Roy, Hamish McBeth, Paradise Blues entre outros.
                    </p>
                    <p>
                        Crowlin Circus dispõe também de várias tendas e equipamento Audio
                        e Video.
                    </p>
                </Container>
            </div>
        </Layout>

    )
}

export default About

export const Head = () => {
    <Seo title="About" />
}
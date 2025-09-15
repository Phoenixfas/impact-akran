import style from "@/styles/About.module.css";
import BackgroundSvg from "../../public/images/svgs/background.svg"

export default function VisMis() {
    return (
        <div className={style.about__bottom}>
            <BackgroundSvg className={style.background} />
            <div className={style.about__bottomCard}>
                <h2>VISION</h2>
                <p>
                    To be the most dependable partner in the area for creating unique and inspiring event experiences that uplift, unite, and change.
                </p>
                <p>
                    Our goal is to use innovative ideas, faultless execution, and strategic thinking to create and carry out top-notch events that enhance audience engagement, boost brand visibility, and surpass expectations.
                </p>
            </div>
            <div className={style.about__bottomCard}>
                <h2>MISSION</h2>
                <p>
                    Our mission is to raise the bar for event management in the Middle East by offering full-service solutions that complement our customers&apos; corporate goals and cultivating enduring relationships via innovation, trust, and excellence.
                </p>
            </div>
            <div className={style.about__bottomCard}>
                <h2>GOAL</h2>
                <p>
                    Our goal is to elevate the standard of event management in the Middle East by Our goal is to create and carry out top-notch events that, by innovative ideas, faultless execution, and strategic planning, enhance audience engagement, boost brand visibility, and surpass expectations.
                </p>
            </div>
        </div>
    )
}

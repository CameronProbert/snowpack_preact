import {h, FunctionalComponent} from 'preact';
import {useState} from 'preact/hooks'
import randomColor from 'randomcolor';

import './Card.scss';

type CardProps = {
    title: string,
    detail: string,
    onClick?: () => void
}

const Card: FunctionalComponent<CardProps> = ({ title, detail, onClick }) => {
    const [colour] = useState<string>(randomColor({ format: 'rgb', luminosity: 'light' }))
    return <div className="card__base" onClick={() => onClick && onClick()}>
        <div className="card__circle_base">
            <div className="card__circle" style={{ backgroundColor: colour }} />
        </div>
        <div className="card__title">{title}</div>
        <div className="card__detail">{detail}</div>
    </div>
}

export default Card
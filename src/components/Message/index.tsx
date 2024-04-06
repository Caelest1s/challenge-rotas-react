import './style.css';

type Props = {
    text: string;
}

export default function Message({ text }: Props) {
    return (
        <div className="rr-container-message">
            <h1>{text}</h1>
        </div>

    );
}
import "./ChallengeDetailsCard.css";

const ChallengeDetailsCard =(props)=>{
    return <div className="details-card-container">
        <div className="card-name">{props.cardName}</div>
        <div className="card-value">{props.cardVal}</div>

    </div>
}
export default ChallengeDetailsCard;
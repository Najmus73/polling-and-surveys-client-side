
const SurveySectionCard = ({ surveys }) => {
    return (
        <div className="w-[460px] h-[600px] border border-purple-950 rounded-lg">
            <img className="w-[460px] h-[250px]" src={surveys.image}></img>
            <h1 className="text-xl font-bold p-4 h-24">{surveys.surveyTitle}</h1>
            <p className="p-4 h-[190px]">{surveys.description}</p>
            <div className="px-4">
                <button className="text-white font-bold bg-purple-950 py-[6px] w-full rounded-lg">Explore Now</button>
            </div>
        </div>
    )
}
export default SurveySectionCard;
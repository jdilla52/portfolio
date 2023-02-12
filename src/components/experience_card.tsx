
type ExperienceCardProps = {
    title: string
    company: string
    description: string
    link: string
}

const ExperienceCard = ({title, company, description, link}: ExperienceCardProps) => {


    return (
        <div className="flex flex-col items-left justify-center border-2 border-black w-80 p-4">
            <div className="flex flex-row items-left justify-left gap-4">
                <h3 className="text-xl font-regular">{title}</h3>
                <h3 className="text-xl font-regular">-</h3>
                <h3 className="text-xl font-regular" href={link}>{company} </h3>
            </div>
            <p className="text-lg">{description}</p>
        </div>
    )
}

export default ExperienceCard
import '@style/SportBuddy.scss'
import { Badge } from "@chakra-ui/react"

const SportBuddy = () => {
    return (
        <div className="sport-buddy">
            <div className="sport-buddy__header">
                <h1>Sport Buddy</h1>
                <div className="sport-buddy__header__badges">
                    <Badge>Concept </Badge>
                    <Badge> Design </Badge>
                    <Badge> A/B Testing</Badge>
                </div>
            </div>
            <div className='sport-buddy__content'>
                
            </div>
        </div>
    );
}

export default SportBuddy;
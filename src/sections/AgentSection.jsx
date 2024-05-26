import AgentComponent from '../components/AgentComponent';
import LayoutContainer from '../components/Layout';
import {Agents} from '../data';
import style from '../styles/agent.module.css';

const AgentSection = () => {
    return (
        <LayoutContainer bgColor={"#FFFFFF"}>
            <div className={style.agentContainer}>
                <div className={style.agentTop}>
                    <hr
                        style={{
                        border: "2px solid #91B029",
                        width: "90px",
                        display: "block",
                        margin: "auto"
                    }}/>

                    <h1>OUR AGENT</h1>
                    <p>Perspiciatis quidem, harum provident, repellat sint officia quos fugit
                        tempora id deleniti.</p>
                </div>
                <div className={style.agentBody}>

                    {Agents
                        .slice(0, 3)
                        .map((item, i) => <AgentComponent key={i} item={item}/>)
}
                </div>
            </div>
        </LayoutContainer>
    )
}

export default AgentSection
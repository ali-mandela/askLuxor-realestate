import SectionLayout from "./SectionLayout"

const AboutLeaderSection = () => {
    const customStyles = {
        color: "black",
        backgroundColor: "transparent"
    };
    return (
        <SectionLayout
            title="LEADERSHIP"
            content="Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti."
            style={customStyles}>
            <div>AboutLeaderSection</div>
        </SectionLayout>
    )
}

export default AboutLeaderSection
export default function EmojiConnection({ val1, val2, val3 }) {
    const win = (val1 === val2 && val2 === val3);
    const winStyles = { color: win ? "green" : "red" };
    return (
        <>
            <h3>{val1} {val2} {val3}</h3>
            <div style={winStyles}>
                <h3>{win ? "Matched mood :)" : " Not matched yet..."}</h3>
            </div>
            {win && <h3>Congrats!!</h3>}
        </>
    );
}
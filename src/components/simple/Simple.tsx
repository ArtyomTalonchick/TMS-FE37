type PropsType = {
    text?: string;
}

const Simple: React.FC<PropsType> = ({
    text = "",
}) => {

    return (
        <div>
            "{text}" is text from props
        </div>
    )


};

export default Simple;

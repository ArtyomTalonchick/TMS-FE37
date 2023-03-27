import { useNavigate } from "react-router-dom";
import { PostType } from "../../../../types/postsTypes";
import S from "./PostsCard.styled";

interface PropsType {
    dataItem: PostType;
}

const MAX_BODY_LENGTH = 100;

const PostsCard: React.FC<PropsType> = ({
    dataItem,
}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/posts/${dataItem.id}`);
    };

    return (
        <S.container onClick={handleClick}>
            <S.header>
                {dataItem.id}. {dataItem.title}
            </S.header>
            <S.body>
                {dataItem.body?.substring(0, MAX_BODY_LENGTH)}
            </S.body>
        </S.container>
    );
};

export default PostsCard;

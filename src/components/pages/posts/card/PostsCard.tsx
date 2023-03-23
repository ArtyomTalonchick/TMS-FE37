import { PostType } from "../../../../types/postsTypes";
import S from "./PostsCard.styled";

interface PropsType {
    dataItem: PostType;
}

const MAX_BODY_LENGTH = 100;

const PostsCard: React.FC<PropsType> = ({
    dataItem,
}) => {

    return (
        <S.container>
            <S.header>
                {dataItem.id}. {dataItem.title}
            </S.header>
            <S.body>
                {dataItem.body?.substring(0, 100)}
            </S.body>
        </S.container>
    );
};

export default PostsCard;

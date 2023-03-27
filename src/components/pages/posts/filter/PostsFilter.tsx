import { useState, useEffect } from "react";
import useDebounceValue from "../../../../hooks/useDebounceValue";
// import useThrottleValue from "../../../../hooks/useThrottleValue";
import { postsActions } from "../../../../store/posts/postsSlice";
import { useAppDispatch } from "../../../../store/store";
import C from "../../../../styledComponents";
import { PostsFilterType } from "../../../../types/postsTypes";
import Select from "../../../ui/select/Select";
import TextField from "../../../ui/textField/TextField";
import S from "./PostsFilter.styled"

const PostsFilter: React.FC = () => {
    const dispatch = useAppDispatch();
    const [sortField, setSortField] = useState("id");
    const [sortDir, setSortDir] = useState("desc");
    const [page, setPage] = useState(1);
    const [query, debounceQuery, setQuery] = useDebounceValue("", 500);
    // const [query, debounceQuery, setQuery] = useThrottleValue("", 500);

    const fetchData = (filter: Partial<PostsFilterType> = {}) => {
        dispatch(postsActions.getPostsList({
            sortField,
            sortDir,
            query: debounceQuery,
            limit: 12,
            page,
            ...filter,
        }));
    };

    const updatePageAndFetchData = (newPage: number) => {
        setPage(newPage);
        fetchData({ page: newPage });
    };

    const resetPageAndFetchData = () => {
        updatePageAndFetchData(1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            updatePageAndFetchData(page - 1);
        }
    };

    const handleNextPage = () => {
        updatePageAndFetchData(page + 1);
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        resetPageAndFetchData();
    };

    useEffect(() => {
        resetPageAndFetchData();
    }, [debounceQuery]);

    return (
        <S.container onSubmit={onSubmit}>
            <Select
                label="Sort field"
                value={sortField}
                setValue={setSortField}
                options={[
                    { value: "id", text: "Id" },
                    { value: "title", text: "Title" },
                    { value: "body", text: "Body" },
                ]}
            />
            <Select
                label="Sort direction"
                value={sortDir}
                setValue={setSortDir}
                options={[
                    { value: "asc", text: "asc" },
                    { value: "desc", text: "desc" },
                ]}
            />
            <C.button type="submit">
                Sort
            </C.button>
            <S.divider />
            <TextField
                label="Query"
                value={query}
                setValue={setQuery}
            />
            <S.divider />
            <C.button type="button" onClick={handlePrevPage}>
                -
            </C.button>
            <S.pageText>
                {page}
            </S.pageText>
            <C.button type="button" onClick={handleNextPage}>
                +
            </C.button>
        </S.container>
    )
};

export default PostsFilter;

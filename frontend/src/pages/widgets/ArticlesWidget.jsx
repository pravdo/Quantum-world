import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from 'state';
// import PostWidget from './PostWidget';
import ArticleWidget from './ArticleWidget';

const ArticlesWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const token = useSelector((state) => state.token);

  const getArticles = async () => {
    const response = await fetch('http://localhost:3001/articles', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setArticles({ articles: data }));
  };
  console.log(articles);

  const getUserArticles = async () => {
    const response = await fetch(
      `http://localhost:3001/articles/${userId}/articles`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setArticles({ articles: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserArticles();
    } else {
      getArticles();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {articles.map(
        ({
          _id,
          userId,
          avatar,
          title,
          subheader,
          main_info,
          picturePath,
          first_summary,
          second_summary,
        }) => (
          <ArticleWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            title={title}
            avatar={avatar}
            subheader={subheader}
            picturePath={picturePath}
            main_info={main_info}
            first_summary={first_summary}
            second_summary={second_summary}
          />
        )
      )}
    </>
  );
};

export default ArticlesWidget;

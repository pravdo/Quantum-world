import { useSelector } from 'react-redux';
import ArticlesWidget from 'pages/widgets/ArticlesWidget';

const Articles = () => {
  const { _id } = useSelector((state) => state.user);

  return <ArticlesWidget userId={_id} />;
};

export default Articles;

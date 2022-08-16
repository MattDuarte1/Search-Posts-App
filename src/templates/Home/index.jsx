import './styles.css';
import { useEffect, useState } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { NotFound } from '../../components/NotFound';
import { Loading } from '../../components/Loading';

function Home() {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsView, setPostsView] = useState(10);
  const [searchValue, setSearchValue] = useState('');
  const [loadingPage, setLoadingPage] = useState(true);
  const postsPerPage = 10;

  useEffect(() => {
    setLoadingPage(false);
    const load = async () => {
      setLoadingPage(true);
      const postsAndPhotos = await loadPosts();
      setAllPosts(postsAndPhotos);
      setPosts(postsAndPhotos.slice(0, postsPerPage));
      setLoadingPage(false);
    };

    load();
  }, []);

  const loadMorePosts = () => {
    const nextPage = postsView + postsPerPage;
    setPostsView(nextPage);
    setPosts(allPosts.slice(0, nextPage));
  };

  const noMorePosts = posts.length >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : posts;

  const searchInput = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return loadingPage ? (
    <Loading />
  ) : (
    <section className="container">
      <div className="search-container">
        <TextInput inputValue={searchValue} handleChange={searchInput} />

        {!!searchValue && (
          <>
            <h1 className="search-value-h1">Search Value: {searchValue}</h1>
          </>
        )}
      </div>
      <Posts posts={filteredPosts} />
      <div className="button-container">
        {!searchValue && !noMorePosts && (
          <Button func={loadMorePosts} text={'Load More Posts'} />
        )}
      </div>
      {filteredPosts.length === 0 && <NotFound search={searchValue} />}
    </section>
  );
}

export default Home;

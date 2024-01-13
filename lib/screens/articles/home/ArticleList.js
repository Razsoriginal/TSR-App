import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BlogPostWidget from './ArticleWidget';
import { fSecondaryColor } from '../../../constants/colors';

const ArticleListWidget = ({ categoryId }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;
  const [loading, setLoading] = useState(false);
  const shouldLoadMore = useRef(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let apiUrl = `https://thestrongrope.com/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`;

      if (categoryId) {
        apiUrl += `&categories=${categoryId}`;
      }

      const response = await fetch(apiUrl);
      const postData = await response.json();

      if (Array.isArray(postData)) {
        if (postData.length === 0) {
          shouldLoadMore.current = false;
        } else {
          setPosts((prevPosts) => [...prevPosts, ...postData]);
        }
      } else {
        shouldLoadMore.current = false; 
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (shouldLoadMore.current) {
      fetchPosts();
    }
  }, [categoryId, page]);

  const loadMorePosts = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      {posts.map((post, index) => (
        <BlogPostWidget
          key={`${post.id}_${index}`}
          postId={post.id}
          title={post.title.rendered}
          excerpt={post.excerpt.rendered}
        />
      ))}
      {!loading && !shouldLoadMore.current && (
        <Text style={styles.noPostsMessage}>No more posts available.</Text>
      )}
      {!loading && shouldLoadMore.current && (
        <View style={styles.loadMoreBtn}>
          <TouchableOpacity onPress={loadMorePosts} disabled={!shouldLoadMore.current}>
            <View style={styles.button}>
              <Text>Load More</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  loadMoreBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    width: 100,
    height: 35,
    borderRadius: 10,
    backgroundColor: fSecondaryColor + '20', 
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  noPostsMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777', 
  },
});

export default ArticleListWidget;
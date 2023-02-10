import React, { useState, useEffect } from "react";
import APosts from "../Admin/Pages/APosts";
import Posts from "../User/Pages/UPosts";
import Pagination from "./Pagination";
import { getAllBooks } from "../../services/Book/book.service";

const BookList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const isUserLoggedin = sessionStorage.getItem("isUserLoggedin")
    ? sessionStorage.getItem("isUserLoggedin")
    : false;
  const isAdmin = sessionStorage.getItem("isAdmin")
    ? sessionStorage.getItem("isAdmin")
    : false;

  const fetchPosts = async () => {
    setLoading(true);
    const res = await getAllBooks();
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-primary"></h1>
      {isUserLoggedin && isAdmin && (
        <APosts posts={currentPosts} loading={loading} />
      )}
      {isUserLoggedin && !isAdmin && (
        <Posts posts={currentPosts} loading={loading} />
      )}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default BookList;

import React, { useState } from 'react';
import users from '../data/users';
import TopThree from './TopThree';
import UserList from './UserList';
import Pagination from './Pagination';

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;

  const topThree = users.slice(0, 3);
  const restUsers = users.slice(3);
  const start = (currentPage - 1) * usersPerPage;
  const currentUsers = restUsers.slice(start, start + usersPerPage);
  const totalPages = Math.ceil(restUsers.length / usersPerPage);

  return (
    <>
      <TopThree users={topThree} />
      <UserList users={currentUsers} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  );
};

export default Leaderboard;

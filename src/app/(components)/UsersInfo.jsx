import React from 'react'

const UsersInfo = async () => {
  async function getUsers() {
    const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`);
    return usersResponse.json();
  };

  const users = await getUsers()

  return (
    <div>
      {users?.data?.map(user => {
        return (
          <div key={user._id}>{user.name}</div>
        )
      })}
    </div>
  )
}

export default UsersInfo
import React from 'react';
import Icon from '../../../Components/Shared/Icon'
import SearchFilter from '../../../Components/Shared/SearchFilter';

const Index = () => {

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Users</h1>
      <div className="flex items-center justify-between mb-6">
        <SearchFilter />
     
          <span>Create</span>
          <span className="hidden md:inline"> User</span>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="font-bold text-left">
              <th className="px-6 pt-5 pb-4">Name</th>
              <th className="px-6 pt-5 pb-4">Email</th>
              <th className="px-6 pt-5 pb-4" colSpan="2">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
           
                <tr
                  key={1}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td className="border-t">
                    {/* <InertiaLink
                      href={route('users.edit', id)}
                      className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                    >
                      {photo && (
                        <img
                          src={photo}
                          className="block w-5 h-5 mr-2 -my-2 rounded-full"
                        />
                      )}
                      {name}
                      {deleted_at && (
                        <Icon
                          name="trash"
                          className="flex-shrink-0 w-3 h-3 ml-2 text-gray-400 fill-current"
                        />
                      )}
                    </InertiaLink>
                  </td>
                  <td className="border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={route('users.edit', id)}
                      className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                    >
                      {email}
                    </InertiaLink>
                  </td>
                  <td className="border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={route('users.edit', id)}
                      className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                    >
                      {owner ? 'Owner' : 'User'}
                    </InertiaLink>
                  </td>
                  <td className="w-px border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={route('users.edit', id)}
                      className="flex items-center px-4 focus:outline-none"
                    >
                      <Icon
                        name="cheveron-right"
                        className="block w-6 h-6 text-gray-400 fill-current"
                      />
                    </InertiaLink> */}
                  </td>
                </tr>
          </tbody>
        </table>
      </div>
      {/* <Pagination links={links} /> */}
    </div>
  );
};


export default Index;

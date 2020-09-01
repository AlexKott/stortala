const initialState: AuthorsState = {
  1: {
    id: 1,
    name: 'Tom',
    image: 'https://pbs.twimg.com/profile_images/757516655266238464/F7Xr_ain_400x400.jpg',
  },
  2: {
    id: 2,
    name: 'Bob',
    image: 'https://pbs.twimg.com/profile_images/585982031567421440/kKsp_kIp_400x400.jpg',
  },
};

export default (state: AuthorsState = initialState, action: any): AuthorsState => {
  return state;
};

export const getAuthors = (state: State): AuthorsState => state.authors;

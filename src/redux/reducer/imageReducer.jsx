import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';



export const fetchPhotos = createAsyncThunk("fetchPhotos", async (searchQuery, { getState }) => {
  try {
    // Simulate a delay of 2 seconds (you can adjust this value)
    await new Promise(resolve => setTimeout(resolve, 3000));

    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=MQsHFMlOnvv3jMs-E0djEUGZ8Ie4CUNDz-dZab--eDc`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
});

 

  const ImageReducerSlice = createSlice({
    name: 'imageReducer',
    initialState: {
      photos: [], // Initialize as an empty array
      isLoading: false,
      error: null,
      searchQuery:'',
      isDarkMode:false,
      
    },
    reducers: {
      setPhotos: (state, action) => {
        state.photos = action.payload;
      },
      setIsLoading: (state, action) => {
        state.isLoading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      
      },
      setIsQuery: (state, action) => {
        state.isquery = action.payload;
      },
      SetIsDarkMode: (state, action) => {
        state.isDarkMode = action.payload;

      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchPhotos.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photos = action.payload;
    
      });
      builder.addCase(fetchPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    },
  });
  
 
export const { setPhotos, setIsLoading, setError,setIsQuery, setSearchQuery, SetIsDarkMode } = ImageReducerSlice.actions;
  
export default ImageReducerSlice.reducer;
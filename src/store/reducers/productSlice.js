// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   products: [],
//   loading: false,
//   error: null,
// };
// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchProducts.pending, (state) => {
//           state.loading = true;
//         })
//         .addCase(fetchProducts.fulfilled, (state, action) => {
//           state.loading = false;
//           //   state.products.push(action.payload);
//           state.products = action.payload;
//         })
//         .addCase(fetchProducts.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.error.message;
//         });
//     },
//   },
// });

// // export const {} = productSlice.actions;
// export default productSlice.reducer;

// // First, create the thunk
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log("data :", data);
//     return data;
//   },
// );

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  singleProduct: null,

  search: "",
  selectedCategory: "all",

  minPrice: 0,
  maxPrice: 1000,

  sort: "",

  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        // state.products = action.payload;
        // state.categories = action.payload;
        state.products = action.payload.products;
        state.categories = action.payload.categories;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ================= SINGLE PRODUCT =================

      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;

        state.singleProduct = action.payload;
      })

      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSearch,
  setSelectedCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
} = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("data/fetchAllData", async () => {
  const [productsRes, categoriesRes] = await Promise.all([
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products/categories"),
  ]);

  const products = await productsRes.json();
  const categories = await categoriesRes.json();

  return {
    products,
    categories,
  };
});

// ================= FETCH SINGLE PRODUCT =================

export const fetchSingleProduct = createAsyncThunk(
  "data/fetchSingleProduct",

  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await response.json();

    return data;
  },
);

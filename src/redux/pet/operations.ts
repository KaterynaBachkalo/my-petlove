import { createAsyncThunk } from "@reduxjs/toolkit";
import { petInstance } from "../auth/operations";
import { FetchParams } from "../../types";
import { AxiosError } from "axios";

export const fetchNews = createAsyncThunk(
  "/news/fetchNews",
  async ({ page, limit, title }: FetchParams, thunkAPI) => {
    try {
      const response = await petInstance.get("/news", {
        params: { page, limit, title },
      });

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchFriends = createAsyncThunk(
  "/friends/fetchFriends",
  async (_, thunkAPI) => {
    try {
      const response = await petInstance.get("/friends");
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchNotices = createAsyncThunk(
  "/notices/fetchNotices",
  async ({ page, limit, title }: FetchParams, thunkAPI) => {
    try {
      const response = await petInstance.get("/notices", {
        params: { page, limit, title },
      });

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

// export const addProduct = createAsyncThunk(
//   "products/addProduct",
//   async (newProduct: IProductsToBD, thunkAPI) => {
//     try {
//       const response = await petInstance.post("/admin/products", newProduct);

//       return response.data;
//     } catch (error: unknown) {
//       if (error instanceof AxiosError && error.message) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//       return thunkAPI.rejectWithValue("An unknown error occurred");
//     }
//   }
// );

// export const deleteProduct = createAsyncThunk(
//   "products/deleteProduct",
//   async (productId: string, thunkAPI) => {
//     try {
//       await petInstance.delete(`/admin/products/${productId}`);
//       return { productId };
//     } catch (error: unknown) {
//       if (error instanceof AxiosError && error.message) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//       return thunkAPI.rejectWithValue("An unknown error occurred");
//     }
//   }
// );

// export const editProduct = createAsyncThunk(
//   "products/editProduct",
//   async (updatedProduct: IProducts, thunkAPI) => {
//     try {
//       const response = await petInstance.put(
//         `/admin/products/${updatedProduct._id}`,
//         updatedProduct
//       );
//       return response.data;
//     } catch (error: unknown) {
//       if (error instanceof AxiosError && error.message) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//       return thunkAPI.rejectWithValue("An unknown error occurred");
//     }
//   }
// );

// export const addSupplier = createAsyncThunk(
//   "suppliers/addSupplier",
//   async (newSupplier: ISuppliersToBD, thunkAPI) => {
//     try {
//       const response = await petInstance.post("/admin/suppliers", newSupplier);

//       return response.data;
//     } catch (error: unknown) {
//       if (error instanceof AxiosError && error.message) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//       return thunkAPI.rejectWithValue("An unknown error occurred");
//     }
//   }
// );

// export const editSupplier = createAsyncThunk(
//   "suppliers/editSupplier",
//   async (updatedSupplier: ISuppliers, thunkAPI) => {
//     try {
//       const response = await petInstance.put(
//         `/admin/suppliers/${updatedSupplier._id}`,
//         updatedSupplier
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error: unknown) {
//       if (error instanceof AxiosError && error.message) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//       return thunkAPI.rejectWithValue("An unknown error occurred");
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import { petInstance } from "../auth/operations";
import {
  IProducts,
  IProductsToBD,
  ISuppliers,
  ISuppliersToBD,
} from "../../types";
import { AxiosError } from "axios";

interface FetchOrdersParams {
  page: number;
  limit: number;
  name?: string;
}

export const fetchData = createAsyncThunk(
  "/admin/dashboard/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await petInstance.get("/admin/dashboard");

      return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.message) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);
export const fetchOrders = createAsyncThunk(
  "/admin/orders/fetchOrders",
  async ({ page, limit, name }: FetchOrdersParams, thunkAPI) => {
    try {
      const response = await petInstance.get("/admin/orders", {
        params: { page, limit, name },
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

export const fetchProducts = createAsyncThunk(
  "/admin/products/fetchProducts",
  async ({ page, limit, name }: FetchOrdersParams, thunkAPI) => {
    try {
      const response = await petInstance.get("/admin/products", {
        params: { page, limit, name },
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

export const fetchCustomers = createAsyncThunk(
  "/admin/orders/fetchCustomers",
  async ({ page, limit, name }: FetchOrdersParams, thunkAPI) => {
    try {
      const response = await petInstance.get("/admin/customers", {
        params: { page, limit, name },
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

export const fetchSuppliers = createAsyncThunk(
  "/admin/suppliers/fetchSuppliers",
  async ({ page, limit, name }: FetchOrdersParams, thunkAPI) => {
    try {
      const response = await petInstance.get("/admin/suppliers", {
        params: { page, limit, name },
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

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct: IProductsToBD, thunkAPI) => {
    try {
      const response = await petInstance.post("/admin/products", newProduct);

      return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.message) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: string, thunkAPI) => {
    try {
      await petInstance.delete(`/admin/products/${productId}`);
      return { productId };
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.message) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (updatedProduct: IProducts, thunkAPI) => {
    try {
      const response = await petInstance.put(
        `/admin/products/${updatedProduct._id}`,
        updatedProduct
      );
      return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.message) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const addSupplier = createAsyncThunk(
  "suppliers/addSupplier",
  async (newSupplier: ISuppliersToBD, thunkAPI) => {
    try {
      const response = await petInstance.post(
        "/admin/suppliers",
        newSupplier
      );

      return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.message) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const editSupplier = createAsyncThunk(
  "suppliers/editSupplier",
  async (updatedSupplier: ISuppliers, thunkAPI) => {
    try {
      const response = await petInstance.put(
        `/admin/suppliers/${updatedSupplier._id}`,
        updatedSupplier
      );
      console.log(response.data);
      return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.message) {
            return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCities, fetchNews, fetchNotices } from "./operations";
import { ICity, IFriend, INew, INotice, IPet } from "../../types";
import { toast } from "react-toastify";

export interface IState {
  news: INew[];
  friends: IFriend[];
  notices: INotice[];
  pets: IPet[];
  cities: ICity[];

  totalNews: number;
  totalNotices: number;

  isLoading: boolean;
  error: unknown | null;
  currentPage: number;
}

interface Payload {
  news: INew[];
  friends: IFriend[];
  notices: INotice[];
  pets: IPet[];
  cities: ICity[];

  totalNews: number;
  totalNotices: number;
}

export const handlePending = (state: IState): void => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (
  state: IState,
  action: PayloadAction<unknown>
): void => {
  state.isLoading = false;
  state.error = action.payload;

  if (state.error === 400) {
    toast.error("Something went wrong...", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

const INITIAL_STATE = {
  news: [],
  friends: [],
  notices: [],
  pets: [],
  cities: [],
  totalNews: 0,
  totalNotices: 0,
  isLoading: false,
  error: null,
  currentPage: 1,
};

const petSlice = createSlice({
  name: "pet",
  initialState: INITIAL_STATE,

  reducers: {
    clearState(state: IState) {
      state.news = [];
      state.friends = [];
      state.notices = [];
      state.pets = [];
      state.cities = [];
      state.totalNews = 0;
      state.totalNotices = 0;
    },
    setCurrentPage(state: IState, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, handlePending)
      .addCase(
        fetchNews.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.news = action.payload.news;
          state.totalNews = action.payload.totalNews;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchNews.rejected, handleRejected)

      .addCase(fetchCities.pending, handlePending)
      .addCase(
        fetchCities.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.cities = action.payload.cities;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchCities.rejected, handleRejected)

      .addCase(fetchNotices.pending, handlePending)
      .addCase(
        fetchNotices.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.notices = action.payload.notices;
          state.totalNotices = action.payload.totalNotices;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchNotices.rejected, handleRejected);

    // .addCase(addProduct.pending, handlePending)
    // .addCase(
    //   addProduct.fulfilled,
    //   (state: IState, action: PayloadAction<IProducts>) => {
    //     state.isLoading = false;
    //     state.products.unshift(action.payload);
    //     state.error = null;
    //     toast.success("New product was successfully added");
    //   }
    // )
    // .addCase(
    //   addProduct.rejected,
    //   (state: IState, action: PayloadAction<unknown>): void => {
    //     state.isLoading = false;
    //     state.error = action.payload;

    //     if (state.error === "Request failed with status code 409") {
    //       toast.error("The product exists with this name");
    //     }
    //   }
    // )

    // .addCase(deleteProduct.pending, handlePending)
    // .addCase(
    //   deleteProduct.fulfilled,
    //   (state: IState, action: PayloadAction<{ productId: string }>) => {
    //     state.isLoading = false;
    //     state.products = state.products.filter(
    //       (product) => product._id !== action.payload.productId
    //     );
    //     state.error = null;
    //   }
    // )
    // .addCase(deleteProduct.rejected, handleRejected)

    // .addCase(editProduct.pending, handlePending)
    // .addCase(
    //   editProduct.fulfilled,
    //   (state: IState, action: PayloadAction<IProducts>) => {
    //     state.isLoading = false;
    //     const index = state.products.findIndex(
    //       (product) => product._id === action.payload._id
    //     );
    //     if (index !== -1) {
    //       state.products[index] = action.payload;
    //     }
    //     state.error = null;
    //   }
    // )
    // .addCase(editProduct.rejected, handleRejected)

    // .addCase(addSupplier.pending, handlePending)
    // .addCase(
    //   addSupplier.fulfilled,
    //   (state: IState, action: PayloadAction<ISuppliers>) => {
    //     state.isLoading = false;
    //     state.suppliers.push(action.payload);
    //     state.error = null;
    //     toast.success("New product was successfully added");
    //   }
    // )
    // .addCase(
    //   addSupplier.rejected,
    //   (state: IState, action: PayloadAction<unknown>): void => {
    //     state.isLoading = false;
    //     state.error = action.payload;

    //     if (state.error === "Request failed with status code 409") {
    //       toast.error("The product exists with this name");
    //     }
    //   }
    // )

    // .addCase(editSupplier.pending, handlePending)
    // .addCase(
    //   editSupplier.fulfilled,
    //   (state: IState, action: PayloadAction<ISuppliers>) => {
    //     state.isLoading = false;
    //     const index = state.suppliers.findIndex(
    //       (supplier) => supplier._id === action.payload._id
    //     );
    //     if (index !== -1) {
    //       state.suppliers[index] = action.payload;
    //     }
    //     state.error = null;
    //   }
    // )
    // .addCase(editSupplier.rejected, handleRejected);
  },
});

export const { clearState, setCurrentPage } = petSlice.actions;

// Редюсер слайсу
export const petReducer = petSlice.reducer;

import { IState } from "./petSlice";
import { IFilter } from "../filterSlice";

export const selectProducts = (state: { admin: IState }) =>
  state.admin.products;

export const selectSuppliers = (state: { admin: IState }) =>
  state.admin.suppliers;

export const selectCustomers = (state: { admin: IState }) =>
  state.admin.customers;

export const selectIncomeExpenses = (state: { admin: IState }) =>
  state.admin.incomeExpenses;

export const selectOrders = (state: { admin: IState }) => state.admin.orders;

export const selectIsLoading = (state: { admin: IState }) =>
  state.admin.isLoading;

export const selectError = (state: { admin: IState }) => state.admin.error;

export const selectFilter = (state: IFilter) => state.filter;

export const selectCurrentPage = (state: { admin: IState }) =>
  state.admin.currentPage;

export const selectTotalCustomers = (state: { admin: IState }) =>
  state.admin.totalCustomers;

export const selectTotalProducts = (state: { admin: IState }) =>
  state.admin.totalProducts;

export const selectTotalSuppliers = (state: { admin: IState }) =>
  state.admin.totalSuppliers;

export const selectTotalOrders = (state: { admin: IState }) =>
  state.admin.totalOrders;
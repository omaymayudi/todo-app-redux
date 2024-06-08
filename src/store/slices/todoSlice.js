import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    const response = await axios.get("todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  try {
    await axios.post("todos", todo);
    const response = await axios.get("todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  try {
    await axios.delete(`todos/${id}`);
    const response = await axios.get("todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const editTodo = createAsyncThunk("todos/editTodo", async (todo) => {
  try {
    await axios.patch(`todos/${todo.id}`, todo);
    const response = await axios.get("todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteAll = createAsyncThunk("todos/deleteAll", async () => {
  try {
    await axios.delete("todos");
    const response = await axios.get("todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: { data: null, error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      // console.log(state.data);
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });

    // add todo
    builder.addCase(addTodo.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });

    // remove todo
    builder.addCase(removeTodo.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(removeTodo.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });

    // edit todo
    builder.addCase(editTodo.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(editTodo.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });
    // delete all
    builder.addCase(deleteAll.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(deleteAll.fulfilled, (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    });
    builder.addCase(deleteAll.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });
  },
});

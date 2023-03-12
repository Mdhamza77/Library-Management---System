import { screen, waitFor } from "@testing-library/react";
import {
  getAllBooks,
  getBooks,
  editBooks,
  deleteBooks,
  addBooks,
} from "./book.service";

describe("get All Book service", () => {
  it("get all book data from service api", async () => {
    await getAllBooks()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });
  waitFor(() => {
    expect(screen.getByText("/value from the api")).toBeInTheDocument();
  });
});

describe("get Books service", (id) => {
  it("get particular book from params id", async () => {
    await getBooks(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });
  waitFor(() => {
    expect(screen.getByText("/value from the api")).toBeInTheDocument();
  });
});

describe("edit book service", (id, book) => {
  it("Edit Book using param id", async () => {
    await editBooks(id, book)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });
  waitFor(() => {
    expect(screen.getByText("/value from the api")).toBeInTheDocument();
  });
});

describe("delete Book service api", (id) => {
  it("delete books using params id", async () => {
    await deleteBooks(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });
  waitFor(() => {
    expect(screen.getByText("/value from the api")).toBeInTheDocument();
  });
});

describe("add Books", (book) => {
  it("adding book service api", async () => {
    await addBooks(book)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });

  waitFor(() => {
    expect(screen.getByText("/value from the api")).toBeInTheDocument();
  });
});

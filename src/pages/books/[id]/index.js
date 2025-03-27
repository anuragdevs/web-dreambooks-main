import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/layout/Layout";
import Loader from "@/modules/Loader";
import Button from "@/components/Button";
import { getSingleBook, editBook } from "@/services/APIs/books";
import { successMessage, errorMessage } from "@/Utilities/toasters";

export default function BookDetailPage({ role }) {
  const router = useRouter();
  const { id } = router.query;

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) fetchBookDetails(id);
  }, [id]);

  const fetchBookDetails = async (bookId) => {
    try {
      setLoading(true);
      const response = await getSingleBook(bookId);
      if (response?.data) setBook(response.data);
    } catch (error) {
      console.error("❌ Error fetching book:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (newStatus) => {
    try {
      const formData = new FormData();
      formData.append("status", newStatus);

      const response = await editBook(formData, id);

      if (response?.status || response?.success) {
        successMessage(`Book ${newStatus} successfully.`);
        fetchBookDetails(id);
      } else {
        errorMessage("Failed to update book status.");
      }
    } catch (err) {
      errorMessage("Something went wrong while updating status.");
      console.error("❌ updateStatus error:", err);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-600";
      case "pending":
        return "bg-yellow-500";
      case "rejected":
        return "bg-red-600";
      default:
        return "bg-gray-400";
    }
  };

  if (loading) return <Loader />;

  if (!book) {
    return (
      <Layout>
        <div className="p-6 text-red-600 font-semibold text-xl">
          Book not found.
        </div>
      </Layout>
    );
  }

  return (
    <Layout role={role}>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={() => router.push("/books")}>←</button>
            <h1 className="text-2xl font-semibold">Book Detail</h1>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex gap-6">
          <div className="w-1/2">
            <img
              src={book.coverImage?.url || book.coverImage}
              alt={book.title}
              className="rounded-lg w-full max-h-[550px] object-contain"
            />
          </div>

          <div className="w-1/2 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <span className={"text-white text-xs px-3 py-1 rounded-full " + getStatusColor(book.status)}>
                {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
              </span>
              <Button variant="primary" onClick={() => router.push(`/books/${id}/edit`)}>
                Edit
              </Button>
            </div>

            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-sm text-gray-700">{book.description}</p>

            <h3 className="font-semibold text-gray-500 mt-4">Book Info</h3>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
              <div><p className="font-semibold">Price</p><p>₹{book.price}</p></div>
              <div><p className="font-semibold">Genre</p><p>{book.category || "N/A"}</p></div>
              <div><p className="font-semibold">Author</p><p>{book.author?.name || "N/A"}</p></div>
              <div><p className="font-semibold">Language</p><p>{book.language || "N/A"}</p></div>
              <div><p className="font-semibold">ISBN</p><p>{book.isbnNumber || "N/A"}</p></div>
            </div>

            {role !== "author" && book.status === "pending" && (
              <div className="flex gap-4 mt-4">
                <Button variant="danger" onClick={() => updateStatus("rejected")}>
                  Reject
                </Button>
                <Button variant="success" onClick={() => updateStatus("approved")}>
                  Approve
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const role = req.cookies._r || null;
  return {
    props: {
      role,
    },
  };
}

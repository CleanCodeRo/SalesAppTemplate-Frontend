import React from "react";
import { useState } from "react";

const ReviewForm = ({ onClose }) => {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-16 p-4 bg-white shadow rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          id="name"
          className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2  focus:ring-primary-100"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Rating</label>
        <ul className="flex justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <li key={star} onClick={() => handleStarClick(star)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={star <= rating ? "gold" : "none"}
                stroke="gold"
                className="mr-1 h-5 w-5 text-warning cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Message</label>
        <textarea
          id="message"
          className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2  focus:ring-primary-100"
        ></textarea>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="py-2 px-4 bg-primary-100 text-white rounded hover:bg-primary-100 focus:outline-none focus:ring-2  focus:ring-primary-200"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;

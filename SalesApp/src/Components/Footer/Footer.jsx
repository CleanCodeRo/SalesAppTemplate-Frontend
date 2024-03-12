import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Function to initialize chatbox after the DOM has loaded
    const chatbox = document.getElementById("chatbox");
    const chatContainer = document.getElementById("chat-container");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const openChatButton = document.getElementById("open-chat");
    const closeChatButton = document.getElementById("close-chat");

    let isChatboxOpen = true; // Set the initial state to open

    // Function to toggle the chatbox visibility
    function toggleChatbox() {
      chatContainer.classList.toggle("hidden");
      isChatboxOpen = !isChatboxOpen; // Toggle the state
    }

    // Add an event listener to the open chat button
    openChatButton.addEventListener("click", toggleChatbox);

    // Add an event listener to the close chat button
    closeChatButton.addEventListener("click", toggleChatbox);

    // Add an event listener to the send button
    sendButton.addEventListener("click", function () {
      const userMessage = userInput.value;
      if (userMessage.trim() !== "") {
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value = "";
      }
    });

    userInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        const userMessage = userInput.value;
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value = "";
      }
    });
  }, []);

  function addUserMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2", "text-right");
    messageElement.innerHTML = `<p class="bg-primary-100 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function addBotMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2");
    messageElement.innerHTML = `<p class="bg-gray-200 text-black rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function respondToUser(userMessage) {
    // Replace this with your chatbot logic
    setTimeout(() => {
      addBotMessage("This is a response from the chatbot.");
    }, 500);
  }

  return (
    <footer className="mt-auto pt-5 bg-primary-100 font-sans border-t-8 border border-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-black xl:text-2xl">
              Subscribe our newsletter to get an update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-black bg-white border rounded-md focus:border-primary-100 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/"
                className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-white"
              >
                Home
              </a>
              <a
                href="/aboutUs"
                className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-white"
              >
                Who We Are
              </a>
              <a
                href="/termsAndConditions"
                className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-white"
              >
                Terms and Conditions
              </a>
            </div>
            <div className="fixed bottom-0 right-8 mb-4 mr-4">
              <button
                id="open-chat"
                className="bg-primary-200 text-white py-2 px-4 rounded-md hover:bg-primary-300 transition duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                Chat with Admin
              </button>
            </div>
            <div
              id="chat-container"
              className="hidden fixed bottom-16 right-4 w-96"
            >
              <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                <div className="p-4 border-b bg-primary-100 text-white rounded-t-lg flex justify-between items-center">
                  <p className="text-lg font-semibold">Admin</p>
                  <button
                    id="close-chat"
                    className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div id="chatbox" className="p-4 h-80 overflow-y-auto"></div>
                <div className="p-4 border-t flex">
                  <input
                    id="user-input"
                    type="text"
                    placeholder="Type a message"
                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                  <button
                    id="send-button"
                    className="bg-primary-100 text-white px-4 py-2 rounded-r-md hover:bg-primaruy-200 transition duration-300"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">Customer Support</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/returnForm"
                className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-white"
              >
                Product Return Form
              </a>
              <a
                href="/contact"
                className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-white"
              >
                Contact
              </a>
              <a
                href="https://anpc.ro/?ref=footer_3_6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-white"
              >
                ANPC
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-4 hover:cursor-pointer">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
            </a>
          </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
          © 2023 Clean Code. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

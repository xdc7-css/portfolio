export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-16 text-white">
      {/* لوجو */}
      <svg
        width="160"
        height="45"
        viewBox="0 0 157 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <path
          d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585"
          stroke="#c672d7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        />
      </svg>

























      <p className="mt-4 text-center text-sm">
        Copyright © 2025 •{" "}
        <a
          href="https://www.linkedin.com/in/hussein-ali-37556633b/"
          className="text-purple-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hussein Ali
        </a>{" "}
        • All rights reserved.
      </p>

      {/* أيقونات التواصل */}
      <div className="flex items-center gap-6 mt-6">
        {/* GitHub */}
        <a
          href="https://github.com/xdc7-css"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:scale-110 transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#9b5cff]"
        >
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .297a12 12 0 0 0-3.79 23.412c.6.11.82-.26.82-.577v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.74.08-.73.08-.73 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.54 1 .11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.52 11.52 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.63-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .297"/>
    </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hussein-ali-37556633b/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:scale-110 transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#0077b5]"
        >
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7 19H4v-9h3v9zm-1.5-10.2c-1 0-1.7-.8-1.7-1.8s.8-1.8 1.7-1.8 1.7.8 1.7 1.8-.7 1.8-1.7 1.8zM20 19h-3v-5c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5H11v-9h2.9v1.2h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.6V19z"/>
    </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/203.9.7"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:scale-110 transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#e1306c]"
        >
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1 .4.5.8.9 1 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5-.5.4-.9.8-1.5 1-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1-.4-.5-.8-.9-1-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.3 2.4-.4 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.6.4 3.8.7 3 .9 2.3 1.3 1.6 2c-.7.7-1.1 1.4-1.3 2.2-.3.8-.5 1.8-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.4.3 2.4.6 3.2.2.8.6 1.5 1.3 2.2.7.7 1.4 1.1 2.2 1.3.8.3 1.8.5 3.2.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.4-.1 2.4-.3 3.2-.6.8-.2 1.5-.6 2.2-1.3.7-.7 1.1-1.4 1.3-2.2.3-.8.5-1.8.6-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.4-.3-2.4-.6-3.2-.2-.8-.6-1.5-1.3-2.2-.7-.7-1.4-1.1-2.2-1.3-.8-.3-1.8-.5-3.2-.6C15.7 0 15.3 0 12 0z"/>
      <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8m0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4"/>
      <circle cx="18.4" cy="5.6" r="1.4"/>
    </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:eng23300007@avicenna.uobasrah.edu.iq"
          className="p-2 rounded-full hover:scale-110 transition-all duration-300 hover:text-white hover:shadow-[0_0_10px_#ffb400]"
        >
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z"/>
    </svg>
        </a>
      </div>
    </footer>
  );
}

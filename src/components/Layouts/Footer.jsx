const Footer = () => {
  return (
    <footer className="bg-gray-200 h-20 flex items-center justify-center border-t fixed bottom-0 w-full">
      <p className="text-center text-gray-600">
        All rights reserved <span role="img" aria-label="heart"></span> by{" "}
        <a
          className="text-blue-500 hover:underline"
          href="https://github.com/tannerlinsley"
        >
          Jobayer Ahmed
        </a>
      </p>
    </footer>
  );
};

export default Footer;

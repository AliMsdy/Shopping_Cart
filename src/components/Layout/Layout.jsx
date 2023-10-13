import Header from "../Header/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{ height: "calc(100vh - 130px)" }}
        className=" container mb-5 d-flex flex-column"
      >
        {children}
        <footer className="mt-auto text-center p-4">
          Developed by{" "}
          <a
            href="https://github.com/AliMsdy"
            target="blank"
            className="text-decoration-none"
          >
            AliMoosabadi
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;

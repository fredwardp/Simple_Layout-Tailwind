const Home = () => {
  return (
    <>
      <header
        id="hero"
        className="bg-[url(/img/Home.png)] bg-cover bg-no-repeat bg-center min-h-svh text-slate-50	relative flex justify-center items-center "
      >
        <nav className="flex items-center justify-between px-5 pt-5 max-w-screen-2xl 	absolute top-5 w-full		 left-1/2 transform -translate-x-1/2 -translate-y-1/2	">
          <a className="" href="">
            HOME_H
          </a>
          <div className="flex gap-10 items-center">
            <a className="font-bold" href="#">
              Home
            </a>
            <a className="font-bold" href="#">
              About us
            </a>
            <a className="font-bold" href="#">
              Furniture
            </a>
            <a className="font-bold" href="#">
              Contact us
            </a>
            <a
              className="font-bold rounded-xl border-white border-2 p-2.5"
              href=""
            >
              Log In
            </a>
            <a className="font-bold rounded-xl bg-yellow-500 p-2.5" href="">
              Sign Up
            </a>
          </div>
        </nav>
        <h1 className="text-7xl text-center font-bold pb-20  leading-normal max-w-screen-xl mx-auto">
          Everyone Loves To Welcome A Good Furniture
        </h1>
      </header>
      <main>
        <section className="bg-zinc-200	pt-20 p-10">
          <div className=" flex w-fit	mx-auto gap-14 pb-28 relative">
            <div>
              <h2 className="text-3xl font-bold pb-10">Who we are </h2>
              <p className="font-medium leading-8	max-w-80 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper accumsan turpis quis quis at. Nec, nisi dis duis
                urna, elit justo, euismod. Ultricies fermentum nibh in ut quis
                lacus sollicitudin proin. Eu sit enim ullamcorper nisl id est. A
                pulvinar ut fringilla vulputate feugiat lobortis phasellus
                mattis dignissim. Dapibus sed quam venenatis platea. Et
                pharetra, convallis nec volutpat. Sed id et sed diam. Diam leo
                ipsum, urna in lorem amet euismod.
              </p>
            </div>
            <div className="flex justify-center gap-16 text-lg">
              <article className="flex justify-center items-center flex-col font-bold">
                <img src="/img/chair1.png" alt="" />
                <div className="flex flex-col items-center">
                  <p className="max-w-44	text-center">
                    Light brown chair with wooden legs
                  </p>
                  <p>$100</p>
                </div>
              </article>
              <article className="flex justify-center items-center flex-col font-bold">
                <img src="/img/chair2.png" alt="" />
                <div className="flex flex-col items-center">
                  <p className="max-w-44	text-center">
                    Black chair with long legs
                  </p>
                  <p>$500</p>
                </div>
              </article>
              <article className="flex justify-center items-center flex-col font-bold">
                <img src="/img/chair3.png" alt="" />
                <div className="flex flex-col items-center">
                  <p className="max-w-44	text-center">
                    White chair with spiral design legs
                  </p>
                  <p>$1000</p>
                </div>
              </article>
            </div>
            <div className="bg-zinc-400 w-20	h-20 flex justify-center items-center rounded-full	absolute bottom-0 left-0">
              <img src="/img/ff_btn.svg" alt="" />
            </div>
          </div>
        </section>
        <section className=" bg-zinc-400 pt-20 p-10	">
          <div className="  flex gap-16	mx-auto   max-w-screen-xl		">
            <div className="w-8/12">
              <h2 className="text-slate-50 font-bold text-5xl pb-6	">
                Drop a message
              </h2>
              <form className="flex flex-col" action="">
                <label
                  className="text-slate-50 text-2xl font-bold pb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="px-2 py-6  text-2xl font-bold rounded-xl	bg-zinc-200 mb-8"
                  type="text"
                  id="name"
                  placeholder="Input your name"
                />
                <label
                  className="text-slate-50 text-2xl font-bold pb-2 "
                  htmlFor="number"
                >
                  Mobile no.
                </label>
                <input
                  className="px-2 py-6  text-2xl font-bold rounded-xl	bg-zinc-200 mb-8"
                  type="number"
                  id="number"
                  placeholder="Input your mobile number"
                />
                <label
                  className="text-slate-50 text-2xl font-bold pb-2"
                  htmlFor="name"
                >
                  Message
                </label>
                <textarea
                  className="px-2 py-6  text-2xl font-bold rounded-xl	bg-zinc-200 h-64 mb-6"
                  type="text"
                  id="message"
                  placeholder="Input your message"
                />
                <div className="flex justify-end">
                  <button className="bg-black text-slate-50 w-20 py-2 rounded-lg	font-bold">
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <img
              className="w-10/12	max-w-lg 	"
              src="/img/contact_img.png"
              alt=""
            />
          </div>
        </section>
      </main>
      <footer className="relative">
        <div className="py-24 max-w-6xl	mx-auto	px-6 ">
          <a href="#hero">
            <div className="bg-black w-20 h-16 flex justify-center items-center absolute right-0 bottom-14">
              <img src="/img/up.svg" alt="" />
            </div>
          </a>
          <div className="flex gap-16">
            <article className="font-bold text-2xl flex flex-col gap-5">
              <a href="">OUR COMPANY</a>
              <a href="">About us</a>
              <a href="">Become a Partner</a>
              <a href="">Contact us</a>
            </article>
            <article className="font-bold text-2xl flex flex-col gap-5">
              <a href="">LEARN MORE</a>
              <a href="">How it works</a>
              <a href="">FAQ</a>
              <a href="">Terms and Conditions</a>
              <a href=""> Private Policy</a>
            </article>
            <article className="font-bold text-2xl flex flex-col gap-5">
              <a href="">SUBSCRIBE</a>
              <div className="  text-2xl font-bold rounded-xl	bg-zinc-200 mb-8">
                <input
                  className="bg-transparent	px-4"
                  type="email"
                  placeholder="Input your email address"
                />
                <button className="bg-black text-slate-50 w-32 py-5 rounded-lg	font-bold">
                  SEND
                </button>
              </div>
            </article>
          </div>
        </div>
        <div className="bg-black text-slate-50 px-6 pb-4 pt-1">
          <p>
            By using this website you accept our <span> Terms and </span> use
            and Private
            <span>Policy </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;

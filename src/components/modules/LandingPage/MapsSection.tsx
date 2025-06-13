const MapsSection = () => {
  const Tungsten = {
    fontFamily: `"Tungsten-Bold", sans-serif`,
  };
  const DINNextW1G = {
    fontFamily: `"DINNextW1G-Regular", sans-serif`,
  };

  return (
    <div
      className="ma-container flex justify-center items-center h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url(./background-20.webp)" }}
    >
      <div className="ma-wrapper-content flex justify-between items-center w-4/5 h-full">
        <div className="ma-wrapper-hierarchy flex flex-col w-full">
          <div className="text-slate-900 text-9xl" style={Tungsten}>
            <h1 className="ma-title">YOUR MAPS</h1>
          </div>
          <div
            className="ma-wrapper-description text-slate-900 mt-4"
            style={DINNextW1G}
          >
            <p className="ma-sub-title">FIGHT AROUND THE WORLD</p>
            <p>
              Each map is a playground to showcase your creative thinking.{" "}
              <br />
              Purpose-built for team strategies, spectacular plays, and clutch
              <br />
              moments. Make the play others will imitate for years to come..
            </p>
          </div>
          <div className="ma-wrapper-button mt-12" style={DINNextW1G}>
            <button className="ma-button bg-[#FD4556] px-8 py-4 hover:bg-slate-900 text-slate-100 hover:text-slate-100 duration-300">
              VIEW ALL MAPS
            </button>
          </div>
        </div>
        <div className="ma-wrapper-img">
          <img className="w-[650px]" src="./img-1.webp" />
        </div>
      </div>
    </div>
  );
};

export default MapsSection;

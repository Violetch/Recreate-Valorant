import { useMediaQuery } from "react-responsive";

const AgentSection = () => {
  const isAgentMedium = useMediaQuery({ query: "(max-width: 1025px)" });

  const Tungsten = {
    fontFamily: `"Tungsten-Bold", sans-serif`,
  };
  const DINNextW1G = {
    fontFamily: `"DINNextW1G-Regular", sans-serif`,
  };

  return (
    <div
      className="ag-container h-[90vh] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url(./background-19.webp)" }}
    >
      <div className="ag-wrapper-content flex items-center justify-start w-4/5 h-full gap-14 ">
        {isAgentMedium ? (
          <>
            <div className="flex flex-col">
              <div style={Tungsten}>
                <h1 className="ag-title text-9xl text-neutral-100">
                  YOUR AGENTS
                </h1>
              </div>
              <div
                className="ag-wrapper-description text-neutral-100 mt-3"
                style={DINNextW1G}
              >
                <p className="ag-sub-title">
                  CREATIVITY IS YOUR GREATEST WEAPON.
                </p>
                <p>
                  More than guns and bullets, you’ll choose an Agent armed with
                  adaptive, <br /> swift, and lethal abilities that create
                  opportunities to let your gunplay shine. <br /> No two Agents
                  play alike, just as no two highlight reels will look the same.
                </p>
              </div>
              <div className="ag-wrapper-button mt-12" style={DINNextW1G}>
                <button className="ag-button bg-slate-900 px-8 py-4 hover:bg-slate-100 text-slate-100 hover:text-slate-900 duration-300">
                  VIEW ALL AGENT
                </button>
              </div>
            </div>
            <div className="ag-wrapper-img">
              <img className="ag-img w-[650px]" src="./img-10.webp" />
            </div>
          </>
        ) : (
          <>
            <div>
              <img className="w-[650px]" src="./img-10.webp" />
            </div>
            <div className="flex flex-col">
              <div style={Tungsten}>
                <h1 className="text-9xl text-neutral-100">YOUR AGENTS</h1>
              </div>
              <div className="text-neutral-100 mt-3" style={DINNextW1G}>
                <p>CREATIVITY IS YOUR GREATEST WEAPON.</p>
                <p>
                  More than guns and bullets, you’ll choose an Agent armed with
                  adaptive, <br /> swift, and lethal abilities that create
                  opportunities to let your gunplay shine. <br /> No two Agents
                  play alike, just as no two highlight reels will look the same.
                </p>
              </div>
              <div className="mt-12" style={DINNextW1G}>
                <button className="bg-slate-900 px-8 py-4 hover:bg-slate-100 text-slate-100 hover:text-slate-900 duration-300">
                  VIEW ALL AGENT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AgentSection;

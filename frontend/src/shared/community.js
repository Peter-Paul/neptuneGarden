import PP from "../assets/pp.jpg"


function Community() {
    return ( 
        <>
            <div className="card shadow p-5" style={{backgroundColor:"#b8dbe1",borderRadius:"60px"}}>
                <div className="card-body my-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1 className="display-4 sea-text">
                                <strong>
                                    We’re building a
                                    fully community
                                    owned funding
                                    program
                                </strong>
                            </h1>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="">
                                <li><p>100% of revenues and royalties are going to the NG community treasury to maximise treasury value</p></li>
                                <li><p>Your Pass is your identity. All your contributions are rewarded and turned into valuable non-transferable points</p></li>
                                <li><p>Collect XPs to be eligible for future rewards. Noncustodial staking earns you 1XP every minute your Pass is staked</p></li>
                                <li><p>Donate to sustain the Garden. Each donors has a unique place and is rewarded with unique medals.</p></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5 d-flex justify-content-between row">
                        <div className="col-12 col-md-8">
                            <h1 >“The ultimate decentralized community for incubating & funding decentralized AI projects”</h1>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="d-flex justify-content-end">

                                <div className="pp-holder shadow">
                                    <div style={{backgroundImage:`url(${PP})`}} 
                                    className="pp-img" alt=""></div>
                                </div>
                            </div>
                            <p className="mt-2 text-end">Andrea Armanni, Growth Product Manager Ocean Protocol</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
     );
}

export default Community;
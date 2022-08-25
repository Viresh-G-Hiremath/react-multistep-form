import { useEffect, useState } from "react";
import "./Forms.css";

export default function Forms({ page }) {
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");
  const [plan, setPlan] = useState("For myself");
  const [details, setDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      fullName,
      displayName,
      workspaceName,
      workspaceUrl,
      plan,
    });
  };
  console.log(details);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        {page === 1 && (
          <div>
            <div className="text-center">
              <h2 className="h3">Welcome! First things first...</h2>
              <p className="text-muted fontsize2">
                You can always change them later.
              </p>
            </div>
            <div className="width m-auto">
              <div className="mb-3">
                <label
                  htmlFor="fullname"
                  className="form-label fw-semibold fontsize2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Steve Jobs"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="displayname"
                  className="form-label fw-semibold fontsize2"
                >
                  Display Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="displayname"
                  placeholder="Steve"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
        {page === 2 && (
          <div>
            <div className="text-center">
              <h2 className="h3">Let's set up a home htmlFor all your work</h2>
              <p className="text-muted fontsize2">
                You can always create another workspace later.
              </p>
            </div>
            <div className="width m-auto">
              <div className="mb-3">
                <label
                  htmlFor="workspacename"
                  className="form-label fw-semibold fontsize2"
                >
                  Workspace Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="workspacename"
                  placeholder="Eden"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="workspaceurl"
                  className="form-label fw-semibold fontsize2"
                >
                  Workspace URL <span className="text-muted">(optional)</span>
                </label>
                <div className="container">
                  <div className="row">
                    <div className="col-auto bg-light text-center border rounded-start">
                      <p className="text-muted m-0 pt-2 fontsize2">
                        www.eden.com/
                      </p>
                    </div>
                    <input
                      type="text"
                      className="col form-control rounded-0 rounded-end"
                      id="workspaceurl"
                      placeholder="Example"
                      value={workspaceUrl}
                      onChange={(e) => setWorkspaceUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {page === 3 && (
          <div>
            <div className="text-center">
              <h2 className="h3">How are you planning to use Eden?</h2>
              <p className="text-muted fontsize2 mb-3">
                We'll streamline your setup experience accordingly.
              </p>
            </div>
            <div className="width m-auto">
              <div className="my-3">
                <div className="container-lg px-0">
                  <div className="row gx-3">
                    <div className="col">
                      <div
                        className={`card ${
                          plan === "For myself" ? "border-primary" : ""
                        }`}
                      >
                        <div
                          className="card-body"
                          onClick={() => setPlan("For myself")}
                        >
                          <i
                            className={`fas fa-user-alt fs-3 mb-3 ${
                              plan === "For myself" ? "text-primary" : ""
                            }`}
                          ></i>
                          <h6 className="card-title pb-1 fontsize2 fw-bold">
                            For myself
                          </h6>
                          <p className="card-text text-muted fontsize1">
                            Write better. Think more clearly. stay organized.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className={`card ${
                          plan !== "For myself" ? "border-primary" : ""
                        }`}
                      >
                        <div
                          className="card-body"
                          onClick={() => setPlan("With my team")}
                        >
                          <i
                            className={`fas fa-users fs-3 mb-3 ${
                              plan !== "For myself" ? "text-primary" : ""
                            }`}
                          ></i>
                          <h6 className="card-title pb-1 xyz fw-bold fontsize2">
                            With my team
                          </h6>
                          <p className="card-text text-muted fontsize1">
                            Wikis, docs, tasks & projects, all in one place.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {page === 4 && (
          <div>
            <div className="text-center mt-4">
              <i className="bi bi-check-circle-fill fontsize3 text-primary"></i>
              <h2 className="mt-4 h3">Congratulations, Eren!</h2>
              <p className="text-muted fontsize2 mb-4">
                You have completed onboarding, you can start using the Eden!.
              </p>
            </div>
            <div className="width m-auto">
              <button type="submit" className="btn btn-primary w-100 py-2">
                <p className="xyz small m-0">Launch Eden</p>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

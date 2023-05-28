let getUserDetails = () => {
    return new Promise(async (resolve, reject) => {
      const input = document.getElementById("search").value.trim();
      if (input === "") {
        reject("Input is empty");
        return;
      }
  
      const fetchAPI = await fetch(`https://api.github.com/users/${input}`);
      const getJSON = await fetchAPI.json();
      resolve(getJSON);
    });
  };
  
  let createUserCard = async () => {
    try {
      let res = await getUserDetails();
      let {
        avatar_url,
        name,
        bio,
        followers,
        following,
        public_repos,
        twitter_username,
        location
      } = res;
  
      let selectgitCardId = document.getElementById("main");
      selectgitCardId.innerHTML = `<div class="container-fluid" style="background-color: brown; border-radius: 1.5rem">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 col-xl-4" id="change">
          <img src="${avatar_url}" class="img-fluid rounded-circle" style="width: 10rem; height: 10rem;">
        </div>
        <div class="col-12 col-md-8 col-lg-8 col-xl-8" id="change">
          <h5><span style="font-family: 'Roboto Mono', monospace;">Name: ${name}</span></h5>
          <br />
          <h6><span style="font-family: 'Roboto Mono', monospace;">Bio: ${bio}</span></h6>
          <br />
          <p class="card-text">
            <span style="font-family: Tahoma, Geneva, Verdana, sans-serif;">Followers:</span> ${followers} &nbsp;&nbsp;
            <span style="font-family: Tahoma, Geneva, Verdana, sans-serif;">Following:</span> ${following} &nbsp;&nbsp;
            <span style="font-family: Tahoma, Geneva, Verdana, sans-serif;">Repos:</span> ${public_repos}
          </p>
          <p class="card-text">
            <span style="font-family: Tahoma, Geneva, Verdana, sans-serif;">Twitter:</span> ${twitter_username} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-family: Tahoma, Geneva, Verdana, sans-serif;">Location:</span> ${location}
          </p>
        </div>
      </div>
    </div>`;
    } catch (error) {
      console.log(error);
    }
  };
  
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    createUserCard();
  });
  
  /* <div class="card mb-3">
                                      <div class="row g-0">
                                        <div class="col-sm-4 col-md-4 col-lg-4">
                                          <img src="${avatar_url}" class="img-fluid rounded-start" alt="..." style="height: 100%">
                                        </div>
                                        <div class="col-sm-8 col-md-8 col-lg-8">
                                          <div class="card-body">
                                            <h5 class="card-title"><span style="">${name}</span></h5>
                                            <br />
                                            <h6 class="card-text">${bio}</h6>
                                            <br />
                                            <p class="card-text">
                                              <span>Followers:</span>   ${followers} &nbsp;&nbsp;
                                              <span>Following:</span>   ${following} &nbsp;&nbsp;
                                              <span>Repos:</span> ${public_repos}
                                            </p>
                                            <p class="card-text">
                                              <span>Twitter:</span> ${twitter_username} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                              <span>Location:</span>${location}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>` */
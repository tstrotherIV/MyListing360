const remoteURL = "https://mylisting360api.herokuapp.com";

export default {
  get(id, resource, expand) {
    return fetch(`${remoteURL}/${resource}/${id}${expand}`).then((result) =>
      result.json()
    );
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then((result) => result.json());
  },
  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newMedia) {
    return fetch(`${remoteURL}/photoAlbums/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMedia),
    }).then((data) => data.json());
  },
  update(resource, editedMedia) {
    return fetch(`${remoteURL}/${resource}/${editedMedia.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedMedia),
    }).then((data) => data.json());
  },
  updateTourTrash(resource, id, editedMedia) {
    return fetch(`${remoteURL}/${resource}/${id}${editedMedia}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedMedia),
    }).then((data) => data.json());
  },
  postNewImage(newMedia) {
    return fetch(`${remoteURL}/VRimages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMedia),
    }).then((data) => data.json());
  },
  getUser(username) {
    return fetch(`${remoteURL}/users?q=${username}`).then((result) =>
      result.json()
    );
  },
  getUsersTours(resource, userId, boolean) {
    return fetch(
      `${remoteURL}/${resource}?userId=${userId}&trash=${boolean}`
    ).then((result) => result.json());
  },
  getTourImages(tourId) {
    return fetch(
      `${remoteURL}/photoAlbums/${tourId}?_embed=VRimages`
    ).then((result) => result.json());
  },
  createNewUser(newUser) {
    return fetch(`${remoteURL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((data) => data.json());
  },
  moveToTrash(tour) {
    return fetch(`${remoteURL}/trash/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tour),
    }).then((data) => data.json());
  },
};

const remoteURL = "http://localhost:5002";

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
  update(editedMedia) {
    return fetch(`${remoteURL}/products/${editedMedia.id}`, {
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
  getUsersTours(resource, userId) {
    return fetch(`${remoteURL}/${resource}?userId=${userId}`).then((result) =>
      result.json()
    );
  },
  getTourImages(tourId) {
    return fetch(
      `${remoteURL}/photoAlbums/${tourId}?_embed=VRimages`
    ).then((result) => result.json());
  },
};

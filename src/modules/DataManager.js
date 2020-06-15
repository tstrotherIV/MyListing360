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
  delete(id) {
    return fetch(`${remoteURL}/products/${id}`, {
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
    return fetch(`${remoteURL}/360images/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMedia),
    }).then((data) => data.json());
  },
};

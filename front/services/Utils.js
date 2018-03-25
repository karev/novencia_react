export const postFetch = ({ url, params }, callback) => {
  const data = new FormData();
  data.append( "json", JSON.stringify( params ) );

  fetch(url, {
    method: 'POST',
    body: data,
  }).then(res => res.json())
    .then(data => callback(data));
};

export const getFetch = (url, callback) => {
  fetch(url)
  .then(resp => resp.json())// Transform the data into json
  .then(data => {
    callback(data);
  });
}
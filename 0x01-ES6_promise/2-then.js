/* Appending three handlers to the function */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}

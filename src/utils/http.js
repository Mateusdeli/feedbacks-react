const baseUrl = process.env.NEXT_PUBLIC_API

async function post(url, body) {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      mode: 'cors',
    })
    return await response.json()
  } catch (error) {
    return Promise.reject(error)
  }
}

async function get(url) {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
    return await response.json()
  } catch (error) {
    return Promise.reject(error)
  }
}

export { get, post }

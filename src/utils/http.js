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
  } catch (err) {
    return Promise.reject(err)
  }
}

export { post }

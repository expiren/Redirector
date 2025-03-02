addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  // Get the tracking text from the pathname (remove the leading '/')
  const trackingText = url.pathname.slice(1)
  if (!trackingText) {
    return new Response("Tracking parameter missing.", { status: 400 })
  }
  // Redirect to the target domain with the tracking text appended
  return Response.redirect(`http://bfgtrelnrkd.pics/${trackingText}`, 302)
}

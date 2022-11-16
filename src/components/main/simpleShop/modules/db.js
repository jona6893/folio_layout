export async function insertOrder (payload) {
    console.log(payload);
    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4";
    const url =
      "https://tdmwbheqhsnbtuazcowv.supabase.co/rest/v1/messagePosting";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4",
        Authentication:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4",
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    }) 
    const data = await res.json()
    return data
}

/* 
const options = {
  method: 'POST',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4',
    Authentication: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4',
    'Content-Type': 'application/json',
    Prefer: 'return=representation'
  },
  body: '{"name":"Planet Earth II","seasons":1,"director":"David Attenborough","rating":5,"ongoing":false}'
};

fetch('https://tdmwbheqhsnbtuazcowv.supabase.co/rest/v1/tvshows', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
*/
import fetch from 'node-fetch';

// API endpoint for the website
const NETLIFY_URL = 'https://api.netlify.com/build_hooks/';

async function postData(url = '') {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response;
}

const token = process.env.WORKFLOW_GH_TOKEN;
if (!token) {
  throw new Error('WORKFLOW_GH_TOKEN is not set');
}

postData(`${NETLIFY_URL}${token}`)
  .then(data => {
    console.log(`Netlify responsed with HTTP ${data.status} - deployment success!`);
  });
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// const apiKey = "GR60rZqJzwFnhc7WZLGF4zg5RkOKrlgl";

async function logWallpapers() {
    console.log("Fetching wallpaper data...")
    const response = await fetch("https://wallhaven.cc/api/v1/w/856dlk", {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
    });
    const wallpaper = await response.json();
    console.log(wallpaper);
}
  
logWallpapers() 
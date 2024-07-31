const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const https = require("https");

const app = express();
const port = 3001; // Define the port variable

app.use(cors()); // Enable CORS

// Serve static files from the "images" and "images2" directories
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/images2", express.static(path.join(__dirname, "images2")));

app.get("/api/images", (_req, res) => {
  const imagesDir = path.join(__dirname, "images");

  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error("Error reading images directory:", err);
      return res
        .status(500)
        .json({ message: "Error reading images directory" });
    }

    const imageFiles = files.map((file) => ({
      id: file,
      url: `/images/${file}`,
      title: file,
    }));

    res.json(imageFiles);
  });
});

app.get("/api/images2", (_req, res) => {
  const imagesDir = path.join(__dirname, "images2");

  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error("Error reading images directory:", err);
      return res
        .status(500)
        .json({ message: "Error reading images directory" });
    }

    const imageFiles = files.map((file) => ({
      id: file,
      url: `/images2/${file}`,
      title: file,
    }));

    res.json(imageFiles);
  });
});

// Serve static files from the "videos" and "thumbnails" directories
app.use("/videos", express.static(path.join(__dirname, "videos")));
app.use("/thumbnails", express.static(path.join(__dirname, "thumbnails")));

app.get("/api/videos", (_req, res) => {
  const videosDir = path.join(__dirname, "videos");
  const thumbnailsDir = path.join(__dirname, "thumbnails");

  fs.readdir(videosDir, (err, videoFiles) => {
    if (err) {
      console.error("Error reading videos directory:", err);
      return res
        .status(500)
        .json({ message: "Error reading videos directory" });
    }

    fs.readdir(thumbnailsDir, (err, thumbnailFiles) => {
      if (err) {
        console.error("Error reading thumbnails directory:", err);
        return res
          .status(500)
          .json({ message: "Error reading thumbnails directory" });
      }

      const videos = videoFiles.map((file, index) => ({
        id: `video${index + 1}`,
        url: `/videos/${file}`,
        thumbnail: `/thumbnails/${thumbnailFiles[index]}`,
        title: `Video ${index + 1}`,
      }));

      res.json(videos);
    });
  });
});

// Serve static files from the "videos2" and "thumbnails2" directories
app.use("/videos2", express.static(path.join(__dirname, "videos2")));
app.use("/thumbnails2", express.static(path.join(__dirname, "thumbnails2")));

app.get("/api/videos2", (_req, res) => {
  const videosDir2 = path.join(__dirname, "videos2");
  const thumbnailsDir2 = path.join(__dirname, "thumbnails2");

  fs.readdir(videosDir2, (err, videoFiles) => {
    if (err) {
      console.error("Error reading videos directory:", err);
      return res
        .status(500)
        .json({ message: "Error reading videos directory" });
    }

    fs.readdir(thumbnailsDir2, (err, thumbnailFiles) => {
      if (err) {
        console.error("Error reading thumbnails directory:", err);
        return res
          .status(500)
          .json({ message: "Error reading thumbnails directory" });
      }

      const videos = videoFiles.map((file, index) => ({
        id: `video${index + 1}`,
        url: `/videos2/${file}`,
        thumbnail: `/thumbnails2/${thumbnailFiles[index]}`,
        title: `Video ${index + 1}`,
      }));

      res.json(videos);
    });
  });
});

const key = fs.readFileSync(path.resolve(__dirname, "key.pem"));
const cert = fs.readFileSync(path.resolve(__dirname, "cert.pem"));

https.createServer({ key, cert }, app).listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});

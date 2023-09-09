const fs = require("fs");
const path = require("path");
const catchAsync = require("../utils/catch-async");

const loadVideo = catchAsync(async (req, res) => {
  const filename = req.params.filename;
  const videoPath = path.join(__dirname, `../public/src/${filename}`);

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });

    const headers = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control": "no-cache",
    };

    // res.writeHead(206, headers);
    // file.pipe(res);
    res.sendFile(videoPath, {
      headers,
    });
  } else {
    const headers = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(200, headers);
    fs.createReadStream(videoPath).pipe(res);
  }
});

module.exports = {
  loadVideo,
};

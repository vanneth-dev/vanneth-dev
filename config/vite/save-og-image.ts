import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Plugin } from "vite";

export default function saveOgImagePlugin(): Plugin {
  return {
    name: "save-og-image",
    apply: "serve",

    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/__save-og-image") return next();

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Allow", "POST");
          res.end("Method not allowed");
          return;
        }

        try {
          const chunks: Buffer[] = [];
          let size = 0;
          const maxSize = 10 * 1024 * 1024;

          for await (const chunk of req) {
            const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);

            size += buffer.length;

            if (size > maxSize) {
              res.statusCode = 413;
              res.end("Image exceeds 10 MB");
              return;
            }

            chunks.push(buffer);
          }

          const image = Buffer.concat(chunks);
          const pngSignature = "89504e470d0a1a0a";

          if (
            req.headers["content-type"] !== "image/png" ||
            image.length < 8 ||
            image.subarray(0, 8).toString("hex") !== pngSignature
          ) {
            res.statusCode = 400;
            res.end("Invalid PNG image");
            return;
          }

          const directory = path.resolve(process.cwd(), "public/assets/imgs");

          await mkdir(directory, { recursive: true });
          await writeFile(path.join(directory, "og-image.png"), image);

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: true }));
        } catch (error) {
          console.error("Failed to save OG image:", error);
          res.statusCode = 500;
          res.end("Failed to save image");
        }
      });
    },
  };
}

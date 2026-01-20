import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Serve static HTML files from root directory
  const path = await import("path");
  const staticPath = path.resolve(process.cwd());
  
  // Serve static assets (css, js, images)
  app.use('/css', express.static(path.join(staticPath, 'css')));
  app.use('/js', express.static(path.join(staticPath, 'js')));
  app.use('/images', express.static(path.join(staticPath, 'images')));
  
  // Serve HTML files
  app.get('/', (_req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
  app.get('/index.html', (_req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
  app.get('/about.html', (_req, res) => {
    res.sendFile(path.join(staticPath, 'about.html'));
  });
  app.get('/services.html', (_req, res) => {
    res.sendFile(path.join(staticPath, 'services.html'));
  });
  app.get('/contact.html', (_req, res) => {
    res.sendFile(path.join(staticPath, 'contact.html'));
  });
  
  // Fallback to index.html for any other routes
  app.use('*', (_req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  image: string;
  private?: boolean;
};

export const FALLBACK_PROJECTS: Project[] = [
  {
    title: "Gym Form & Hand Gesture Tracker",
    description: "A real-time computer vision system built from scratch to analyze full-body posture and classify hand gestures using both a custom neural network and an improved KNN algorithm. Initially developed to track exercise form using YOLOv8 and OpenCV in C++, the project was expanded in Python to support fine-grained hand gesture recognition via MediaPipe for more intuitive human-computer interaction.",
    tech: ["Python", "C++", "OpenCV", "MediaPipe", "YOLOv8", "ONNX", "KNN", "Custom Neural Net"],
    github: "https://github.com/akash-v888/gym-form-tracker",
    image: "/handgesture.png"
  },
  {
    title: "InfraPulse",
    description: "InfraPulse is a cloud-native monitoring system that continuously checks the health of deployed services, logs uptime and response times, and visualizes trends in real-time with Grafana. Built with Python, SQLite, and Docker, the system runs on an EC2 instance provisioned via Terraform and includes email and Slack alerts for failure detection. Designed for extensibility with CI/CD and containerized infrastructure.",
    tech: ["Python", "AWS", "Docker", "SQLite", "Grafana", "Terraform"],
    github: "https://github.com/akash-v888/infrapulse",
    image: "/infrapulse.png"
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "A comprehensive dashboard that analyzes sentiment from multiple data sources using machine learning and natural language processing.",
    tech: ["Python", "Playwright", "GPT API", "React", "PostgreSQL"],
    github: "https://github.com/akash-v888/sentiment-dashboard",
    image: "/sentiment.png"
  },
  {
    title: "Reversi Game Engine",
    description: "A complete implementation of the Reversi board game with an intelligent AI opponent using minimax algorithm with alpha-beta pruning.",
    tech: ["Java", "Swing", "JUnit", "Maven"],
    github: "https://github.com/akash-v888/reversi",
    image: "/reversi.png"
  },
  {
    title: "Course Planning Tool",
    description: "An automated course planning system that helps students optimize their academic schedule based on prerequisites and preferences.",
    tech: ["SQL", "Docker", "Appsmith", "Node.js", "REST API"],
    github: "https://github.com/akash-v888/course-matchup",
    image: "/coursematch.png"
  },
  {
    title: "YouTube & Spotify MP3 Downloader",
    description: "A Python-based GUI tool that extracts audio using yt-dlp, embeds cover art with Mutagen, and parses Spotify playlists via Spotipy. Supports batch downloads, dynamic metadata tagging, and persistent folder memory.",
    tech: ["Python", "yt-dlp", "Spotipy", "Tkinter", "Mutagen", "Requests", "dotenv"],
    github: "https://github.com/akash-v888/spotify-or-youtube2mp3",
    image: "/spotify.png"
  },
  {
    title: "Instagram Non-Mutual Follower/Following",
    description: "A browser script that helps users identify Instagram accounts they follow who don't follow them back. Requires manual execution via browser DevTools. **Not officially supported by Instagram — use responsibly.**",
    tech: ["JavaScript", "DevTools", "DOM Parsing"],
    github: "https://github.com/akash-v888/InstagramFollowersFollowing",
    image: "/instafollows.png"
  },
  {
    title: "Connect 4 — Chess.com Style",
    description: "A fully browser-based Connect 4 with a chess.com-inspired UI and a strong client-side AI engine running in a Web Worker. The AI uses minimax with alpha-beta pruning, a transposition table (FNV-1a hash, ~1M slots with mirror symmetry), and an opening book from Pascal Pons' solved Connect 4 database. Switches to perfect endgame play when ≤14 empty cells remain. No backend — fully static.",
    tech: ["React 18", "TypeScript", "Vite", "Web Workers", "Minimax", "Alpha-Beta Pruning"],
    github: "https://github.com/akash-v888/Connect4-Bot",
    image: "/connect4.png"
  },
  {
    title: "Cupcake 2048 Bot",
    description: "A Selenium bot that autonomously plays Cupcake 2048 by reading board state directly from the browser's localStorage — no screen capture or image processing. Falls back to DOM class parsing if localStorage is unavailable. Strategy uses expectimax search with iterative deepening, a multi-component heuristic (snake pattern, monotonicity, empty cells, corner penalty), adaptive depth budgeting based on position danger, and Monte Carlo rollouts as a tiebreaker in critical positions.",
    tech: ["Python", "Selenium", "Expectimax", "Iterative Deepening", "Monte Carlo"],
    github: "https://github.com/akash-v888/2048-Browser-Bot",
    image: "/cupcake2048.png"
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "An interactive desktop app that visually demonstrates popular sorting algorithms including Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, and Quick Sort. Users can customize the number of elements, choose the initial array order (random, sorted, or reversed), and control the animation speed. Built with Python and Tkinter, it's an educational tool for understanding sorting behavior through real-time visualization.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/akash-v888/algo_visualizer",
    image: "/sort.png"
  },
];

const GITHUB_API = 'https://api.github.com';
const USERNAME = 'akash-v888';

function fetchWithAuth(url: string) {
  return fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    },
    next: { revalidate: 3600 },
  });
}

function parseField(key: string, block: string): string | undefined {
  const m = block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return m?.[1].trim();
}

async function fetchReadme(repoName: string): Promise<string | null> {
  const res = await fetchWithAuth(`${GITHUB_API}/repos/${USERNAME}/${repoName}/readme`);
  if (!res.ok) return null;
  const data = await res.json() as { content: string; encoding: string };
  if (data.encoding !== 'base64') return null;
  return Buffer.from(data.content, 'base64').toString('utf-8');
}

export async function fetchPortfolioProjects(): Promise<Project[]> {
  try {
    const reposRes = await fetchWithAuth(
      `${GITHUB_API}/users/${USERNAME}/repos?type=public&per_page=100`
    );
    if (!reposRes.ok) {
      console.error(`GitHub repos fetch failed: ${reposRes.status}`);
      return FALLBACK_PROJECTS;
    }

    const repos = await reposRes.json() as Array<{
      name: string;
      html_url: string;
      pushed_at: string;
    }>;

    const results = await Promise.all(
      repos.map(async (repo): Promise<Project | null> => {
        const readme = await fetchReadme(repo.name);
        if (!readme) return null;

        const normalized = readme.replace(/\r\n/g, '\n');
        const match = normalized.match(/<!--\s*\nportfolio-project\s*\n([\s\S]*?)-->/);
        if (!match) return null;

        const block = match[1];
        const title = parseField('title', block);
        const description = parseField('description', block);
        const techRaw = parseField('tech', block);
        const image = parseField('image', block) ?? '';

        if (!title || !description || !techRaw) return null;

        const tech = techRaw.split(',').map(s => s.trim()).filter(Boolean);

        return {
          title,
          description,
          tech,
          github: repo.html_url,
          image,
        };
      })
    );

    const projects = results.filter((p): p is Project => p !== null);

    if (projects.length === 0) {
      console.error('No portfolio-project tags found in any public repo — using fallback');
      return FALLBACK_PROJECTS;
    }

    // Sort newest-pushed first
    const repoByUrl = new Map(repos.map(r => [r.html_url, r.pushed_at]));
    projects.sort((a, b) => {
      const aDate = a.github ? (repoByUrl.get(a.github) ?? '') : '';
      const bDate = b.github ? (repoByUrl.get(b.github) ?? '') : '';
      return bDate.localeCompare(aDate);
    });

    return projects;
  } catch (err) {
    console.error('fetchPortfolioProjects error:', err);
    return FALLBACK_PROJECTS;
  }
}

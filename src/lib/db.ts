import Database from 'better-sqlite3';

const db = new Database('db/portfolio.db');

// Création des tables
export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      level INTEGER NOT NULL,
      category TEXT NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT,
      project_url TEXT,
      github_url TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS experiences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      company TEXT NOT NULL,
      start_date TEXT NOT NULL,
      end_date TEXT,
      description TEXT,
      current BOOLEAN DEFAULT 0
    );
  `);
}
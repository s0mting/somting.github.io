'use client';

import { BookOpen, Search, Eye, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    title: "Getting Started with Cybersecurity",
    description: "A beginner's guide to understanding cybersecurity fundamentals and best practices.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    date: "Dec 1, 2025",
    views: 42,
    tags: ["Security", "Tutorial", "Beginner"]
  },
  {
    title: "Building Secure Web Applications",
    description: "Learn how to build web applications with security in mind from the ground up.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=500&fit=crop",
    date: "Nov 28, 2025",
    views: 38,
    tags: ["Web Dev", "Security", "Tutorial"]
  }
];

const tags = ["Security", "Tutorial", "Web Dev", "Beginner", "Advanced"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground theme-transition">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="border-b border-dashed border-border pb-8 mb-8" style={{ opacity: 1 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <BookOpen size={20} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight pixelated-text" style={{ fontSize: '1.5rem', letterSpacing: '0.1rem' }}>
                blog
              </h1>
              <p className="text-muted-foreground text-sm">where i post stuff</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="search posts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-background border border-border rounded-none text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-all"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">filter by tags:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`inline-flex items-center px-2 py-1 text-xs font-medium border transition-all button-hover ${
                    selectedTags.includes(tag)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border-border'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border border-dashed border-border bg-background hover:bg-muted/50 hover:border-foreground/30 transition-all duration-300 overflow-hidden group cursor-pointer card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden border-b border-dashed border-border" style={{ height: '250px' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <div className="border-b border-dashed border-border p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-all flex-1">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-3 text-muted-foreground shrink-0">
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span className="text-xs font-medium">{post.views}</span>
                      </div>
                      <span className="text-xs font-medium">{post.date}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 text-xs font-medium border transition-colors bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border-border cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

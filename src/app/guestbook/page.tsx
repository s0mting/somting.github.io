'use client';

import { Mail, ThumbsUp, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const comments = [
  {
    name: "John Doe",
    date: "12/05/2025 14:30",
    message: "Amazing portfolio! Love the design.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    name: "Jane Smith",
    date: "12/04/2025 09:15",
    message: "Really cool animations and theme toggle!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
  },
  {
    name: "Mike Wilson",
    date: "12/03/2025 18:45",
    message: "The visitor counter is a nice touch!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
  }
];

export default function GuestbookPage() {
  const [newComment, setNewComment] = useState('');

  return (
    <div className="min-h-screen bg-background text-foreground theme-transition">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="border-b border-dashed border-border pb-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <Mail size={20} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight pixelated-text" style={{ fontSize: '1.5rem', letterSpacing: '0.1rem' }}>
                guestbook
              </h1>
              <p className="text-muted-foreground text-sm">feel free to leave a message!</p>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <div className="mb-8 border border-border p-4">
          <div className="mb-3">
            <label className="text-sm font-medium mb-2 block">Leave comment</label>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-all resize-none"
              rows={4}
            />
          </div>
          <button className="px-6 py-2 bg-primary text-primary-foreground hover:opacity-90 button-hover">
            Sign In to Comment
          </button>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border border-border p-4 hover:border-foreground/30 transition-all card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <img
                  src={comment.avatar}
                  alt={comment.name}
                  className="w-10 h-10 rounded-full border border-border"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{comment.name}</span>
                    <span className="text-xs text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{comment.message}</p>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors button-hover">
                      <ThumbsUp size={14} />
                      <span className="text-xs">Like</span>
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors button-hover">
                      <MessageSquare size={14} />
                      <span className="text-xs">Reply</span>
                    </button>
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

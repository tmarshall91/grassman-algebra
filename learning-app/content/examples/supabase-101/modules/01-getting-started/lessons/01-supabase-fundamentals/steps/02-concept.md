---
id: concept
type: concept
estimated_minutes: 10
---

# Understanding Supabase

At its core, Supabase is an **open-source Backend-as-a-Service (BaaS)** that provides everything you need to build a full-stack application without writing backend code.

## What is Backend-as-a-Service?

Traditional development requires you to:
1. Write backend code (Node.js, Python, etc.)
2. Set up and manage databases
3. Deploy and scale infrastructure
4. Maintain security and updates

A Backend-as-a-Service provides these capabilities as **managed services** that you interact with through client libraries and APIs. You get production-ready backend functionality without managing servers.

## The Supabase Philosophy

Supabase was created with three core principles:

### 1. **Open Source**
Unlike proprietary solutions (like Firebase), Supabase is completely open source. This means:
- No vendor lock-in - you can self-host if needed
- Full transparency - see exactly how everything works
- Community-driven - contributions from developers worldwide
- MIT licensed - use it freely in any project

### 2. **Use Existing Standards**
Rather than inventing new languages or patterns, Supabase builds on proven technologies:
- **PostgreSQL** for the database (not a proprietary NoSQL solution)
- **PostgREST** for auto-generated APIs
- **GoTrue** for authentication
- Standard SQL for queries

This means your Supabase skills transfer to other projects and platforms.

### 3. **Developer Experience First**
Supabase prioritizes making developers productive:
- Simple, intuitive APIs
- Excellent documentation and examples
- Works with any framework (React, Vue, Svelte, vanilla JS, etc.)
- Local development support
- Built-in dashboard for managing everything

## Core Features

Supabase provides five main services, all integrated and working together:

### 1. **Database**
- Full PostgreSQL database (version 15+)
- Row Level Security (RLS) for fine-grained access control
- Auto-generated REST and GraphQL APIs
- Extensions like PostGIS for geospatial data
- Database migrations and version control

### 2. **Authentication**
- Email/password, magic links, social OAuth (Google, GitHub, etc.)
- User management and session handling
- Row Level Security integration
- Customizable email templates
- Multi-factor authentication

### 3. **Storage**
- S3-compatible object storage
- Built-in CDN for fast global delivery
- Image transformations (resize, crop, optimize)
- Access control tied to database policies
- Large file support with resumable uploads

### 4. **Real-time**
- WebSocket-based subscriptions
- Listen to database changes instantly
- Broadcast messages between clients
- Presence tracking (see who's online)
- Built on PostgreSQL's native replication

### 5. **Edge Functions**
- Deploy server-side TypeScript/JavaScript functions
- Run code on the edge (close to users)
- Perfect for webhooks, scheduled tasks, custom logic
- Access to full Supabase services

## How Supabase Works

Here's the typical flow when using Supabase:

```
Your Application (Frontend)
        ↓
Supabase Client Library
        ↓
Supabase API Gateway
        ↓
┌─────────────┬──────────────┬─────────────┐
│  Database   │     Auth     │   Storage   │
│ (PostgreSQL)│   (GoTrue)   │  (S3-like)  │
└─────────────┴──────────────┴─────────────┘
```

1. **You build your frontend** - Use React, Vue, Svelte, Next.js, or any framework
2. **Install Supabase client** - One npm package: `@supabase/supabase-js`
3. **Call Supabase methods** - Simple JavaScript to query data, authenticate users, etc.
4. **Supabase handles everything else** - Database queries, security, scaling, caching

## Supabase vs. Other Solutions

### Supabase vs. Firebase
- **Supabase**: Uses PostgreSQL (relational), open source, SQL queries
- **Firebase**: Uses Firestore (NoSQL), proprietary, Google-owned

### Supabase vs. Traditional Backend (Node.js + Express)
- **Supabase**: No server code needed, instant API, managed infrastructure
- **Traditional**: Full control, custom logic, you manage everything

### Supabase vs. Self-Hosted PostgreSQL
- **Supabase**: Managed, includes auth/storage/real-time, auto-scaling
- **Self-Hosted**: Maximum control, lower cost at scale, you handle operations

## When to Use Supabase

Supabase is excellent for:
- ✅ MVPs and prototypes that need to ship fast
- ✅ CRUD applications with relational data
- ✅ Apps requiring real-time features
- ✅ Projects needing strong authentication
- ✅ Teams wanting to focus on frontend development
- ✅ Applications that may need to self-host later

Supabase might not be ideal for:
- ❌ Applications with extreme, custom performance requirements
- ❌ Projects requiring exotic database features not in PostgreSQL
- ❌ Systems that absolutely cannot use any third-party services

## The Big Picture

Supabase fundamentally changes the development equation:

**Before Supabase:**
- 60% backend infrastructure, 40% actual features

**With Supabase:**
- 10% Supabase setup, 90% actual features

By providing a production-ready backend out of the box, Supabase lets you focus on what makes your application unique: the user experience and the business logic.

In the next section, we'll see this in action with a concrete example.

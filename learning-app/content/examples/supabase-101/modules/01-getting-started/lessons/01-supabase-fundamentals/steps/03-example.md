---
id: example
type: example
estimated_minutes: 8
---

# Supabase in Action: Building a Simple Todo App

Let's see how quickly we can go from zero to a working application with Supabase. We'll build a todo app to demonstrate the key concepts.

## Traditional Approach (What You'd Normally Do)

Without Supabase, building even a simple todo app requires:

1. **Set up backend server**
   ```bash
   npm init
   npm install express pg bcrypt jsonwebtoken cors
   # Create server.js, configure middleware, error handling
   ```

2. **Set up database**
   ```sql
   CREATE TABLE users (...);
   CREATE TABLE todos (...);
   -- Write migration scripts, handle versioning
   ```

3. **Build authentication system**
   ```javascript
   // Implement register endpoint
   // Implement login endpoint
   // Implement JWT verification middleware
   // Handle password hashing
   // Implement token refresh
   // 200-300 lines of code...
   ```

4. **Create CRUD endpoints**
   ```javascript
   app.get('/api/todos', authMiddleware, getTodos);
   app.post('/api/todos', authMiddleware, createTodo);
   app.put('/api/todos/:id', authMiddleware, updateTodo);
   app.delete('/api/todos/:id', authMiddleware, deleteTodo);
   // Implement each handler with validation, error handling
   ```

5. **Deploy everything**
   - Set up hosting (Heroku, AWS, etc.)
   - Configure environment variables
   - Set up database hosting
   - Configure CORS and security
   - Monitor and scale

**Time investment: 1-2 weeks for a senior developer**

## The Supabase Approach

With Supabase, here's the entire process:

### Step 1: Create a Supabase Project (2 minutes)
1. Go to supabase.com
2. Click "New Project"
3. Choose name, database password, region
4. Wait 30 seconds for provisioning

**Result**: You now have a production-ready PostgreSQL database, authentication system, and API.

### Step 2: Create Database Schema (2 minutes)

In the Supabase SQL Editor, run:

```sql
-- Create todos table
CREATE TABLE todos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  task TEXT NOT NULL,
  is_complete BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- Users can only see their own todos
CREATE POLICY "Users can view their own todos"
  ON todos FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own todos
CREATE POLICY "Users can create todos"
  ON todos FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own todos
CREATE POLICY "Users can update their own todos"
  ON todos FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can delete their own todos
CREATE POLICY "Users can delete their own todos"
  ON todos FOR DELETE
  USING (auth.uid() = user_id);
```

**Result**: You have a secure, multi-tenant todo system where users can only access their own data. This security is enforced at the database level, not in your application code.

### Step 3: Install Supabase Client (1 minute)

```bash
npm install @supabase/supabase-js
```

### Step 4: Initialize Supabase (1 minute)

Create a `supabaseClient.js` file:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)
```

Get your URL and key from the Supabase dashboard (Project Settings → API).

### Step 5: Implement Features (10 minutes)

**Sign Up a User:**
```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})
```

**Sign In:**
```javascript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'secure-password'
})
```

**Fetch User's Todos:**
```javascript
const { data: todos, error } = await supabase
  .from('todos')
  .select('*')
  .order('created_at', { ascending: false })
```

**Create a Todo:**
```javascript
const { data, error } = await supabase
  .from('todos')
  .insert({
    task: 'Learn Supabase',
    user_id: user.id
  })
```

**Update a Todo:**
```javascript
const { data, error } = await supabase
  .from('todos')
  .update({ is_complete: true })
  .eq('id', todoId)
```

**Delete a Todo:**
```javascript
const { data, error } = await supabase
  .from('todos')
  .delete()
  .eq('id', todoId)
```

**Subscribe to Real-time Changes:**
```javascript
const subscription = supabase
  .channel('todos')
  .on('postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'todos'
    },
    (payload) => {
      console.log('Change received!', payload)
      // Update UI with new data
    }
  )
  .subscribe()
```

## What Just Happened?

In **15 minutes** of actual work, you built:
- ✅ User authentication (signup, login, sessions)
- ✅ Secure, multi-tenant database
- ✅ Full CRUD API
- ✅ Real-time synchronization
- ✅ Production-ready security (Row Level Security)
- ✅ Scalable infrastructure

## The Key Differences

| Aspect | Traditional | Supabase |
|--------|------------|----------|
| **Backend Code** | 500+ lines | 0 lines |
| **Authentication** | Custom implementation | Built-in |
| **API Endpoints** | Manually created | Auto-generated |
| **Security** | App-level logic | Database-level policies |
| **Real-time** | WebSocket setup | One subscription call |
| **Deployment** | Complex setup | Already deployed |
| **Time to Launch** | 1-2 weeks | 15 minutes |

## Why This Matters

Notice what you **didn't** have to do:
- Write server-side code
- Configure CORS or middleware
- Set up authentication flows
- Create API routes
- Deploy or manage servers
- Write validation logic (database constraints handle it)
- Implement security checks (Row Level Security handles it)

You went straight from idea to implementation. That's the power of Supabase.

## Next Steps

This example used basic features. Supabase also supports:
- Social authentication (Google, GitHub, etc.)
- Magic links (passwordless login)
- File uploads and storage
- Edge functions for custom logic
- Database triggers and webhooks
- And much more...

In upcoming lessons, you'll learn each of these features in depth. For now, just appreciate how Supabase transforms weeks of infrastructure work into minutes of configuration.
